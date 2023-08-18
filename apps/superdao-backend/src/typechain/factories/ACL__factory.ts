/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ACL, ACLInterface } from "../ACL";

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
    name: "KERNEL_ADMIN",
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
        internalType: "bytes32",
        name: "requesterAppId",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "appId",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "permissionId",
        type: "uint8",
      },
    ],
    name: "addPermission",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "entity",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "app",
        type: "bytes32",
      },
    ],
    name: "getPermissions",
    outputs: [
      {
        internalType: "bytes2",
        name: "",
        type: "bytes2",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "entityAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "appAddress",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "permissionId",
        type: "uint8",
      },
    ],
    name: "hasPermission",
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
        internalType: "bytes32",
        name: "requesterAppId",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "appId",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "permissionId",
        type: "uint8",
      },
    ],
    name: "removePermission",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
  "0x60c06040526097805460ff60a01b1916905561001961005b565b60ff1660a05234801561002b57600080fd5b50604051610bed380380610bed83398101604081905261004a916100b2565b6001600160a01b0316608052610126565b609754600090600f600160a01b90910460ff161061007b5761007b6100e2565b60978054600160a01b900460ff16906014610095836100f8565b91906101000a81548160ff021916908360ff160217905550905090565b6000602082840312156100c457600080fd5b81516001600160a01b03811681146100db57600080fd5b9392505050565b634e487b7160e01b600052600160045260246000fd5b600060ff821660ff81141561011d57634e487b7160e01b600052601160045260246000fd5b60010192915050565b60805160a051610a8d610160600039600081816101840152818161038a015261040a01526000818161011c01526105670152610a8d6000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80635f6422ba116100665780635f6422ba1461016c57806378a259b31461017f57806399c8240f146101b8578063d4aae0c4146101cb578063ed82f4b8146101de57600080fd5b806301ffc9a7146100a35780630900f010146100cb5780631e651513146100e0578063572b6c051461010c5780635c60da1b1461014c575b600080fd5b6100b66100b136600461084a565b6101f1565b60405190151581526020015b60405180910390f35b6100de6100d9366004610890565b610228565b005b6100f36100ee3660046108ab565b6102ef565b6040516001600160f01b031990911681526020016100c2565b6100b661011a366004610890565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0390811691161490565b61015461036f565b6040516001600160a01b0390911681526020016100c2565b6100de61017a3660046108de565b610388565b6101a67f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff90911681526020016100c2565b6100de6101c63660046108de565b610408565b609754610154906001600160a01b031681565b6100b66101ec366004610913565b610482565b60006001600160e01b03198216631aa5f38f60e11b148061022257506001600160e01b031982166301ffc9a760e01b145b92915050565b6097546001600160a01b031661023c610563565b6001600160a01b0316146040518060400160405280600d81526020016c20aaaa2427a924ad20aa24a7a760991b815250906102935760405162461bcd60e51b815260040161028a919061094d565b60405180910390fd5b508061029d6105ad565b80546001600160a01b0319166001600160a01b0392831617905560405190821681527ff78721226efe9a1bb678189a16d1554928b9f2192e2cb93eeda83b79fa40007d9060200160405180910390a150565b600082815260fd60205260408120548190819061031690600160a01b900461ffff166105e0565b600086815260fd6020908152604080832061ffff8616845260010190915290209193509150816010811061034c5761034c6109a2565b601091828204019190066002029054906101000a900460f01b9250505092915050565b60006103796105ad565b546001600160a01b0316919050565b7f00000000000000000000000000000000000000000000000000000000000000006103b28161060f565b6040518060400160405280600d81526020016c20aaaa2427a924ad20aa24a7a760991b815250906103f65760405162461bcd60e51b815260040161028a919061094d565b506104028484846106a2565b50505050565b7f00000000000000000000000000000000000000000000000000000000000000006104328161060f565b6040518060400160405280600d81526020016c20aaaa2427a924ad20aa24a7a760991b815250906104765760405162461bcd60e51b815260040161028a919061094d565b50610402848484610745565b60008061048e836107e5565b6001600160a01b03808716600090815260fc602052604080822054928816825290205491925090806104c6576000935050505061055c565b600082815260fd602052604081205481906104eb90600160a01b900461ffff166105e0565b600085815260fd6020908152604080832061ffff86168452600101909152902091935091506001600160f01b03198616908690836010811061052f5761052f6109a2565b601091828204019190066002029054906101000a900460f01b166001600160f01b03191614955050505050505b9392505050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03163314156105a3575060131936013560601c90565b503390565b905090565b60006105a86105dd60017f797d7c7d0df25d67e029b044c5bcb2b89d68f6483382b5f85e64485950ed88d16109b8565b90565b600080806105ef6010856109f3565b905060006105fe601086610a14565b919561ffff90921694509092505050565b6097546000906001600160a01b031663ed82f4b861062b610563565b6040516001600160e01b031960e084901b1681526001600160a01b03909116600482015230602482015260ff85166044820152606401602060405180830381865afa15801561067e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102229190610a35565b600083815260fd602052604081205481906106c790600160a01b900461ffff166105e0565b915091506106d4836107e5565b600085815260fd6020908152604080832061ffff8716845260010190915290209019908260108110610708576107086109a2565b601091828204019190066002028282829054906101000a900460f01b1692506101000a81548161ffff021916908360f01c02179055505050505050565b600083815260fd6020526040812054819061076a90600160a01b900461ffff166105e0565b91509150610777836107e5565b600085815260fd6020908152604080832061ffff87168452600101909152902082601081106107a8576107a86109a2565b601091828204019190066002028282829054906101000a900460f01b1792506101000a81548161ffff021916908360f01c02179055505050505050565b600060108260ff1610604051806040016040528060158152602001741253959053125117d41154935254d4d253d397d251605a1b8152509061083a5760405162461bcd60e51b815260040161028a919061094d565b5050600160ff9091161b60f01b90565b60006020828403121561085c57600080fd5b81356001600160e01b03198116811461055c57600080fd5b80356001600160a01b038116811461088b57600080fd5b919050565b6000602082840312156108a257600080fd5b61055c82610874565b600080604083850312156108be57600080fd5b50508035926020909101359150565b803560ff8116811461088b57600080fd5b6000806000606084860312156108f357600080fd5b833592506020840135915061090a604085016108cd565b90509250925092565b60008060006060848603121561092857600080fd5b61093184610874565b925061093f60208501610874565b915061090a604085016108cd565b600060208083528351808285015260005b8181101561097a5785810183015185820160400152820161095e565b8181111561098c576000604083870101525b50601f01601f1916929092016040019392505050565b634e487b7160e01b600052603260045260246000fd5b6000828210156109d857634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052601260045260246000fd5b600061ffff80841680610a0857610a086109dd565b92169190910492915050565b600061ffff80841680610a2957610a296109dd565b92169190910692915050565b600060208284031215610a4757600080fd5b8151801515811461055c57600080fdfea26469706673582212207f3ac070002627726189927a0c746ff360082b7932d508dea3f281310830f79a64736f6c634300080c0033";

type ACLConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ACLConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ACL__factory extends ContractFactory {
  constructor(...args: ACLConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    trustedForwarder: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ACL> {
    return super.deploy(trustedForwarder, overrides || {}) as Promise<ACL>;
  }
  getDeployTransaction(
    trustedForwarder: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(trustedForwarder, overrides || {});
  }
  attach(address: string): ACL {
    return super.attach(address) as ACL;
  }
  connect(signer: Signer): ACL__factory {
    return super.connect(signer) as ACL__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ACLInterface {
    return new utils.Interface(_abi) as ACLInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ACL {
    return new Contract(address, _abi, signerOrProvider) as ACL;
  }
}