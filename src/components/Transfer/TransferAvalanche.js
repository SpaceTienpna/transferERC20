/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  SLEEPY_ABI,
  SLEEPY_ADDRESS,
  SLEEPTO_ABI,
} from "../../abis/SLEEPY_TOKEN";
import { ABI_MY_CONTRACT, ADDRESS_MY_CONTRACT } from "../../abis/MY_ABI";
import styled from "styled-components";
// import logo from '../logo.png';
import Web3 from "web3";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TransferAvalanche = () => {
  const web3 = new Web3(Web3.givenProvider);
  const [account, setAccount] = useState();
  const [balance, setBalance] = useState();
  const { token } = useParams();

  useEffect(() => {
    (async () => {
      let acc = await web3.eth.getAccounts();
      if (acc.length === 0) acc = await web3.eth.requestAccounts();
      setAccount(acc[0]);

      const bal = await web3.eth.getBalance(acc[0]);
      setBalance(web3.utils.fromWei(bal, "ether"));
    })();
  }, []);

  const handleSendButton = async () => {
    // if (token === "ether") {
    //   await web3.eth.sendTransaction({
    //     from: account,
    //     to: document.getElementsByClassName("send")[0].value,
    //     value: document.getElementsByClassName("send")[1].value * 10 ** 18,
    //   });
    // } else {
    //   const address = document.getElementsByClassName("send")[0].value;
    //   const amount = document.getElementsByClassName("send")[1].value + '000000000000000000';
    //   const contract = new web3.eth.Contract(SLEEPY_ABI, SLEEPY_ADDRESS);
    //   console.log('token contract',contract);
    //   await contract.methods
    //     .transfer(address, amount)
    //     .send({ from: account }).then(rep => console.log(rep));
    // }

    const contract = new web3.eth.Contract(
      ABI_MY_CONTRACT,
      ADDRESS_MY_CONTRACT
    );
    console.log("Contract here", contract);
    const token = new web3.eth.Contract(
      SLEEPTO_ABI,
      document.getElementsByClassName("send")[0].value
    );
    const amount = document.getElementsByClassName("send")[1].value;
    console.log("token here", token);
    // await token.methods
    //   .transferFrom(account, "0x154998d207a7e2D284354229C9aa70f5ca1A6992", `${amount}000000000000000000`)
    //   .send({ from: account })
    //   .then((rep) => console.log(rep));
    // await token.methods
    //   .approve(ADDRESS_MY_CONTRACT, `${amount}000000000000000000`)
    //   .send({ from: account })
    //   .then((rep) => console.log(rep));
    // const allowance = await token.methods.allowance(account, account).call();
    // console.log('allowance', allowance);

    await contract.methods
      .withdraw(document.getElementsByClassName("send")[0].value, amount)
      .send({ from: account })
      .then((rep) => console.log(rep));

    // const balance = await contract.methods
    //   .getBlance(document.getElementsByClassName("send")[0].value)
    //   .call();
    // console.log(balance);
  };

  return (
    <Background>
      <MainCard>
        <Container>
          <InputGroup sx={{ maxWidth: "80%", padding: "20px 0px" }}>
            <InputLeftAddon children="0x...."></InputLeftAddon>
            <Input placeholder="Address token" className="send" />
          </InputGroup>
          <InputGroup sx={{ maxWidth: "80%", padding: "20px 0px" }}>
            <InputLeftAddon children="$(amount)"></InputLeftAddon>
            <Input placeholder="Amount" className="send" />
          </InputGroup>
          <Button
            sx={{ color: "#ffffff" }}
            leftIcon={<ArrowForwardIcon />}
            colorScheme="cyan"
            variant={`solid`}
            onClick={handleSendButton}
          >
            Send
          </Button>
        </Container>
      </MainCard>
    </Background>
  );
};

const Background = styled.div`
  background-color: whitesmoke;
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
`;

const MainCard = styled.div`
  max-width: 80%;
  width: 100%;
  background-color: #ffffff;
  margin-top: 5%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 4px;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 30px 0px;
`;

export default TransferAvalanche;
