export const SLEEPY_ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];
export const SLEEPY_ADDRESS = "0x9e1618a5962F864be0AA48f841454Dd54CF34bDd";

//--------- sleepto for avalanche
export const ABI_SLEEPTO = {
  _format: "hh-sol-artifact-1",
  contractName: "Sleepto",
  sourceName: "contracts/Sleepto.sol",
  abi: [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [],
      name: "DOMAIN_SEPARATOR",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "PERMIT_TYPEHASH",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "allowance",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "burn",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "decimals",
      outputs: [
        {
          internalType: "uint8",
          name: "",
          type: "uint8",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "mint",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "nonces",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "deadline",
          type: "uint256",
        },
        {
          internalType: "uint8",
          name: "v",
          type: "uint8",
        },
        {
          internalType: "bytes32",
          name: "r",
          type: "bytes32",
        },
        {
          internalType: "bytes32",
          name: "s",
          type: "bytes32",
        },
      ],
      name: "permit",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "transfer",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "transferFrom",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  bytecode:
    "0x60806040523480156200001157600080fd5b5060004690507f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6040518060400160405280600d81526020017f536c656570746f20546f6b656e00000000000000000000000000000000000000815250805190602001206040518060400160405280600181526020017f3100000000000000000000000000000000000000000000000000000000000000815250805190602001208330604051602001620000ca95949392919062000120565b6040516020818303038152906040528051906020012060038190555050620001c5565b620000f8816200017d565b82525050565b620001098162000191565b82525050565b6200011a81620001bb565b82525050565b600060a082019050620001376000830188620000fe565b620001466020830187620000fe565b620001556040830186620000fe565b6200016460608301856200010f565b620001736080830184620000ed565b9695505050505050565b60006200018a826200019b565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b61164780620001d56000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806340c10f19116100975780639dc29fac116100665780639dc29fac1461029e578063a9059cbb146102ce578063d505accf146102fe578063dd62ed3e1461031a576100f5565b806340c10f19146101f057806370a08231146102205780637ecebe001461025057806395d89b4114610280576100f5565b806323b872dd116100d357806323b872dd1461016657806330adf81f14610196578063313ce567146101b45780633644e515146101d2576100f5565b806306fdde03146100fa578063095ea7b31461011857806318160ddd14610148575b600080fd5b61010261034a565b60405161010f919061123a565b60405180910390f35b610132600480360381019061012d9190610fa1565b610383565b60405161013f919061115e565b60405180910390f35b61015061039a565b60405161015d91906112dc565b60405180910390f35b610180600480360381019061017b9190610eb4565b6103a0565b60405161018d919061115e565b60405180910390f35b61019e61056b565b6040516101ab9190611179565b60405180910390f35b6101bc610592565b6040516101c991906112f7565b60405180910390f35b6101da610597565b6040516101e79190611179565b60405180910390f35b61020a60048036038101906102059190610fa1565b61059d565b604051610217919061115e565b60405180910390f35b61023a60048036038101906102359190610e4f565b6105b3565b60405161024791906112dc565b60405180910390f35b61026a60048036038101906102659190610e4f565b6105cb565b60405161027791906112dc565b60405180910390f35b6102886105e3565b604051610295919061123a565b60405180910390f35b6102b860048036038101906102b39190610fa1565b61061c565b6040516102c5919061115e565b60405180910390f35b6102e860048036038101906102e39190610fa1565b610632565b6040516102f5919061115e565b60405180910390f35b61031860048036038101906103139190610f03565b610649565b005b610334600480360381019061032f9190610e78565b610871565b60405161034191906112dc565b60405180910390f35b6040518060400160405280600d81526020017f536c656570746f20546f6b656e0000000000000000000000000000000000000081525081565b6000610390338484610896565b6001905092915050565b60005481565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414610555576104d482600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461098190919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b6105608484846109da565b600190509392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960001b81565b601281565b60035481565b60006105a98383610b6e565b6001905092915050565b60016020528060005260406000206000915090505481565b60046020528060005260406000206000915090505481565b6040518060400160405280600381526020017f535054000000000000000000000000000000000000000000000000000000000081525081565b60006106288383610c88565b6001905092915050565b600061063f3384846109da565b6001905092915050565b4284101561068c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610683906112bc565b60405180910390fd5b60006003547f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960001b898989600460008e73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081548092919061070890611455565b919050558a60405160200161072296959493929190611194565b60405160208183030381529060405280519060200120604051602001610749929190611127565b60405160208183030381529060405280519060200120905060006001828686866040516000815260200160405260405161078694939291906111f5565b6020604051602081039080840390855afa1580156107a8573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415801561081c57508873ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b61085b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108529061127c565b60405180910390fd5b610866898989610896565b505050505050505050565b6002602052816000526040600020602052806000526040600020600091509150505481565b80600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161097491906112dc565b60405180910390a3505050565b6000828284610990919061138f565b91508111156109d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109cb9061125c565b60405180910390fd5b92915050565b610a2c81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461098190919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610ac181600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610da290919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610b6191906112dc565b60405180910390a3505050565b610b8381600054610da290919063ffffffff16565b600081905550610bdb81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610da290919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610c7c91906112dc565b60405180910390a35050565b610cda81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461098190919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610d328160005461098190919063ffffffff16565b600081905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610d9691906112dc565b60405180910390a35050565b6000828284610db19190611339565b9150811015610df5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dec9061129c565b60405180910390fd5b92915050565b600081359050610e0a816115b5565b92915050565b600081359050610e1f816115cc565b92915050565b600081359050610e34816115e3565b92915050565b600081359050610e49816115fa565b92915050565b600060208284031215610e6157600080fd5b6000610e6f84828501610dfb565b91505092915050565b60008060408385031215610e8b57600080fd5b6000610e9985828601610dfb565b9250506020610eaa85828601610dfb565b9150509250929050565b600080600060608486031215610ec957600080fd5b6000610ed786828701610dfb565b9350506020610ee886828701610dfb565b9250506040610ef986828701610e25565b9150509250925092565b600080600080600080600060e0888a031215610f1e57600080fd5b6000610f2c8a828b01610dfb565b9750506020610f3d8a828b01610dfb565b9650506040610f4e8a828b01610e25565b9550506060610f5f8a828b01610e25565b9450506080610f708a828b01610e3a565b93505060a0610f818a828b01610e10565b92505060c0610f928a828b01610e10565b91505092959891949750929550565b60008060408385031215610fb457600080fd5b6000610fc285828601610dfb565b9250506020610fd385828601610e25565b9150509250929050565b610fe6816113c3565b82525050565b610ff5816113d5565b82525050565b611004816113e1565b82525050565b61101b611016826113e1565b61149e565b82525050565b600061102c82611312565b611036818561131d565b9350611046818560208601611422565b61104f816114d7565b840191505092915050565b600061106760158361131d565b9150611072826114e8565b602082019050919050565b600061108a601c8361131d565b915061109582611511565b602082019050919050565b60006110ad60028361132e565b91506110b88261153a565b600282019050919050565b60006110d060148361131d565b91506110db82611563565b602082019050919050565b60006110f360128361131d565b91506110fe8261158c565b602082019050919050565b6111128161140b565b82525050565b61112181611415565b82525050565b6000611132826110a0565b915061113e828561100a565b60208201915061114e828461100a565b6020820191508190509392505050565b60006020820190506111736000830184610fec565b92915050565b600060208201905061118e6000830184610ffb565b92915050565b600060c0820190506111a96000830189610ffb565b6111b66020830188610fdd565b6111c36040830187610fdd565b6111d06060830186611109565b6111dd6080830185611109565b6111ea60a0830184611109565b979650505050505050565b600060808201905061120a6000830187610ffb565b6112176020830186611118565b6112246040830185610ffb565b6112316060830184610ffb565b95945050505050565b600060208201905081810360008301526112548184611021565b905092915050565b600060208201905081810360008301526112758161105a565b9050919050565b600060208201905081810360008301526112958161107d565b9050919050565b600060208201905081810360008301526112b5816110c3565b9050919050565b600060208201905081810360008301526112d5816110e6565b9050919050565b60006020820190506112f16000830184611109565b92915050565b600060208201905061130c6000830184611118565b92915050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b60006113448261140b565b915061134f8361140b565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611384576113836114a8565b5b828201905092915050565b600061139a8261140b565b91506113a58361140b565b9250828210156113b8576113b76114a8565b5b828203905092915050565b60006113ce826113eb565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015611440578082015181840152602081019050611425565b8381111561144f576000848401525b50505050565b60006114608261140b565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611493576114926114a8565b5b600182019050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f8301169050919050565b7f64732d6d6174682d7375622d756e646572666c6f770000000000000000000000600082015250565b7f556e697377617056323a20494e56414c49445f5349474e415455524500000000600082015250565b7f1901000000000000000000000000000000000000000000000000000000000000600082015250565b7f64732d6d6174682d6164642d6f766572666c6f77000000000000000000000000600082015250565b7f556e697377617056323a20455850495245440000000000000000000000000000600082015250565b6115be816113c3565b81146115c957600080fd5b50565b6115d5816113e1565b81146115e057600080fd5b50565b6115ec8161140b565b81146115f757600080fd5b50565b61160381611415565b811461160e57600080fd5b5056fea26469706673582212202fca76d3c18d423ece24519860a4c4a30d374e31ab9df5378d16a694934c071b64736f6c63430008040033",
  deployedBytecode:
    "0x608060405234801561001057600080fd5b50600436106100f55760003560e01c806340c10f19116100975780639dc29fac116100665780639dc29fac1461029e578063a9059cbb146102ce578063d505accf146102fe578063dd62ed3e1461031a576100f5565b806340c10f19146101f057806370a08231146102205780637ecebe001461025057806395d89b4114610280576100f5565b806323b872dd116100d357806323b872dd1461016657806330adf81f14610196578063313ce567146101b45780633644e515146101d2576100f5565b806306fdde03146100fa578063095ea7b31461011857806318160ddd14610148575b600080fd5b61010261034a565b60405161010f919061123a565b60405180910390f35b610132600480360381019061012d9190610fa1565b610383565b60405161013f919061115e565b60405180910390f35b61015061039a565b60405161015d91906112dc565b60405180910390f35b610180600480360381019061017b9190610eb4565b6103a0565b60405161018d919061115e565b60405180910390f35b61019e61056b565b6040516101ab9190611179565b60405180910390f35b6101bc610592565b6040516101c991906112f7565b60405180910390f35b6101da610597565b6040516101e79190611179565b60405180910390f35b61020a60048036038101906102059190610fa1565b61059d565b604051610217919061115e565b60405180910390f35b61023a60048036038101906102359190610e4f565b6105b3565b60405161024791906112dc565b60405180910390f35b61026a60048036038101906102659190610e4f565b6105cb565b60405161027791906112dc565b60405180910390f35b6102886105e3565b604051610295919061123a565b60405180910390f35b6102b860048036038101906102b39190610fa1565b61061c565b6040516102c5919061115e565b60405180910390f35b6102e860048036038101906102e39190610fa1565b610632565b6040516102f5919061115e565b60405180910390f35b61031860048036038101906103139190610f03565b610649565b005b610334600480360381019061032f9190610e78565b610871565b60405161034191906112dc565b60405180910390f35b6040518060400160405280600d81526020017f536c656570746f20546f6b656e0000000000000000000000000000000000000081525081565b6000610390338484610896565b6001905092915050565b60005481565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414610555576104d482600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461098190919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b6105608484846109da565b600190509392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960001b81565b601281565b60035481565b60006105a98383610b6e565b6001905092915050565b60016020528060005260406000206000915090505481565b60046020528060005260406000206000915090505481565b6040518060400160405280600381526020017f535054000000000000000000000000000000000000000000000000000000000081525081565b60006106288383610c88565b6001905092915050565b600061063f3384846109da565b6001905092915050565b4284101561068c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610683906112bc565b60405180910390fd5b60006003547f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960001b898989600460008e73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081548092919061070890611455565b919050558a60405160200161072296959493929190611194565b60405160208183030381529060405280519060200120604051602001610749929190611127565b60405160208183030381529060405280519060200120905060006001828686866040516000815260200160405260405161078694939291906111f5565b6020604051602081039080840390855afa1580156107a8573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415801561081c57508873ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b61085b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108529061127c565b60405180910390fd5b610866898989610896565b505050505050505050565b6002602052816000526040600020602052806000526040600020600091509150505481565b80600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161097491906112dc565b60405180910390a3505050565b6000828284610990919061138f565b91508111156109d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109cb9061125c565b60405180910390fd5b92915050565b610a2c81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461098190919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610ac181600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610da290919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610b6191906112dc565b60405180910390a3505050565b610b8381600054610da290919063ffffffff16565b600081905550610bdb81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610da290919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610c7c91906112dc565b60405180910390a35050565b610cda81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461098190919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610d328160005461098190919063ffffffff16565b600081905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610d9691906112dc565b60405180910390a35050565b6000828284610db19190611339565b9150811015610df5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dec9061129c565b60405180910390fd5b92915050565b600081359050610e0a816115b5565b92915050565b600081359050610e1f816115cc565b92915050565b600081359050610e34816115e3565b92915050565b600081359050610e49816115fa565b92915050565b600060208284031215610e6157600080fd5b6000610e6f84828501610dfb565b91505092915050565b60008060408385031215610e8b57600080fd5b6000610e9985828601610dfb565b9250506020610eaa85828601610dfb565b9150509250929050565b600080600060608486031215610ec957600080fd5b6000610ed786828701610dfb565b9350506020610ee886828701610dfb565b9250506040610ef986828701610e25565b9150509250925092565b600080600080600080600060e0888a031215610f1e57600080fd5b6000610f2c8a828b01610dfb565b9750506020610f3d8a828b01610dfb565b9650506040610f4e8a828b01610e25565b9550506060610f5f8a828b01610e25565b9450506080610f708a828b01610e3a565b93505060a0610f818a828b01610e10565b92505060c0610f928a828b01610e10565b91505092959891949750929550565b60008060408385031215610fb457600080fd5b6000610fc285828601610dfb565b9250506020610fd385828601610e25565b9150509250929050565b610fe6816113c3565b82525050565b610ff5816113d5565b82525050565b611004816113e1565b82525050565b61101b611016826113e1565b61149e565b82525050565b600061102c82611312565b611036818561131d565b9350611046818560208601611422565b61104f816114d7565b840191505092915050565b600061106760158361131d565b9150611072826114e8565b602082019050919050565b600061108a601c8361131d565b915061109582611511565b602082019050919050565b60006110ad60028361132e565b91506110b88261153a565b600282019050919050565b60006110d060148361131d565b91506110db82611563565b602082019050919050565b60006110f360128361131d565b91506110fe8261158c565b602082019050919050565b6111128161140b565b82525050565b61112181611415565b82525050565b6000611132826110a0565b915061113e828561100a565b60208201915061114e828461100a565b6020820191508190509392505050565b60006020820190506111736000830184610fec565b92915050565b600060208201905061118e6000830184610ffb565b92915050565b600060c0820190506111a96000830189610ffb565b6111b66020830188610fdd565b6111c36040830187610fdd565b6111d06060830186611109565b6111dd6080830185611109565b6111ea60a0830184611109565b979650505050505050565b600060808201905061120a6000830187610ffb565b6112176020830186611118565b6112246040830185610ffb565b6112316060830184610ffb565b95945050505050565b600060208201905081810360008301526112548184611021565b905092915050565b600060208201905081810360008301526112758161105a565b9050919050565b600060208201905081810360008301526112958161107d565b9050919050565b600060208201905081810360008301526112b5816110c3565b9050919050565b600060208201905081810360008301526112d5816110e6565b9050919050565b60006020820190506112f16000830184611109565b92915050565b600060208201905061130c6000830184611118565b92915050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b60006113448261140b565b915061134f8361140b565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611384576113836114a8565b5b828201905092915050565b600061139a8261140b565b91506113a58361140b565b9250828210156113b8576113b76114a8565b5b828203905092915050565b60006113ce826113eb565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015611440578082015181840152602081019050611425565b8381111561144f576000848401525b50505050565b60006114608261140b565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611493576114926114a8565b5b600182019050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f8301169050919050565b7f64732d6d6174682d7375622d756e646572666c6f770000000000000000000000600082015250565b7f556e697377617056323a20494e56414c49445f5349474e415455524500000000600082015250565b7f1901000000000000000000000000000000000000000000000000000000000000600082015250565b7f64732d6d6174682d6164642d6f766572666c6f77000000000000000000000000600082015250565b7f556e697377617056323a20455850495245440000000000000000000000000000600082015250565b6115be816113c3565b81146115c957600080fd5b50565b6115d5816113e1565b81146115e057600080fd5b50565b6115ec8161140b565b81146115f757600080fd5b50565b61160381611415565b811461160e57600080fd5b5056fea26469706673582212202fca76d3c18d423ece24519860a4c4a30d374e31ab9df5378d16a694934c071b64736f6c63430008040033",
  linkReferences: {},
  deployedLinkReferences: {},
};

export const ABI_SLEEPTO_BEP20 = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export const ADDRESS_SLEEPTO_AVALANCHE =
  "0xc30e6777d3bfa606b35d5f0e8db332e16ca9a3d9";
export const ADDRESS_SLEEPTO_RINKEBY =
  "0x842acF7242e18c0a7F3AB645d782504063d42c09";
export const ADDRESS_SLEEPTO_BINANACE =
  // "0x32e19Ba230dad783e14Cc6d578dE3F7d6fbc0a10"
  "0xB7DFa0485916Aba397EDa6514b9D7F612ee6e50D";

// --------- sleepy ropsten
export const ADDRESS_SLEEPY = "0x85f13db811c1d8e22679cf56ca91931562d837b2";
export const ABI_SLEEPY = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
