/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  SimpleCacheManager,
  SimpleCacheManagerInterface,
} from "../../../src/mocks/SimpleCacheManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "program",
        type: "address",
      },
    ],
    name: "cacheProgram",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "program",
        type: "address",
      },
    ],
    name: "evictProgram",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608080604052346100165761017a908161001c8239f35b600080fdfe608080604052600436101561001357600080fd5b600090813560e01c9081636c769c09146100b1575063e73ac9f21461003757600080fd5b346100a05760203660031901126100a057806004356001600160a01b038116908190036100ae5760723b156100ae576040519063739d64f960e11b8252600482015281816024818360725af180156100a3576100905750f35b6100999061011b565b6100a05780f35b80fd5b6040513d84823e3d90fd5b50fd5b905034610117576020366003190112610117576004356001600160a01b0381168103610113573f60723b156101135763ce97201360e01b8252600482015281816024818360725af180156100a357610107575080f35b6101109061011b565b80f35b8280fd5b5080fd5b6001600160401b03811161012e57604052565b634e487b7160e01b600052604160045260246000fdfea264697066735822122034036735e01a6dbe685354b0d1494439e3585758088da3f6ae1324b54fdf6b7664736f6c63430008130033";

type SimpleCacheManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleCacheManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleCacheManager__factory extends ContractFactory {
  constructor(...args: SimpleCacheManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SimpleCacheManager> {
    return super.deploy(overrides || {}) as Promise<SimpleCacheManager>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SimpleCacheManager {
    return super.attach(address) as SimpleCacheManager;
  }
  override connect(signer: Signer): SimpleCacheManager__factory {
    return super.connect(signer) as SimpleCacheManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleCacheManagerInterface {
    return new utils.Interface(_abi) as SimpleCacheManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleCacheManager {
    return new Contract(address, _abi, signerOrProvider) as SimpleCacheManager;
  }
}
