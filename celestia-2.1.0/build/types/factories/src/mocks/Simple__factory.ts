/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Simple, SimpleInterface } from "../../../src/mocks/Simple";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "count",
        type: "uint64",
      },
    ],
    name: "CounterEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "expected",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "have",
        type: "uint256",
      },
    ],
    name: "LogAndIncrementCalled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "NullEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "redeemer",
        type: "address",
      },
    ],
    name: "RedeemedEvent",
    type: "event",
  },
  {
    inputs: [],
    name: "checkBlockHashes",
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
        internalType: "bool",
        name: "useTopLevel",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "directCase",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "staticCase",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "delegateCase",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "callcodeCase",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "callCase",
        type: "bool",
      },
    ],
    name: "checkCalls",
    outputs: [],
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
        internalType: "bytes",
        name: "input",
        type: "bytes",
      },
    ],
    name: "checkGasUsed",
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
        internalType: "bool",
        name: "useTopLevel",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "expected",
        type: "bool",
      },
    ],
    name: "checkIsTopLevelOrWasAliased",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "counter",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "difficulty",
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
    name: "emitNullEvent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBlockDifficulty",
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
    name: "increment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "incrementEmit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "incrementRedeem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "expected",
        type: "uint256",
      },
    ],
    name: "logAndIncrement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "noop",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "pleaseRevert",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISequencerInbox",
        name: "sequencerInbox",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "batchData",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "numberToPost",
        type: "uint256",
      },
    ],
    name: "postManyBatches",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "storeDifficulty",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080806040523461001657610d6c908161001c8239f35b600080fdfe6080604052600436101561001257600080fd5b60003560e01c806305795f73146101125780630e8c389f1461010d57806312e05dd11461010857806319cae462146101085780631a2f8a921461010357806344c25fba146100fe5780635677c11e146100f95780635dfc2e4a146100f457806361bc221a146100ef5780638a390877146100ea5780639ff5ccac146100e5578063b1948fc3146100e0578063b226a964146100db578063cff36f2d146100d6578063d09de08a146100d15763ded5ecad146100cc57600080fd5b610893565b610858565b610841565b610808565b610783565b6106af565b610644565b61061b565b610608565b610590565b61037d565b6102fc565b6102cd565b610172565b610127565b600091031261012257565b600080fd5b346101225760003660031901126101225760405162461bcd60e51b8152602060048201526012602482015271534f4c49444954595f524556455254494e4760701b6044820152606490fd5b34610122576000806003193601126102ca5761018f32331461095c565b60405163175a260b60e01b8152602090818160048160645afa8015610298576101bf91849161029d575b506109c0565b81546101f9906101d7906001600160401b0316610944565b600080546001600160401b0319166001600160401b0392909216919091179055565b60405163de4ba2b360e01b8152908082600481606e5afa8015610298577f773c78bf96e65f61c1a2622b47d76e78bfe70dd59cf4f11470c4c121c31594139261026592859261026b575b5050604080513381526001600160a01b03909216602083015290918291820190565b0390a180f35b61028a9250803d10610291575b6102828183610745565b8101906109fa565b3880610243565b503d610278565b6109b4565b6102bd9150833d85116102c3575b6102b58183610745565b81019061099c565b386101b9565b503d6102ab565b80fd5b34610122576000366003190112610122576020600154604051908152f35b6001600160a01b0381160361012257565b3461012257604036600319011261012257600435610319816102eb565b6024356001600160401b0380821161012257366023830112156101225781600401359081116101225736602482840101116101225761036f92602461035f930190610b4d565b6040519081529081906020820190565b0390f35b8015150361012257565b346101225760c03660031901126101225760043561039a81610373565b602435906103a782610373565b6044356103b381610373565b6064356103bf81610373565b608435916103cc83610373565b60a435946103d986610373565b84156105555760405163022f589360e21b81529060208260048160645afa9081156102985761041692600092610535575b50151590151514610a0f565b303b15610122576104419460405163ded5ecad60e01b9283825281806000998a938a60048401610a4f565b0381305afa94851561029857610519966104e08980610486946104ad82808b819e9d6105059b839f61051c575b506040519a8b91602083019384528b60248401610a4f565b039961049a601f199b8c8101835282610745565b5190305af46104a7610a62565b50610a92565b6040516104d5816104c960208201948d86528960248401610a4f565b03888101835282610745565b519082305af2610ad5565b6104f96040519485926020840197885260248401610a4f565b03908101835282610745565b519082305af1610513610a62565b50610b13565b80f35b8061052961052f9261072d565b80610117565b3861046e565b61054e91925060203d81116102c3576102b58183610745565b903861040a565b60405163175a260b60e01b81529060208260048160645afa9081156102985761058b926000926105355750151590151514610a0f565b610416565b3461012257600036600319011261012257600019430143811161060357600119430143811161060357409040146105cc57604051438152602090f35b60405162461bcd60e51b815260206004820152600f60248201526e0a6829a8abe84989e8696be9082a69608b1b6044820152606490fd5b61092e565b3461012257600036600319011261012257005b34610122576000366003190112610122576000546040516001600160401b039091168152602090f35b346101225760203660031901126101225760005460018060401b0361069b8183167f8df8e492f407b078593c5d8fd7e65ef68505999d911d5b99b017c0b7077398b9604080516004358152836020820152a1610944565b6001600160401b0319909216911617600055005b34610122576000806003193601126102ca5780547fa45d7e79cb3c6044f30c8dd891e6571301d6b8b6618df519c987905ec70742e7906020906001600160401b036106fb818316610944565b166001600160401b03199190911681178455604051908152a180f35b634e487b7160e01b600052604160045260246000fd5b6001600160401b03811161074057604052565b610717565b601f909101601f19168101906001600160401b0382119082101761074057604052565b6001600160401b03811161074057601f01601f191660200190565b34610122576060366003190112610122576004356107a0816102eb565b602435906001600160401b03821161012257366023830112156101225781600401356107cb81610768565b906107d96040519283610745565b80825236602482860101116101225760208160009260246108069701838601378301015260443591610c11565b005b34610122576000806003193601126102ca577f6f59c82101949290205a9ae9d0c657e6dae1a71c301ae76d385c2792294585fe8180a180f35b346101225760003660031901126101225744600155005b34610122576000806003193601126102ca5780546001600160401b0361087f818316610944565b6001600160401b0319909216911617815580f35b34610122576040366003190112610122576004356108b081610373565b602435906108bd82610373565b156108f85760405163022f589360e21b81529060208260048160645afa90811561029857610806926000926105355750151590151514610a0f565b60405163175a260b60e01b81529060208260048160645afa90811561029857610806926000926105355750151590151514610a0f565b634e487b7160e01b600052601160045260246000fd5b6001600160401b039081169081146106035760010190565b1561096357565b60405162461bcd60e51b815260206004820152601160248201527029a2a72222a92fa727aa2fa7a924a3a4a760791b6044820152606490fd5b9081602091031261012257516109b181610373565b90565b6040513d6000823e3d90fd5b156109c757565b60405162461bcd60e51b815260206004820152600b60248201526a1393d517d053125054d15160aa1b6044820152606490fd5b9081602091031261012257516109b1816102eb565b15610a1657565b60405162461bcd60e51b815260206004820152601160248201527015539156141150d5115117d49154d55315607a1b6044820152606490fd5b9015158152901515602082015260400190565b3d15610a8d573d90610a7382610768565b91610a816040519384610745565b82523d6000602084013e565b606090565b15610a9957565b60405162461bcd60e51b81526020600482015260146024820152731111531151d0551157d0d0531317d1905253115160621b6044820152606490fd5b15610adc57565b60405162461bcd60e51b815260206004820152600f60248201526e10d0531310d3d11157d19052531151608a1b6044820152606490fd5b15610b1a57565b60405162461bcd60e51b815260206004820152600b60248201526a10d0531317d1905253115160aa1b6044820152606490fd5b905a9261270f1984019084821161060357600093849382604051938492833781018581520392fa50610b7d610a62565b505a81039081116106035790565b90816020910312610122575190565b60001981146106035760010190565b91909392938252602060c0818401528151918260c085015260005b838110610bfd575050508160e08260008260a0958297010152601f80199101168201019460408201528260608201528260808201520152565b81810183015185820160e001528201610bc4565b60408051630378982b60e11b81526020949360049390916001600160a01b039091169086818681855afa90811561029857600091610d19575b50938351633fd1d20760e11b815287818381865afa97881561029857600098610cea575b50506000945b868610610c85575050505050505050565b823b1561012257845163e0bc972960e01b81529060008280610cab8c8986898501610ba9565b038183885af190811561029857610cd192610ccb92610cd7575b50610b9a565b95610b9a565b94610c74565b80610529610ce49261072d565b38610cc5565b610d0a929850803d10610d12575b610d028183610745565b810190610b8b565b953880610c6e565b503d610cf8565b610d309150873d8911610d1257610d028183610745565b38610c4a56fea2646970667358221220d12fd9c7077a53ac0371c2e7495f6fb9af306fac14f6f96f0f3e0675f77a25fc64736f6c63430008130033";

type SimpleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Simple__factory extends ContractFactory {
  constructor(...args: SimpleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Simple> {
    return super.deploy(overrides || {}) as Promise<Simple>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Simple {
    return super.attach(address) as Simple;
  }
  override connect(signer: Signer): Simple__factory {
    return super.connect(signer) as Simple__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleInterface {
    return new utils.Interface(_abi) as SimpleInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Simple {
    return new Contract(address, _abi, signerOrProvider) as Simple;
  }
}
