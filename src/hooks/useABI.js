import { ABI_BEP20, ABI_ERC20, ABI_TRANSFER, ABI_TRANSFER_BSC } from "../abis/MY_ABI";

const useABI = () => {
  const getABI = (chainid) => {
    return chainid === 97 || chainid === 56 ? ABI_BEP20 : ABI_ERC20;
  };
  const getTransferABI = (chainid) => {
    return chainid === 97 || chainid === 56 ? ABI_TRANSFER : ABI_TRANSFER_BSC
  }
  return { getABI, getTransferABI };
};

export default useABI;
