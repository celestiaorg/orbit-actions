/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface ArbDebugInterface extends utils.Interface {
  functions: {
    "becomeChainOwner()": FunctionFragment;
    "customRevert(uint64)": FunctionFragment;
    "events(bool,bytes32)": FunctionFragment;
    "eventsView()": FunctionFragment;
    "legacyError()": FunctionFragment;
    "panic()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "becomeChainOwner"
      | "customRevert"
      | "events"
      | "eventsView"
      | "legacyError"
      | "panic"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "becomeChainOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "customRevert",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "events",
    values: [PromiseOrValue<boolean>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "eventsView",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "legacyError",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "panic", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "becomeChainOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "customRevert",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "events", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "eventsView", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "legacyError",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "panic", data: BytesLike): Result;

  events: {
    "Basic(bool,bytes32)": EventFragment;
    "Mixed(bool,bool,bytes32,address,address)": EventFragment;
    "Store(bool,address,uint24,bytes32,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Basic"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Mixed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Store"): EventFragment;
}

export interface BasicEventObject {
  flag: boolean;
  value: string;
}
export type BasicEvent = TypedEvent<[boolean, string], BasicEventObject>;

export type BasicEventFilter = TypedEventFilter<BasicEvent>;

export interface MixedEventObject {
  flag: boolean;
  not: boolean;
  value: string;
  conn: string;
  caller: string;
}
export type MixedEvent = TypedEvent<
  [boolean, boolean, string, string, string],
  MixedEventObject
>;

export type MixedEventFilter = TypedEventFilter<MixedEvent>;

export interface StoreEventObject {
  flag: boolean;
  field: string;
  number: number;
  value: string;
  store: string;
}
export type StoreEvent = TypedEvent<
  [boolean, string, number, string, string],
  StoreEventObject
>;

export type StoreEventFilter = TypedEventFilter<StoreEvent>;

export interface ArbDebug extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ArbDebugInterface;

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
    becomeChainOwner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    customRevert(
      number: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[void]>;

    events(
      flag: PromiseOrValue<boolean>,
      value: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    eventsView(overrides?: CallOverrides): Promise<[void]>;

    legacyError(overrides?: CallOverrides): Promise<[void]>;

    panic(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  becomeChainOwner(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  customRevert(
    number: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<void>;

  events(
    flag: PromiseOrValue<boolean>,
    value: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  eventsView(overrides?: CallOverrides): Promise<void>;

  legacyError(overrides?: CallOverrides): Promise<void>;

  panic(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    becomeChainOwner(overrides?: CallOverrides): Promise<void>;

    customRevert(
      number: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    events(
      flag: PromiseOrValue<boolean>,
      value: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    eventsView(overrides?: CallOverrides): Promise<void>;

    legacyError(overrides?: CallOverrides): Promise<void>;

    panic(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "Basic(bool,bytes32)"(
      flag?: null,
      value?: PromiseOrValue<BytesLike> | null
    ): BasicEventFilter;
    Basic(
      flag?: null,
      value?: PromiseOrValue<BytesLike> | null
    ): BasicEventFilter;

    "Mixed(bool,bool,bytes32,address,address)"(
      flag?: PromiseOrValue<boolean> | null,
      not?: null,
      value?: PromiseOrValue<BytesLike> | null,
      conn?: null,
      caller?: PromiseOrValue<string> | null
    ): MixedEventFilter;
    Mixed(
      flag?: PromiseOrValue<boolean> | null,
      not?: null,
      value?: PromiseOrValue<BytesLike> | null,
      conn?: null,
      caller?: PromiseOrValue<string> | null
    ): MixedEventFilter;

    "Store(bool,address,uint24,bytes32,bytes)"(
      flag?: PromiseOrValue<boolean> | null,
      field?: PromiseOrValue<string> | null,
      number?: null,
      value?: null,
      store?: null
    ): StoreEventFilter;
    Store(
      flag?: PromiseOrValue<boolean> | null,
      field?: PromiseOrValue<string> | null,
      number?: null,
      value?: null,
      store?: null
    ): StoreEventFilter;
  };

  estimateGas: {
    becomeChainOwner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    customRevert(
      number: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    events(
      flag: PromiseOrValue<boolean>,
      value: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    eventsView(overrides?: CallOverrides): Promise<BigNumber>;

    legacyError(overrides?: CallOverrides): Promise<BigNumber>;

    panic(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    becomeChainOwner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    customRevert(
      number: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    events(
      flag: PromiseOrValue<boolean>,
      value: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    eventsView(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    legacyError(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    panic(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
