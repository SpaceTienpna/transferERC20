import {
  PROVIDER_AVALANCHE,
  PROVIDER_BINANCE,
  PROVIDER_GOERLI,
  PROVIDER_RINKEBY,
  PROVIDER_ROPSTEN,
} from "../Utils/Providers";

import Web3 from "web3";
import { createAlchemyWeb3 } from "@alch/alchemy-web3";

const useProvider = () => {
  const getProviders = async (chainid) => {
    switch (chainid) {
      case 3: {
        const web3 = createAlchemyWeb3(PROVIDER_ROPSTEN);
        return web3;
      }
      case 4: {
        const web3 = createAlchemyWeb3(PROVIDER_RINKEBY);
        return web3;
      }
      case 5: {
        const web3 = createAlchemyWeb3(PROVIDER_GOERLI);

        return web3;
      }
      case 97: {
        const web3 = new Web3(
          new Web3.providers.HttpProvider(PROVIDER_BINANCE)
        );
        return web3;
      }
      case 43113: {
        const web3 = new Web3(
          new Web3.providers.HttpProvider(PROVIDER_AVALANCHE)
        );
        return web3;
      }
      default:
        return { provider: "Not found Provider" };
    }
  };
  return { getProviders };
};

export default useProvider;
