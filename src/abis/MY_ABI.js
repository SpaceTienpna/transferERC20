export const ABI_MY_CONTRACT = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Approve",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "deposit",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      }
    ],
    "name": "getBlance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "withdrawTransferFrom",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
];

// export const ADDRESS_MY_CONTRACT = "0xa6581e0D7BA12f36f883d9D10F3332f1FB9DF15C";
export const ADDRESS_MY_CONTRACT = "0xfC598F5BBA5c7C7Ba092799BEf9E26d4294d7DE0";



export const ADDRESS_RINKEBY_CROSSCHAIN = "0xc30e6777D3Bfa606b35D5f0e8dB332e16ca9a3d9";
export const ADDRESS_ROPSTEN_CROSSCHAIN = "0x9B0E44326de5795746316C3141428806b2B9eAcc";


export const ABI_CROSSCHAIN = {
  "_format": "hh-sol-artifact-1",
  "contractName": "CrossChain",
  "sourceName": "contracts/CrossChain.sol",
  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "depositETH",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getBalanceETH",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "withdrawETH",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506104e0806100606000396000f3fe60806040526004361061003f5760003560e01c80638da5cb5b14610044578063acd1f2541461006f578063f14210a61461009a578063f6326fb3146100b6575b600080fd5b34801561005057600080fd5b506100596100c0565b6040516100669190610321565b60405180910390f35b34801561007b57600080fd5b506100846100e4565b60405161009191906103b3565b60405180910390f35b6100b460048036038101906100af9190610294565b6100ec565b005b6100be610242565b005b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600047905090565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461017a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161017190610373565b60405180910390fd5b804710156101bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101b490610393565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610203573d6000803e3d6000fd5b507fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef3033836040516102379392919061033c565b60405180910390a150565b7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef3330346040516102759392919061033c565b60405180910390a1565b60008135905061028e81610493565b92915050565b6000602082840312156102a657600080fd5b60006102b48482850161027f565b91505092915050565b6102c6816103df565b82525050565b60006102d96030836103ce565b91506102e48261041b565b604082019050919050565b60006102fc6020836103ce565b91506103078261046a565b602082019050919050565b61031b81610411565b82525050565b600060208201905061033660008301846102bd565b92915050565b600060608201905061035160008301866102bd565b61035e60208301856102bd565b61036b6040830184610312565b949350505050565b6000602082019050818103600083015261038c816102cc565b9050919050565b600060208201905081810360008301526103ac816102ef565b9050919050565b60006020820190506103c86000830184610312565b92915050565b600082825260208201905092915050565b60006103ea826103f1565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f546869732066756e6374696f6e2073686f756c6420626520757365642062792060008201527f636f6e74726163742773206f776e657200000000000000000000000000000000602082015250565b7f4e6f206d6f72652062616c616e6365206f6e207468697320636f6e7472616374600082015250565b61049c81610411565b81146104a757600080fd5b5056fea264697066735822122000541711268be85cd5aad69ccc75954de357d09a6ab4d37f84c8e85be200c42e64736f6c63430008040033",
  "deployedBytecode": "0x60806040526004361061003f5760003560e01c80638da5cb5b14610044578063acd1f2541461006f578063f14210a61461009a578063f6326fb3146100b6575b600080fd5b34801561005057600080fd5b506100596100c0565b6040516100669190610321565b60405180910390f35b34801561007b57600080fd5b506100846100e4565b60405161009191906103b3565b60405180910390f35b6100b460048036038101906100af9190610294565b6100ec565b005b6100be610242565b005b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600047905090565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461017a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161017190610373565b60405180910390fd5b804710156101bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101b490610393565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610203573d6000803e3d6000fd5b507fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef3033836040516102379392919061033c565b60405180910390a150565b7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef3330346040516102759392919061033c565b60405180910390a1565b60008135905061028e81610493565b92915050565b6000602082840312156102a657600080fd5b60006102b48482850161027f565b91505092915050565b6102c6816103df565b82525050565b60006102d96030836103ce565b91506102e48261041b565b604082019050919050565b60006102fc6020836103ce565b91506103078261046a565b602082019050919050565b61031b81610411565b82525050565b600060208201905061033660008301846102bd565b92915050565b600060608201905061035160008301866102bd565b61035e60208301856102bd565b61036b6040830184610312565b949350505050565b6000602082019050818103600083015261038c816102cc565b9050919050565b600060208201905081810360008301526103ac816102ef565b9050919050565b60006020820190506103c86000830184610312565b92915050565b600082825260208201905092915050565b60006103ea826103f1565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f546869732066756e6374696f6e2073686f756c6420626520757365642062792060008201527f636f6e74726163742773206f776e657200000000000000000000000000000000602082015250565b7f4e6f206d6f72652062616c616e6365206f6e207468697320636f6e7472616374600082015250565b61049c81610411565b81146104a757600080fd5b5056fea264697066735822122000541711268be85cd5aad69ccc75954de357d09a6ab4d37f84c8e85be200c42e64736f6c63430008040033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}
