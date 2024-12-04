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
} from "../../../common";

export type DataRootTupleStruct = {
  height: PromiseOrValue<BigNumberish>;
  dataRoot: PromiseOrValue<BytesLike>;
};

export type DataRootTupleStructOutput = [BigNumber, string] & {
  height: BigNumber;
  dataRoot: string;
};

export type BinaryMerkleProofStruct = {
  sideNodes: PromiseOrValue<BytesLike>[];
  key: PromiseOrValue<BigNumberish>;
  numLeaves: PromiseOrValue<BigNumberish>;
};

export type BinaryMerkleProofStructOutput = [string[], BigNumber, BigNumber] & {
  sideNodes: string[];
  key: BigNumber;
  numLeaves: BigNumber;
};

export interface MockstreamInterface extends utils.Interface {
  functions: {
    "frozen()": FunctionFragment;
    "initialize(uint64)": FunctionFragment;
    "latestBlock()": FunctionFragment;
    "state_dataCommitments(uint256)": FunctionFragment;
    "state_proofNonce()": FunctionFragment;
    "submitDataCommitment(bytes32,uint64,uint64)": FunctionFragment;
    "updateFreeze(bool)": FunctionFragment;
    "updateGenesisState(uint64)": FunctionFragment;
    "verifyAttestation(uint256,(uint256,bytes32),(bytes32[],uint256,uint256))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "frozen"
      | "initialize"
      | "latestBlock"
      | "state_dataCommitments"
      | "state_proofNonce"
      | "submitDataCommitment"
      | "updateFreeze"
      | "updateGenesisState"
      | "verifyAttestation"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "frozen", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "latestBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "state_dataCommitments",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "state_proofNonce",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "submitDataCommitment",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "updateFreeze",
    values: [PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateGenesisState",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyAttestation",
    values: [
      PromiseOrValue<BigNumberish>,
      DataRootTupleStruct,
      BinaryMerkleProofStruct
    ]
  ): string;

  decodeFunctionResult(functionFragment: "frozen", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "latestBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "state_dataCommitments",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "state_proofNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitDataCommitment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateFreeze",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateGenesisState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyAttestation",
    data: BytesLike
  ): Result;

  events: {
    "DataCommitmentStored(uint256,uint64,uint64,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DataCommitmentStored"): EventFragment;
}

export interface DataCommitmentStoredEventObject {
  proofNonce: BigNumber;
  startBlock: BigNumber;
  endBlock: BigNumber;
  dataCommitment: string;
}
export type DataCommitmentStoredEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, string],
  DataCommitmentStoredEventObject
>;

export type DataCommitmentStoredEventFilter =
  TypedEventFilter<DataCommitmentStoredEvent>;

export interface Mockstream extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MockstreamInterface;

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
    frozen(overrides?: CallOverrides): Promise<[boolean]>;

    initialize(
      _latestBlock: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    latestBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    state_dataCommitments(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    state_proofNonce(overrides?: CallOverrides): Promise<[BigNumber]>;

    submitDataCommitment(
      _dataCommitment: PromiseOrValue<BytesLike>,
      _beginBlock: PromiseOrValue<BigNumberish>,
      _endBlock: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateFreeze(
      _freeze: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateGenesisState(
      _height: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    verifyAttestation(
      _proofNonce: PromiseOrValue<BigNumberish>,
      _tuple: DataRootTupleStruct,
      _proof: BinaryMerkleProofStruct,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  frozen(overrides?: CallOverrides): Promise<boolean>;

  initialize(
    _latestBlock: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  latestBlock(overrides?: CallOverrides): Promise<BigNumber>;

  state_dataCommitments(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  state_proofNonce(overrides?: CallOverrides): Promise<BigNumber>;

  submitDataCommitment(
    _dataCommitment: PromiseOrValue<BytesLike>,
    _beginBlock: PromiseOrValue<BigNumberish>,
    _endBlock: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateFreeze(
    _freeze: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateGenesisState(
    _height: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  verifyAttestation(
    _proofNonce: PromiseOrValue<BigNumberish>,
    _tuple: DataRootTupleStruct,
    _proof: BinaryMerkleProofStruct,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    frozen(overrides?: CallOverrides): Promise<boolean>;

    initialize(
      _latestBlock: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    latestBlock(overrides?: CallOverrides): Promise<BigNumber>;

    state_dataCommitments(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    state_proofNonce(overrides?: CallOverrides): Promise<BigNumber>;

    submitDataCommitment(
      _dataCommitment: PromiseOrValue<BytesLike>,
      _beginBlock: PromiseOrValue<BigNumberish>,
      _endBlock: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateFreeze(
      _freeze: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateGenesisState(
      _height: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    verifyAttestation(
      _proofNonce: PromiseOrValue<BigNumberish>,
      _tuple: DataRootTupleStruct,
      _proof: BinaryMerkleProofStruct,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "DataCommitmentStored(uint256,uint64,uint64,bytes32)"(
      proofNonce?: null,
      startBlock?: PromiseOrValue<BigNumberish> | null,
      endBlock?: PromiseOrValue<BigNumberish> | null,
      dataCommitment?: PromiseOrValue<BytesLike> | null
    ): DataCommitmentStoredEventFilter;
    DataCommitmentStored(
      proofNonce?: null,
      startBlock?: PromiseOrValue<BigNumberish> | null,
      endBlock?: PromiseOrValue<BigNumberish> | null,
      dataCommitment?: PromiseOrValue<BytesLike> | null
    ): DataCommitmentStoredEventFilter;
  };

  estimateGas: {
    frozen(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _latestBlock: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    latestBlock(overrides?: CallOverrides): Promise<BigNumber>;

    state_dataCommitments(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    state_proofNonce(overrides?: CallOverrides): Promise<BigNumber>;

    submitDataCommitment(
      _dataCommitment: PromiseOrValue<BytesLike>,
      _beginBlock: PromiseOrValue<BigNumberish>,
      _endBlock: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateFreeze(
      _freeze: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateGenesisState(
      _height: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    verifyAttestation(
      _proofNonce: PromiseOrValue<BigNumberish>,
      _tuple: DataRootTupleStruct,
      _proof: BinaryMerkleProofStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    frozen(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _latestBlock: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    latestBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    state_dataCommitments(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    state_proofNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    submitDataCommitment(
      _dataCommitment: PromiseOrValue<BytesLike>,
      _beginBlock: PromiseOrValue<BigNumberish>,
      _endBlock: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateFreeze(
      _freeze: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateGenesisState(
      _height: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    verifyAttestation(
      _proofNonce: PromiseOrValue<BigNumberish>,
      _tuple: DataRootTupleStruct,
      _proof: BinaryMerkleProofStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
