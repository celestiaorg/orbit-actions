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

export interface ERC20RollupEventInboxInterface extends utils.Interface {
  functions: {
    "bridge()": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "rollup()": FunctionFragment;
    "rollupInitialized(uint256,string)": FunctionFragment;
    "updateRollupAddress()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "bridge"
      | "initialize"
      | "rollup"
      | "rollupInitialized"
      | "updateRollupAddress"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "bridge", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "rollup", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "rollupInitialized",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateRollupAddress",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "bridge", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rollup", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rollupInitialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateRollupAddress",
    data: BytesLike
  ): Result;

  events: {
    "InboxMessageDelivered(uint256,bytes)": EventFragment;
    "InboxMessageDeliveredFromOrigin(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "InboxMessageDelivered"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "InboxMessageDeliveredFromOrigin"
  ): EventFragment;
}

export interface InboxMessageDeliveredEventObject {
  messageNum: BigNumber;
  data: string;
}
export type InboxMessageDeliveredEvent = TypedEvent<
  [BigNumber, string],
  InboxMessageDeliveredEventObject
>;

export type InboxMessageDeliveredEventFilter =
  TypedEventFilter<InboxMessageDeliveredEvent>;

export interface InboxMessageDeliveredFromOriginEventObject {
  messageNum: BigNumber;
}
export type InboxMessageDeliveredFromOriginEvent = TypedEvent<
  [BigNumber],
  InboxMessageDeliveredFromOriginEventObject
>;

export type InboxMessageDeliveredFromOriginEventFilter =
  TypedEventFilter<InboxMessageDeliveredFromOriginEvent>;

export interface ERC20RollupEventInbox extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC20RollupEventInboxInterface;

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
    bridge(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      _bridge: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    rollup(overrides?: CallOverrides): Promise<[string]>;

    rollupInitialized(
      chainId: PromiseOrValue<BigNumberish>,
      chainConfig: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateRollupAddress(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  bridge(overrides?: CallOverrides): Promise<string>;

  initialize(
    _bridge: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  rollup(overrides?: CallOverrides): Promise<string>;

  rollupInitialized(
    chainId: PromiseOrValue<BigNumberish>,
    chainConfig: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateRollupAddress(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    bridge(overrides?: CallOverrides): Promise<string>;

    initialize(
      _bridge: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    rollup(overrides?: CallOverrides): Promise<string>;

    rollupInitialized(
      chainId: PromiseOrValue<BigNumberish>,
      chainConfig: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateRollupAddress(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "InboxMessageDelivered(uint256,bytes)"(
      messageNum?: PromiseOrValue<BigNumberish> | null,
      data?: null
    ): InboxMessageDeliveredEventFilter;
    InboxMessageDelivered(
      messageNum?: PromiseOrValue<BigNumberish> | null,
      data?: null
    ): InboxMessageDeliveredEventFilter;

    "InboxMessageDeliveredFromOrigin(uint256)"(
      messageNum?: PromiseOrValue<BigNumberish> | null
    ): InboxMessageDeliveredFromOriginEventFilter;
    InboxMessageDeliveredFromOrigin(
      messageNum?: PromiseOrValue<BigNumberish> | null
    ): InboxMessageDeliveredFromOriginEventFilter;
  };

  estimateGas: {
    bridge(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _bridge: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    rollup(overrides?: CallOverrides): Promise<BigNumber>;

    rollupInitialized(
      chainId: PromiseOrValue<BigNumberish>,
      chainConfig: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateRollupAddress(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bridge(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _bridge: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    rollup(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rollupInitialized(
      chainId: PromiseOrValue<BigNumberish>,
      chainConfig: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateRollupAddress(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
