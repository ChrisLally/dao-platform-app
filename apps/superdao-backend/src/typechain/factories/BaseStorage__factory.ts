/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BaseStorage, BaseStorageInterface } from "../BaseStorage";

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
  "0x60a06040526097805460ff60a01b1916905534801561001d57600080fd5b506040516103c93803806103c983398101604081905261003c9161004d565b6001600160a01b031660805261007d565b60006020828403121561005f57600080fd5b81516001600160a01b038116811461007657600080fd5b9392505050565b60805161032b61009e60003960008181607601526101d2015261032b6000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630900f01014610051578063572b6c05146100665780635c60da1b146100bb578063d4aae0c4146100db575b600080fd5b61006461005f36600461024b565b6100ee565b005b6100a661007436600461024b565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0390811691161490565b60405190151581526020015b60405180910390f35b6100c36101b5565b6040516001600160a01b0390911681526020016100b2565b6097546100c3906001600160a01b031681565b6097546001600160a01b03166101026101ce565b6001600160a01b0316146040518060400160405280600d81526020016c20aaaa2427a924ad20aa24a7a760991b815250906101595760405162461bcd60e51b8152600401610150919061027b565b60405180910390fd5b5080610163610218565b80546001600160a01b0319166001600160a01b0392831617905560405190821681527ff78721226efe9a1bb678189a16d1554928b9f2192e2cb93eeda83b79fa40007d9060200160405180910390a150565b60006101bf610218565b546001600160a01b0316919050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031633141561020e575060131936013560601c90565b503390565b905090565b600061021361024860017f797d7c7d0df25d67e029b044c5bcb2b89d68f6483382b5f85e64485950ed88d16102d0565b90565b60006020828403121561025d57600080fd5b81356001600160a01b038116811461027457600080fd5b9392505050565b600060208083528351808285015260005b818110156102a85785810183015185820160400152820161028c565b818111156102ba576000604083870101525b50601f01601f1916929092016040019392505050565b6000828210156102f057634e487b7160e01b600052601160045260246000fd5b50039056fea264697066735822122091b4a1c9accf9c5e3602d3c3f1a97db9c8040468a6edd05d4761b25b740c9f7664736f6c634300080c0033";

type BaseStorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BaseStorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BaseStorage__factory extends ContractFactory {
  constructor(...args: BaseStorageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    trustedForwarder: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BaseStorage> {
    return super.deploy(
      trustedForwarder,
      overrides || {}
    ) as Promise<BaseStorage>;
  }
  getDeployTransaction(
    trustedForwarder: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(trustedForwarder, overrides || {});
  }
  attach(address: string): BaseStorage {
    return super.attach(address) as BaseStorage;
  }
  connect(signer: Signer): BaseStorage__factory {
    return super.connect(signer) as BaseStorage__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BaseStorageInterface {
    return new utils.Interface(_abi) as BaseStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BaseStorage {
    return new Contract(address, _abi, signerOrProvider) as BaseStorage;
  }
}