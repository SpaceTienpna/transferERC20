/* eslint-disable react-hooks/exhaustive-deps */
import {
  Text,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Avatar,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { DownloadIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { SLEEPY_ABI, SLEEPY_ADDRESS } from "../abis/SLEEPY_TOKEN";
import styled from "styled-components";
// import logo from '../logo.png';
import "./Wallet.css";
import Web3 from "web3";
import { useEffect, useState } from "react";
import ItemAsset from "./AssetItem/ItemAsset";
import axios from "axios";
const Wallet = () => {
  const web3 = new Web3(Web3.givenProvider);
  const [account, setAccount] = useState();
  const [balance, setBalance] = useState();

  const [balanceSleep, setBalanceSleep] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      let acc = await web3.eth.getAccounts();
      if (acc.length === 0) acc = await web3.eth.requestAccounts();
      setAccount(acc[0]);
      const bal = await web3.eth.getBalance(acc[0]);
      setBalance(web3.utils.fromWei(bal, "ether"));
      axios.get(`http://localhost:3000/users/`).then((rep) => console.log(rep.data));
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const token = new web3.eth.Contract(SLEEPY_ABI, SLEEPY_ADDRESS);
      // console.log(token);
      const balSleep = await token.methods.balanceOf(account).call();
      setBalanceSleep(web3.utils.fromWei(balSleep, "ether"));
    })();
  }, [account, web3]);

  // const SwitchBalance = async () => {
  //   isETH ? setIsETH(false) : setIsETH(true);
  //   if (isETH) {
  //     const bal = await web3.eth.getBalance(account);
  //     setBalance(bal);
  //   } else {
  //     const token = new web3.eth.Contract(SLEEPY_ABI, SLEEPY_ADDRESS);
  //     // console.log(token);
  //     const balance = await token.methods.balanceOf(account).call();
  //     // console.log(balance);
  //     setBalance(balance);
  //   }
  // };

  return (
    <Background>
      <MainCard>
        <MenuBar>
          <AddressZone>
            <Text fontSize="sm" sx={{ marginTop: `3px` }}>
              {account}
            </Text>
          </AddressZone>
        </MenuBar>
        <Divider />
        <HomeBar>
          <BalanceZone>
            <Avatar size={`sm`} name={`ETHER`} />
          </BalanceZone>
          <BalanceZone>
            <Text
              as="kbd"
              fontSize="30px"
              sx={{ marginTop: `3px`, fontWeight: `500` }}
            >
              {balance} ETH
            </Text>
          </BalanceZone>
          <ActionZone>
            <Button>
              <IconButton>
                <DownloadIcon />
              </IconButton>
              <Text as={`sub`} sx={{ color: `#037dd6`, fontWeight: `600` }}>
                Buy
              </Text>
            </Button>
            <Button>
              <IconButton>
                <ExternalLinkIcon />
              </IconButton>
              <Text as={`sub`} sx={{ color: `#037dd6`, fontWeight: `600` }}>
                Send
              </Text>
            </Button>
          </ActionZone>
        </HomeBar>
        <AssetBar>
          <Tabs isFitted variant="enclosed">
            <TabList mb="1em">
              <Tab>Assets</Tab>
              <Tab>Activities</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <div onClick={() => navigate(`/transfer/ether`)}>
                  <ItemAsset balance={balance} name={`Ether`} symbol={`ETH`} />
                </div>
                <div onClick={() => navigate(`/transfer/${SLEEPY_ADDRESS}`)}>
                  <ItemAsset
                    balance={balanceSleep}
                    name={`Sleep`}
                    symbol={`SLP`}
                  />
                </div>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </AssetBar>
      </MainCard>
    </Background>
  );
};

const Background = styled.div`
  background-color: whitesmoke;
  position: fixed;
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

const MenuBar = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  padding-top: 15px;
`;

const AddressZone = styled.div`
  width: 45%;
  height: 80%;
  border-radius: 5px;
  text-align: center;
  transition: 0.5s;
  &:hover {
    background-color: #e6e4e4;
    cursor: pointer;
  }
  align-items: center;
`;

const HomeBar = styled.div`
  margin: 20px 0px;
  width: 100%;
  display: flex;
  // justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const AssetBar = styled.div`
  max-width: 100%;
  max-height: 48vh;
  overflow-y: scroll;
`;

const BalanceZone = styled.div`
  width: 45%;
  height: 80%;
  border-radius: 5px;
  text-align: center;
  margin: 10px 0px;
`;

const Divider = styled.hr`
  margin-top: 5px;
`;

const ActionZone = styled.div`
  width: 45%;
  text-align: center;
  margin: 10px 0px;
`;

const Button = styled.button`
  margin: 0px 25px;
  color: #ffffff;
`;

const IconButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #037dd6;
  border-radius: 20px;
  margin-top: 6px;
  color: #ffffff;
  margin-bottom: 5px;
`;

export default Wallet;
