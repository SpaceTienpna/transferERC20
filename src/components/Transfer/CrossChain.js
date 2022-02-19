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
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  ABI_CROSSCHAIN,
  ADDRESS_RINKEBY_CROSSCHAIN,
  ADDRESS_ROPSTEN_CROSSCHAIN,
} from "../../abis/MY_ABI";
import { PROVIDERS } from "../../Utils/Providers";
import styled from "styled-components";
// import logo from '../logo.png';
import Web3 from "web3";
import { useEffect, useState } from "react";
import axios from "axios";
import { createAlchemyWeb3 } from "@alch/alchemy-web3";

const CrossChain = () => {
  const toast = useToast();
  const web3 = new Web3(Web3.givenProvider);
  const [fromAddress, setFromAddress] = useState();
  const [toAddress, setToAddress] = useState();
  const [account, setAccount] = useState();
  const [currency, setCurrency] = useState(`ETH`);
  const [balance, setBalance] = useState();
  const [toBalance, setToBalance] = useState();
  const [chainGId, setChainGId] = useState();
  const [blockChainName, setBlockChainName] = useState();
  const [toBlock, setToBlock] = useState();
  const [listChain, setListChain] = useState([]);
  const [provider, setProvider] = useState();

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
      default: {
        return "";
      }
    }
  };

  useEffect(() => {
    (async () => {
      let chain = await web3.eth.getChainId();
      const block = await axios.get(
        `http://localhost:3000/chains/getByChainId?chainId=${chain}`
      );
      setBlockChainName(block.data.chain.chainName);
      setCurrency(block.data.chain.currency);

      await window.ethereum.on("chainChanged", (chainId) => {
        setChainGId(chainId);
      });
      setFromAddress(getAddressContract(chain));
      await axios.get("http://localhost:3000/chains/").then((rep) => {
        setListChain(rep.data.chains);
      });
    })();
  }, [chainGId]);

  const onChangeCurrency = async (e) => {
    const block = await axios.get(
      `http://localhost:3000/chains/getByChainId?chainId=${e.target.value}`
    );
    setToBlock(block.data.chain.chainName);

    const index = document.getElementById("network").selectedIndex - 1;
    setToAddress(getAddressContract(Number(e.target.value)));
    const web3Alcm = createAlchemyWeb3(PROVIDERS[index]);
    setProvider(web3Alcm);
    const bal = await web3Alcm.eth.getBalance(account);
    setToBalance(web3Alcm.utils.fromWei(bal, "ether"));
  };

  const depositETH = async () => {
    const contract = new web3.eth.Contract(
      ABI_CROSSCHAIN.abi,
      fromAddress
    );
    const amount = document.getElementsByClassName("send")[0].value;
    await contract.methods.depositETH().send({
      from: account,
      value: web3.utils.toWei(amount, "ether"),
    });
  };

  const withdrawETH = async() => {
    const contract = new web3.eth.Contract(
      ABI_CROSSCHAIN.abi,
      fromAddress
    );
    const amount = document.getElementsByClassName("send")[0].value;
    await contract.methods.withdrawETH(web3.utils.toWei(amount, "ether")).send();
  }
  
  const onExchangeClick = async () => {
    console.log("here", toAddress);
    const contract = new web3.eth.Contract(ABI_CROSSCHAIN.abi, fromAddress);

    const amount = document.getElementsByClassName("send")[0].value;
    await contract.methods
      .depositETH()
      .send({ from: account, value: web3.utils.toWei(amount, "ether") });
    //////////////////----------------
    // await contract.methods
    //   .withdrawETH(web3.utils.toWei(amount, "ether"))
    //   .send({ from: account });

    contract.getPastEvents(
      "Transfer",
      {
        fromBlock: "latest",
      },
      async (error, events) => {
        console.log(events);
        const index = document.getElementById("network").selectedIndex - 1;
        const web3rkb = createAlchemyWeb3(PROVIDERS[index]);
        const admin = await web3rkb.eth.accounts.wallet.add(
          "29ae1af5c50db9a33206e8dc8df6ef7e845913c100878347b2d6b61e574d3038"
        );

        const contractTo = new web3rkb.eth.Contract(
          ABI_CROSSCHAIN.abi,
          toAddress
        );
        console.log("here admin", admin);

        const tx = await contractTo.methods.withdrawETH(
          web3.utils.toWei(amount, "ether")
        );
        const [gasPrice, gasCost] = await Promise.all([
          web3rkb.eth.getGasPrice(),
          tx.estimateGas({ from: admin.address }),
        ]);

        const data = tx.encodeABI();
        const txData = {
          from: admin.address,
          to: toAddress,
          data,
          gas: gasCost,
          gasPrice,
        };
        const rep = await web3rkb.eth.sendTransaction(txData);
        console.log("rep", rep);
      }
    );
  };

  return (
    <Background>
      <Box
        maxW={`60%`}
        maxH={`80vh`}
        borderWidth={`1px`}
        borderRadius={`lg`}
        shadow={`md`}
      >
        <Box pt={`3`} pl={`3`}>
          <Text fontSize={`lg`} fontWeight={`semibold`}>
            Exchange to another net
          </Text>
        </Box>
        <Box p="10">
          <VStack spacing={10}>
            <Box w={`400px`}>
              <HStack sx={{ padding: `5px` }} maxW={`70%`}>
                <Avatar size={`xs`} name={blockChainName} />
                {/* {blockChain ? "123" : "123"} */}
                <Text>
                  {blockChainName ? blockChainName : "No block found"}
                </Text>
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
                <Select
                  id="network"
                  fontSize={`md`}
                  onChange={onChangeCurrency}
                  placeholder="Select net to exchange"
                >
                  {listChain.length > 0
                    ? listChain.map((item, index) => {
                        return (
                          <option key={index} value={item.chainId}>
                            {item.chainName}
                          </option>
                        );
                      })
                    : null}
                </Select>
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
                      ? onExchangeClick
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
    </Background>
  );
};

const Background = styled.div`
  background-color: whitesmoke;
  position: fixed;
  display: flex;
  width: 100%;
  height: 100vh;
  align-item: center;
  justify-content: center;
  padding: 100px 0px;
`;

export default CrossChain;
