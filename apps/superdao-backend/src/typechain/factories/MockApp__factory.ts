/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockApp, MockAppInterface } from "../MockApp";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "trustedForwarder",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IKernel",
        name: "kernel",
        type: "address",
      },
    ],
    name: "Init",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "code",
        type: "address",
      },
    ],
    name: "Upgrade",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "appCall",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract MockApp",
        name: "app",
        type: "address",
      },
    ],
    name: "callTestRequireSUDO",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
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
        internalType: "contract IKernel",
        name: "kernel",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "forwarder",
        type: "address",
      },
    ],
    name: "isTrustedForwarder",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "kernel",
    outputs: [
      {
        internalType: "contract IKernel",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "testRequireSUDO",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "appCode",
        type: "address",
      },
    ],
    name: "upgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040526064805460ff60b01b1916905561001961005b565b60ff1660a05234801561002b57600080fd5b506040516109d53803806109d583398101604081905261004a916100b2565b6001600160a01b0316608052610126565b606454600090600f600160b01b90910460ff161061007b5761007b6100e2565b60648054600160b01b900460ff16906016610095836100f8565b91906101000a81548160ff021916908360ff160217905550905090565b6000602082840312156100c457600080fd5b81516001600160a01b03811681146100db57600080fd5b9392505050565b634e487b7160e01b600052600160045260246000fd5b600060ff821660ff81141561011d57634e487b7160e01b600052601160045260246000fd5b60010192915050565b60805160a051610884610151600039600061024e01526000818160b2015261042001526108846000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80637e336cea1161005b5780637e336cea1461011f578063c4d66de81461013f578063d4aae0c414610152578063e2f6ae621461016b57600080fd5b80630900f0101461008d578063572b6c05146100a257806358090270146100f75780635c60da1b146100ff575b600080fd5b6100a061009b3660046106a0565b61017e565b005b6100e26100b03660046106a0565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0390811691161490565b60405190151581526020015b60405180910390f35b6100a061024c565b6101076102be565b6040516001600160a01b0390911681526020016100ee565b61013261012d3660046106c4565b6102d7565b6040516100ee9190610796565b6100a061014d3660046106a0565b610350565b606454610107906201000090046001600160a01b031681565b6100a06101793660046106a0565b6103c6565b6064546201000090046001600160a01b031661019861041c565b6001600160a01b0316146040518060400160405280600d81526020016c20aaaa2427a924ad20aa24a7a760991b815250906101ef5760405162461bcd60e51b81526004016101e69190610796565b60405180910390fd5b50806101f9610466565b80546001600160a01b0319166001600160a01b0392831617905560405190821681527ff78721226efe9a1bb678189a16d1554928b9f2192e2cb93eeda83b79fa40007d906020015b60405180910390a150565b7f000000000000000000000000000000000000000000000000000000000000000061027681610499565b6040518060400160405280600d81526020016c20aaaa2427a924ad20aa24a7a760991b815250906102ba5760405162461bcd60e51b81526004016101e69190610796565b5050565b60006102c8610466565b546001600160a01b0316919050565b6060600080856001600160a01b031685856040516102f69291906107a9565b6000604051808303816000865af19150503d8060008114610333576040519150601f19603f3d011682016040523d82523d6000602084013e610338565b606091505b50915091508161034757600080fd5b95945050505050565b600061035c6001610538565b90508015610374576064805461ff0019166101001790555b61037d826105c2565b80156102ba576064805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b806001600160a01b031663580902706040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561040157600080fd5b505af1158015610415573d6000803e3d6000fd5b5050505050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031633141561045c575060131936013560601c90565b503390565b905090565b600061046161049660017f797d7c7d0df25d67e029b044c5bcb2b89d68f6483382b5f85e64485950ed88d16107b9565b90565b6064546000906201000090046001600160a01b031663ed82f4b86104bb61041c565b6040516001600160e01b031960e084901b1681526001600160a01b03909116600482015230602482015260ff85166044820152606401602060405180830381865afa15801561050e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061053291906107de565b92915050565b606454600090610100900460ff1615610581578160ff16600114801561055d5750303b155b6105795760405162461bcd60e51b81526004016101e690610800565b506000919050565b60645460ff8084169116106105a85760405162461bcd60e51b81526004016101e690610800565b506064805460ff191660ff92909216919091179055600190565b606454610100900460ff1661062d5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b60648201526084016101e6565b6064805462010000600160b01b031916620100006001600160a01b038481168202929092179283905560405192041681527f4f8cfde3439a1a302c21ca51eec26086efbfd940b8c0279889fc6bb6e73ecc6690602001610241565b6001600160a01b038116811461069d57600080fd5b50565b6000602082840312156106b257600080fd5b81356106bd81610688565b9392505050565b6000806000604084860312156106d957600080fd5b83356106e481610688565b9250602084013567ffffffffffffffff8082111561070157600080fd5b818601915086601f83011261071557600080fd5b81358181111561072457600080fd5b87602082850101111561073657600080fd5b6020830194508093505050509250925092565b6000815180845260005b8181101561076f57602081850181015186830182015201610753565b81811115610781576000602083870101525b50601f01601f19169290920160200192915050565b6020815260006106bd6020830184610749565b8183823760009101908152919050565b6000828210156107d957634e487b7160e01b600052601160045260246000fd5b500390565b6000602082840312156107f057600080fd5b815180151581146106bd57600080fd5b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b60608201526080019056fea264697066735822122015079a3db3c4257929f92a4f31e5febe3717b2c95f95e2b21fcd80c1243d50e864736f6c634300080c0033";

type MockAppConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockAppConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockApp__factory extends ContractFactory {
  constructor(...args: MockAppConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    trustedForwarder: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockApp> {
    return super.deploy(trustedForwarder, overrides || {}) as Promise<MockApp>;
  }
  getDeployTransaction(
    trustedForwarder: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(trustedForwarder, overrides || {});
  }
  attach(address: string): MockApp {
    return super.attach(address) as MockApp;
  }
  connect(signer: Signer): MockApp__factory {
    return super.connect(signer) as MockApp__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockAppInterface {
    return new utils.Interface(_abi) as MockAppInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockApp {
    return new Contract(address, _abi, signerOrProvider) as MockApp;
  }
}