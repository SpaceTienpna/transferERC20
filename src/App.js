import { ChakraProvider } from "@chakra-ui/react";
// import logo from '../logo.png';
import "./App.css";
import Wallet from "./components/Wallet";
import TransferAsset from "./components/Transfer/TransferAsset";
import { Routes, Route } from "react-router-dom";
import TransferAvalanche from "./components/Transfer/TransferAvalanche";
import CrossChain from './components/Transfer/CrossChain';
import CrossChainERC20 from "./components/Transfer/CrossChainERC20";


const App = () => {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Wallet />} exact />
        <Route path="/transfer/:token" element={<TransferAsset />} exact /> 
        <Route path="/transfer" element={<TransferAvalanche />} exact />
        <Route path="/crosschain" element={<CrossChain />} exact />
        <Route path="/crosschainERC20" element={<CrossChainERC20 />} exact /> 
      </Routes>
    </ChakraProvider>
  );
};

export default App;
