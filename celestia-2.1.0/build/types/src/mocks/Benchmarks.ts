/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface BenchmarksInterface extends utils.Interface {
  functions: {
    "fillBlockAdd()": FunctionFragment;
    "fillBlockHash()": FunctionFragment;
    "fillBlockMulMod()": FunctionFragment;
    "fillBlockQuickStep()": FunctionFragment;
    "fillBlockRecover()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "fillBlockAdd"
      | "fillBlockHash"
      | "fillBlockMulMod"
      | "fillBlockQuickStep"
      | "fillBlockRecover"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "fillBlockAdd",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fillBlockHash",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fillBlockMulMod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fillBlockQuickStep",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fillBlockRecover",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "fillBlockAdd",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fillBlockHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fillBlockMulMod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fillBlockQuickStep",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fillBlockRecover",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Benchmarks extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BenchmarksInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    fillBlockAdd(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    fillBlockHash(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    fillBlockMulMod(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    fillBlockQuickStep(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    fillBlockRecover(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  fillBlockAdd(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  fillBlockHash(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  fillBlockMulMod(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  fillBlockQuickStep(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  fillBlockRecover(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    fillBlockAdd(overrides?: CallOverrides): Promise<void>;

    fillBlockHash(overrides?: CallOverrides): Promise<void>;

    fillBlockMulMod(overrides?: CallOverrides): Promise<void>;

    fillBlockQuickStep(overrides?: CallOverrides): Promise<void>;

    fillBlockRecover(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    fillBlockAdd(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    fillBlockHash(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    fillBlockMulMod(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    fillBlockQuickStep(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    fillBlockRecover(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    fillBlockAdd(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    fillBlockHash(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    fillBlockMulMod(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    fillBlockQuickStep(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    fillBlockRecover(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
