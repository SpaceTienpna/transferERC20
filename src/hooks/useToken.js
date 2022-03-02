import { ABI_SLEEPTO } from "../abis/SLEEPY_TOKEN";

const useToken = () => {
  const getToken = async (web3, address, type) => {

      const token = await web3.eth.Contract(ABI_SLEEPTO.abi, address);
      return token
  };
  return { getToken };
};

export default useToken;
