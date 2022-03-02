/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  HStack,
  Box,
  Text,
  Avatar,
  VStack,
  Select,
  Stack,
  useToast,
  Tag,
  Spinner,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import styles from "./style.module.css";
import useProvider from "../../hooks/useProvider";
import {
  ABI_CROSSCHAIN,
  ADDRESS_RINKEBY_CROSSCHAIN,
  ADDRESS_ROPSTEN_CROSSCHAIN,
  ADDRESS_BINANCE_CROSSCHAIN,
} from "../../abis/MY_ABI";
import { ABI_SLEEPTO } from "../../abis/SLEEPY_TOKEN";
import {
  PROVIDER_ROPSTEN,
  PROVIDER_RINKEBY,
  PROVIDER_GOERLI,
} from "../../Utils/Providers";
import styled from "styled-components";
// import logo from '../logo.png';
import Web3 from "web3";
import { useEffect, useState } from "react";
import axios from "axios";

const CrossChainERC20 = () => {
  const toast = useToast();
  const web3 = new Web3(Web3.givenProvider);
  const [fromToken, setFromToken] = useState();
  const [fromAddress, setFromAddress] = useState(); // contract address main net
  const [toAddress, setToAddress] = useState(); // contract address side net
  const [account, setAccount] = useState();
  const [currency, setCurrency] = useState(`ETH`);
  const [balance, setBalance] = useState();
  const [toBalance, setToBalance] = useState();
  const [chainGId, setChainGId] = useState();
  const [toChainId, setToChainId] = useState();
  const [blockChainName, setBlockChainName] = useState();
  const [toBlock, setToBlock] = useState();
  const [listChain, setListChain] = useState([]);
  const [provider, setProvider] = useState();
  const [listToken, setListToken] = useState([]);
  const { getProviders } = useProvider();
  // -------------- set up side effect
  useEffect(() => {
    (async () => {
      // console.log("web3 rkb", web3.eth.getChainId());
      let acc = await web3.eth.getAccounts();
      if (acc.length === 0) acc = await web3.eth.requestAccounts();
      setAccount(acc[0]);
      const bal = await web3.eth.getBalance(
        web3.utils.toChecksumAddress(account)
      );
      setBalance(web3.utils.fromWei(bal, "ether"));
    })();
  }, [blockChainName]);

  const getAddressContract = (chainid) => {
    switch (chainid) {
      case 3: {
        return ADDRESS_ROPSTEN_CROSSCHAIN;
      }
      case 4: {
        return ADDRESS_RINKEBY_CROSSCHAIN;
      }
      case 97: {
        return ADDRESS_BINANCE_CROSSCHAIN;
      }
      default: {
        return "";
      }
    }
  };

  const getProvider = (chainid) => {
    switch (chainid) {
      case 3:
        return PROVIDER_ROPSTEN;
      case 4:
        return PROVIDER_RINKEBY;
      case 5:
        return PROVIDER_GOERLI;
      default:
        return "";
    }
  };

  useEffect(() => {
    (async () => {
      let chain = await web3.eth.getChainId();
      const block = await axios.get(
        `http://localhost:3001/chains/getByChainId?chainId=${chain}`
      );
      setBlockChainName(block.data.chain.chainName);
      setCurrency(block.data.chain.currency);

      await window.ethereum.on("chainChanged", (chainId) => {
        setListToken([]);
        setListChain([]);
        setChainGId(chainId);
      });

      // set address main
      setFromAddress(getAddressContract(chain));

      const pairs = await axios.get(
        `http://localhost:3001/token/getTokenByChainId?chain=${chain}`
      );
      pairs.data.tokens.map((item) => {
        setListToken((arr) => [...arr, item]);
      });
    })();
  }, [chainGId]);

  const onChangeCurrency = async (e) => {
    const chainItem = JSON.parse(e.target.value);
    setToChainId(chainItem.chainId);
    setToBlock(chainItem.chainName);
    // set contract destination address
    setToAddress(getAddressContract(Number(chainItem.chainId)));
    //set web3 of destination
    // const web3Alcm = createAlchemyWeb3(getProvider(Number(chainItem.chainId)));
    // console.log('webal', web3Alcm);
    const web3next = await getProviders(Number(chainItem.chainId));
    setProvider(web3next);
    const bal = await web3next.eth.getBalance(account);
    setToBalance(web3next.utils.fromWei(bal, "ether"));
  };

  const getChangeToken = async (event) => {
    const address = JSON.parse(event.target.value).token;
    setFromToken(address);
    setListChain([]);
    const chain = await web3.eth.getChainId();
    const listChain = await axios.get(
      `http://localhost:3001/pair/pair-existed?chain=${chain}&token=${address}`
    );

    for (const chain of listChain.data.result) {
      const object = await axios.get(
        `http://localhost:3001/chains/getByChainId?chainId=${chain.chain_2}`
      );
      setListChain((arr) => [...arr, object.data.chain]);
    }
  };
  // ---------------- end setup side effect

  //------------- flow zone
  const OnClickExchangeToken = async () => {
    const currentChain = await web3.eth.getChainId();
    const pair = await axios.get(
      `http://localhost:3001/pair/getPair?token=${fromToken}&chain1=${currentChain}&chain2=${toChainId}`
    );
    const amount = document.getElementsByClassName("send")[0].value;

    switch (pair.data.isReverse) {
      case true: {
        await OnReverseTransaction(pair.data, amount);
        break;
      }
      case false: {
        await OnTransaction(pair.data, amount);
        break;
      }
      default: {
        toast({
          title: "No pair found!",
          description: "Choosing pair you want to exchange first!",
          status: "warning",
          duration: 9000,
          isClosable: true,
        });
        break;
      }
    }
  };

  const OnTransaction = async (pair, amount) => {
    // write here
    const token = new web3.eth.Contract(ABI_SLEEPTO.abi, pair.token_1);
    await token.methods
      .approve(fromAddress, web3.utils.toWei(amount, "ether"))
      .send({ from: account });
    const contract = new web3.eth.Contract(ABI_CROSSCHAIN.abi, fromAddress);
    const transaction = await contract.methods
      .depositERC20(pair.token_1, web3.utils.toWei(amount, "ether"))
      .encodeABI();
    await web3.eth
      .sendTransaction({
        from: account,
        to: fromAddress,
        gas: 250000,
        data: transaction,
      })
      .then(async (receipt) => {
        console.log("receipt", receipt);
        // const web3next = createAlchemyWeb3(getProvider(Number(pair.chain_2)));
        const web3next = await getProviders(Number(pair.chain_2));
        // adding verifier for wallet
        const verifier = await web3next.eth.accounts.wallet.add(
          process.env.REACT_APP_MY_PRIVATE_KEY
        );
        const tokenMint = new web3next.eth.Contract(
          ABI_SLEEPTO.abi,
          pair.token_2
        );

        const tx = await tokenMint.methods.mint(
          verifier.address,
          web3next.utils.toWei(amount, "ether")
        );

        const [gasCost] = await Promise.all([
          tx.estimateGas({ from: verifier.address }),
        ]);

        const data = tx.encodeABI();
        const txData = {
          from: verifier.address,
          to: pair.token_2,
          data,
          gas: 100000,
          gasCost,
        };
        await web3next.eth.sendTransaction(txData).then((rep) => {
          toast({
            title: "Transaction success!!",
            description: `Your transaction successfully at: ${rep.transactionHash}`,
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        });
      });
  };

  const OnReverseTransaction = async (pair, amount) => {
    const token = new web3.eth.Contract(ABI_SLEEPTO.abi, pair.token_1);
    const transact = await token.methods
      .burn(account, web3.utils.toWei(amount, "ether"))
      .encodeABI();

    await web3.eth
      .sendTransaction({
        from: account,
        to: pair.token_1,
        gas: 250000,
        data: transact,
      })
      .then(async (receipt) => {
        // const web3Alcm = createAlchemyWeb3(getProvider(Number(pair.chain_2)));
        const web3next = await getProviders(Number(pair.chain_2));
        const verifier = await web3next.eth.accounts.wallet.add(
          process.env.REACT_APP_MY_PRIVATE_KEY
        );
        const contractTo = new web3next.eth.Contract(
          ABI_CROSSCHAIN.abi,
          toAddress
        );
        const tx = await contractTo.methods.withdrawERC20(
          pair.token_2,
          web3next.utils.toWei(amount, "ether")
        );
        const [gasCost] = await Promise.all([
          tx.estimateGas({ from: verifier.address }),
        ]);
        const data = tx.encodeABI();
        const txData = {
          from: verifier.address,
          to: toAddress,
          data,
          gas: 100000,
          gasCost,
        };
// 
        await web3next.eth.sendTransaction(txData).then((rep) => {
          toast({
            title: "Transaction success!!",
            description: `Your transaction successfully at: ${rep.transactionHash}`,
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        });
      });
  };
  //---- end flow zone

  //------------- Testing zone
  const depositETH = async () => {
    const contract = new web3.eth.Contract(ABI_CROSSCHAIN.abi, fromAddress);
    const amount = document.getElementsByClassName("send")[0].value;
    await contract.methods.depositETH().send({
      from: account,
      value: web3.utils.toWei(amount, "ether"),
    });
    toast({
      title: "Deposit Success!",
      description: "Transfer success! Check ur contract please.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  const getBalance = async () => {
    // const token = new web3.eth.Contract(
    //   ABI_SLEEPTO.abi,
    //   ADDRESS_SLEEPTO_AVALANCHE
    // );
    // console.log("here", await token.methods.balanceOf(account).call());
  };

  const withdrawETH = async () => {
    const contract = new web3.eth.Contract(ABI_CROSSCHAIN.abi, fromAddress);
    const amount = document.getElementsByClassName("send")[0].value;
    await contract.methods
      .withdrawETH(web3.utils.toWei(amount, "ether"))
      .send({ from: account });
    toast({
      title: "Withdraw Success!",
      description: "Transfer success! Check ur balance please.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  const GetTransactionHash = async () => {
    // const contract = new web3.eth.Contract(ABI_CROSSCHAIN.abi, fromAddress);
    const transaction = web3.eth.getTransaction(
      "0xfc15884f8db75366025a7baf39876034346b22423407e5a80ad2ff4a7a31b177"
    );
    console.log("transaction", transaction);
  };
  // --------------- end testing zone
  return (
    <Background className={styles.bg_animation}>
      <Box w={`100%`} sx={{ padding: `30px 0px` }}>
        <Box
          w={`100%`}
          sx={{ paddingRight: `45px`, display: `flex`, justifyContent: `end` }}
        >
          <Tag
            shadow={`md`}
            borderRadius={`10px`}
            // borderWidth={`1px`}
            // borderColor={`#d53f8c`}
            bgColor={`#fccee6`}
            color={`#d53f8c`}
            sx={{ padding: `10px` }}
            size={`lg`}
          >
            {account}
          </Tag>
        </Box>
        <Box
          w={`100%`}
          sx={{
            justifyContent: `center`,
            display: `flex`,
            padding: `50px 0px`,
          }}
        >
          <Box
            maxW={`40%`}
            maxH={`80vh`}
            borderWidth={`1px`}
            bgColor={`#fcfcfc`}
            borderRadius={`lg`}
            shadow={`md`}
          >
            <Box pt={`3`} pl={`3`}>
              <Tag
                fontSize={`lg`}
                fontWeight={`semibold`}
                // borderColor={`#d53f8c`}
                bgColor={`#fccee6`}
                // borderWidth={`1px`}
                sx={{ padding: `7px` }}
              >
                Exchange to another net
              </Tag>
            </Box>
            <Box p="10">
              <VStack spacing={10}>
                <Box w={`400px`}>
                  <HStack sx={{ padding: `5px` }}>
                    <Avatar size={`xs`} name={blockChainName} />
                    {/* {blockChain ? "123" : "123"} */}
                    <Text>
                      {blockChainName ? blockChainName : "No block found"}
                    </Text>
                    {listToken.length > 0 ? (
                      <Select
                        onChange={getChangeToken}
                        maxW={`50%`}
                        fontSize={`sm`}
                        placeholder="Select token"
                      >
                        {listToken.map((item, index) => {
                          return (
                            <option key={index} value={JSON.stringify(item)}>
                              {item.tokenSymbol}
                            </option>
                          );
                        })}
                      </Select>
                    ) : (
                      <Spinner />
                    )}
                  </HStack>

                  <InputGroup>
                    <InputLeftElement children={`$`} color={`gray.400`} />
                    <Input blur={`2px`} className={`send`} />
                  </InputGroup>
                  <HStack>
                    <Text color={`#808080`}>Balance:</Text>
                    <Text>
                      {balance} {currency}
                    </Text>
                  </HStack>
                </Box>
                <Box w={`400px`}>
                  <HStack sx={{ padding: `5px` }} maxW={`70%`}>
                    <Avatar size={`xs`} name={toBlock} />
                    {listChain.length > 0 ? (
                      <Select
                        fontSize={`md`}
                        onChange={onChangeCurrency}
                        placeholder="Select net to exchange"
                      >
                        {listChain.map((item, index) => {
                          return (
                            <option key={index} value={JSON.stringify(item)}>
                              {item.chainName}
                            </option>
                          );
                        })}
                      </Select>
                    ) : (
                      <Spinner />
                    )}
                  </HStack>
                  <InputGroup>
                    <InputLeftElement children={`$`} color={`gray.400`} />
                    <Input blur={`2px`} />
                  </InputGroup>
                  <HStack>
                    <Text color={`#808080`}>Balance:</Text>
                    <Text>
                      {toBalance} {currency}
                    </Text>
                  </HStack>
                </Box>
                <Box w={`400px`}>
                  <HStack>
                    <Text color={`#808080`}>Crosschain Fee:</Text>
                    <Text>123 {currency}</Text>
                  </HStack>
                </Box>
                <Box w={`400px`}>
                  <Stack>
                    <Button
                      isFullWidth={true}
                      colorScheme={"pink"}
                      onClick={
                        provider
                          ? OnClickExchangeToken
                          : () =>
                              toast({
                                title: "Exchange Failed!",
                                description:
                                  "Choosing network you want to exchange first!",
                                status: "error",
                                duration: 9000,
                                isClosable: true,
                              })
                      }
                    >
                      {" "}
                      Exchange token
                      <ArrowForwardIcon />
                    </Button>
                  </Stack>
                </Box>
              </VStack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Background>
  );
};

const Background = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 100vh;
  // align-item: center;
  // justify-content: center;
  // padding: 100px 0px;

  height: 100vh;
`;

export default CrossChainERC20;
