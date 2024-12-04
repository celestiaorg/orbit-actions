/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SimpleProxy,
  SimpleProxyInterface,
} from "../../../src/mocks/SimpleProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "impl_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60a03461006e57601f61013f38819003918201601f19168301916001600160401b038311848410176100735780849260209460405283398101031261006e57516001600160a01b038116810361006e5760805260405160b5908161008a82396080518181816015015260520152f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe60806040523615604657600036818037808036817f00000000000000000000000000000000000000000000000000000000000000005af43d82803e156042573d90f35b3d90fd5b600036818037808036817f00000000000000000000000000000000000000000000000000000000000000005af43d82803e156042573d90f3fea26469706673582212208657aabef82be3b18888dadd533aa87594f907bbdf9c32fec1edc640a2e858b664736f6c63430008130033";

type SimpleProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleProxy__factory extends ContractFactory {
  constructor(...args: SimpleProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    impl_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SimpleProxy> {
    return super.deploy(impl_, overrides || {}) as Promise<SimpleProxy>;
  }
  override getDeployTransaction(
    impl_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(impl_, overrides || {});
  }
  override attach(address: string): SimpleProxy {
    return super.attach(address) as SimpleProxy;
  }
  override connect(signer: Signer): SimpleProxy__factory {
    return super.connect(signer) as SimpleProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleProxyInterface {
    return new utils.Interface(_abi) as SimpleProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleProxy {
    return new Contract(address, _abi, signerOrProvider) as SimpleProxy;
  }
}
