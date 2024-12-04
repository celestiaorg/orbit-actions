/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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

export interface ArbWasmCacheInterface extends utils.Interface {
  functions: {
    "allCacheManagers()": FunctionFragment;
    "cacheCodehash(bytes32)": FunctionFragment;
    "cacheProgram(address)": FunctionFragment;
    "codehashIsCached(bytes32)": FunctionFragment;
    "evictCodehash(bytes32)": FunctionFragment;
    "isCacheManager(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "allCacheManagers"
      | "cacheCodehash"
      | "cacheProgram"
      | "codehashIsCached"
      | "evictCodehash"
      | "isCacheManager"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "allCacheManagers",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "cacheCodehash",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "cacheProgram",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "codehashIsCached",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "evictCodehash",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "isCacheManager",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "allCacheManagers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cacheCodehash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cacheProgram",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "codehashIsCached",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "evictCodehash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isCacheManager",
    data: BytesLike
  ): Result;

  events: {
    "UpdateProgramCache(address,bytes32,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "UpdateProgramCache"): EventFragment;
}

export interface UpdateProgramCacheEventObject {
  manager: string;
  codehash: string;
  cached: boolean;
}
export type UpdateProgramCacheEvent = TypedEvent<
  [string, string, boolean],
  UpdateProgramCacheEventObject
>;

export type UpdateProgramCacheEventFilter =
  TypedEventFilter<UpdateProgramCacheEvent>;

export interface ArbWasmCache extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ArbWasmCacheInterface;

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
    allCacheManagers(
      overrides?: CallOverrides
    ): Promise<[string[]] & { managers: string[] }>;

    cacheCodehash(
      codehash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    cacheProgram(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    codehashIsCached(
      codehash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    evictCodehash(
      codehash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isCacheManager(
      manager: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  allCacheManagers(overrides?: CallOverrides): Promise<string[]>;

  cacheCodehash(
    codehash: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  cacheProgram(
    addr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  codehashIsCached(
    codehash: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  evictCodehash(
    codehash: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isCacheManager(
    manager: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    allCacheManagers(overrides?: CallOverrides): Promise<string[]>;

    cacheCodehash(
      codehash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    cacheProgram(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    codehashIsCached(
      codehash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    evictCodehash(
      codehash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    isCacheManager(
      manager: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "UpdateProgramCache(address,bytes32,bool)"(
      manager?: PromiseOrValue<string> | null,
      codehash?: PromiseOrValue<BytesLike> | null,
      cached?: null
    ): UpdateProgramCacheEventFilter;
    UpdateProgramCache(
      manager?: PromiseOrValue<string> | null,
      codehash?: PromiseOrValue<BytesLike> | null,
      cached?: null
    ): UpdateProgramCacheEventFilter;
  };

  estimateGas: {
    allCacheManagers(overrides?: CallOverrides): Promise<BigNumber>;

    cacheCodehash(
      codehash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    cacheProgram(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    codehashIsCached(
      codehash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    evictCodehash(
      codehash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isCacheManager(
      manager: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allCacheManagers(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cacheCodehash(
      codehash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    cacheProgram(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    codehashIsCached(
      codehash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    evictCodehash(
      codehash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isCacheManager(
      manager: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
