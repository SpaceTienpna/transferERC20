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
  Stack,
  Tag,
} from "@chakra-ui/react";
import styles from './style.module.css';
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  ABI_CROSSCHAIN,
  ADDRESS_RINKEBY_CROSSCHAIN,
  ADDRESS_ROPSTEN_CROSSCHAIN,
  ADDRESS_FUJI_CROSSCHAIN,
} from "../../abis/MY_ABI";
import styled from "styled-components";
// import logo from '../logo.png';
import Web3 from "web3";
import { useEffect, useState } from "react";
import axios from "axios";

const CrossChain = () => {
  const web3 = new Web3(Web3.givenProvider);
  const [fromAddress, setFromAddress] = useState();
  const [account, setAccount] = useState();
  const [currency, setCurrency] = useState(`ETH`);
  const [balance, setBalance] = useState();
  const [chainGId, setChainGId] = useState();
  const [blockChainName, setBlockChainName] = useState();

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
      case 43113: {
        return ADDRESS_FUJI_CROSSCHAIN;
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
    })();
  }, [chainGId]);


  //------------- Testing zone
  const depositETH = async () => {
    const contract = new web3.eth.Contract(ABI_CROSSCHAIN.abi, fromAddress);
    const amount = document.getElementsByClassName("send")[0].value;
    await contract.methods.depositETH().send({
      from: account,
      value: web3.utils.toWei(amount, "ether"),
    });
  };

  const withdrawETH = async () => {
    const contract = new web3.eth.Contract(ABI_CROSSCHAIN.abi, fromAddress);
    const amount = document.getElementsByClassName("send")[0].value;
    await contract.methods
      .withdrawETH(web3.utils.toWei(amount, "ether"))
      .send({ from: account });
  };

  // const GetTransactionHash = async () => {
  //   // const contract = new web3.eth.Contract(ABI_CROSSCHAIN.abi, fromAddress);
  //   const transaction = web3.eth.getTransaction(
  //     "0xfc15884f8db75366025a7baf39876034346b22423407e5a80ad2ff4a7a31b177"
  //   );
  //   console.log("transaction", transaction);
  // };

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
            borderWidth={`1px`}
            borderColor={`#d53f8c`}
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
                Transfer balance
              </Tag>
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
                {/* <Box w={`400px`}> */}
                {/* <HStack sx={{ padding: `5px` }} maxW={`70%`}>
                    <Avatar size={`xs`} name={toBlock} />
                    {listChain.length > 0 ? (
                      <Select
                        id="network"
                        fontSize={`md`}
                        onChange={onChangeCurrency}
                        placeholder="Select net to exchange"
                      >
                        {listChain.map((item, index) => {
                          return (
                            <option key={index} value={item.chainId}>
                              {item.chainName}
                            </option>
                          );
                        })}
                      </Select>
                    ) : (
                      <Spinner />
                    )}
                  </HStack> */}
                {/* <InputGroup>
                    <InputLeftElement children={`$`} color={`gray.400`} />
                    <Input blur={`2px`} />
                  </InputGroup>
                  <HStack>
                    <Text color={`#808080`}>Balance:</Text>
                    <Text>
                      {toBalance} {currency}
                    </Text>
                  </HStack> */}
                {/* </Box> */}
                {/* <Box w={`400px`}>
                  <HStack>
                    <Text color={`#808080`}>Crosschain Fee:</Text>
                    <Text>123 {currency}</Text>
                  </HStack>
                </Box> */}
                <Box w={`400px`}>
                  <Stack>
                    <Button
                      isFullWidth={true}
                      colorScheme={"pink"}
                      onClick={withdrawETH}
                    >
                      {" "}
                      Transfer token
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
  background-color: whitesmoke;
  position: fixed;
  display: flex;
  width: 100%;
  height: 100vh;
  // align-item: center;
  // justify-content: center;
  // padding: 100px 0px;
`;

export default CrossChain;
