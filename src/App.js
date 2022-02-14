import { ChakraProvider } from "@chakra-ui/react";
// import logo from '../logo.png';
import "./App.css";
import Web3 from "web3";
import Wallet from "./components/Wallet";
import TransferAsset from "./components/Transfer/TransferAsset";
import { Routes, Route } from "react-router-dom";
import TransferAvalanche from "./components/Transfer/TransferAvalanche";

const App = () => {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Wallet />} exact />
        <Route path="/transfer/:token" element={<TransferAsset />} exact /> 
        <Route path="/transfer" element={<TransferAvalanche />} exact /> 
      </Routes>
    </ChakraProvider>
  );
};

export default App;
