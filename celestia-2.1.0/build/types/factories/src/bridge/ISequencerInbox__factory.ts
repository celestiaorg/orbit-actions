/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ISequencerInbox,
  ISequencerInboxInterface,
} from "../../../src/bridge/ISequencerInbox";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "messageNum",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "InboxMessageDelivered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "messageNum",
        type: "uint256",
      },
    ],
    name: "InboxMessageDeliveredFromOrigin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "keysetHash",
        type: "bytes32",
      },
    ],
    name: "InvalidateKeyset",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "OwnerFunctionCalled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "batchSequenceNumber",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "SequencerBatchData",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "batchSequenceNumber",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "beforeAcc",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "afterAcc",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "delayedAcc",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "afterDelayedMessagesRead",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint64",
            name: "minTimestamp",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "maxTimestamp",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "minBlockNumber",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "maxBlockNumber",
            type: "uint64",
          },
        ],
        indexed: false,
        internalType: "struct IBridge.TimeBounds",
        name: "timeBounds",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "enum IBridge.BatchDataLocation",
        name: "dataLocation",
        type: "uint8",
      },
    ],
    name: "SequencerBatchDelivered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "keysetHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "keysetBytes",
        type: "bytes",
      },
    ],
    name: "SetValidKeyset",
    type: "event",
  },
  {
    inputs: [],
    name: "BROTLI_MESSAGE_HEADER_FLAG",
    outputs: [
      {
        internalType: "bytes1",
        name: "",
        type: "bytes1",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "CELESTIA_MESSAGE_HEADER_FLAG",
    outputs: [
      {
        internalType: "bytes1",
        name: "",
        type: "bytes1",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DAS_MESSAGE_HEADER_FLAG",
    outputs: [
      {
        internalType: "bytes1",
        name: "",
        type: "bytes1",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DATA_AUTHENTICATED_FLAG",
    outputs: [
      {
        internalType: "bytes1",
        name: "",
        type: "bytes1",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DATA_BLOB_HEADER_FLAG",
    outputs: [
      {
        internalType: "bytes1",
        name: "",
        type: "bytes1",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "HEADER_LENGTH",
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
    name: "TREE_DAS_MESSAGE_HEADER_FLAG",
    outputs: [
      {
        internalType: "bytes1",
        name: "",
        type: "bytes1",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ZERO_HEAVY_MESSAGE_HEADER_FLAG",
    outputs: [
      {
        internalType: "bytes1",
        name: "",
        type: "bytes1",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "sequenceNumber",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "afterDelayedMessagesRead",
        type: "uint256",
      },
      {
        internalType: "contract IGasRefunder",
        name: "gasRefunder",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "prevMessageCount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newMessageCount",
        type: "uint256",
      },
    ],
    name: "addSequencerL2Batch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "sequenceNumber",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "afterDelayedMessagesRead",
        type: "uint256",
      },
      {
        internalType: "contract IGasRefunder",
        name: "gasRefunder",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "prevMessageCount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newMessageCount",
        type: "uint256",
      },
    ],
    name: "addSequencerL2BatchFromBlobs",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "sequenceNumber",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "afterDelayedMessagesRead",
        type: "uint256",
      },
      {
        internalType: "contract IGasRefunder",
        name: "gasRefunder",
        type: "address",
      },
    ],
    name: "addSequencerL2BatchFromOrigin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "sequenceNumber",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "afterDelayedMessagesRead",
        type: "uint256",
      },
      {
        internalType: "contract IGasRefunder",
        name: "gasRefunder",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "prevMessageCount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newMessageCount",
        type: "uint256",
      },
    ],
    name: "addSequencerL2BatchFromOrigin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "batchCount",
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
    name: "batchPosterManager",
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
    inputs: [],
    name: "bridge",
    outputs: [
      {
        internalType: "contract IBridge",
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
        name: "",
        type: "bytes32",
      },
    ],
    name: "dasKeySetInfo",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
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
    inputs: [
      {
        internalType: "uint256",
        name: "_totalDelayedMessagesRead",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "kind",
        type: "uint8",
      },
      {
        internalType: "uint64[2]",
        name: "l1BlockAndTime",
        type: "uint64[2]",
      },
      {
        internalType: "uint256",
        name: "baseFeeL1",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "messageDataHash",
        type: "bytes32",
      },
    ],
    name: "forceInclusion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "ksHash",
        type: "bytes32",
      },
    ],
    name: "getKeysetCreationBlock",
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
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "inboxAccs",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IBridge",
        name: "bridge_",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "delayBlocks",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "futureBlocks",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "delaySeconds",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "futureSeconds",
            type: "uint256",
          },
        ],
        internalType: "struct ISequencerInbox.MaxTimeVariation",
        name: "maxTimeVariation_",
        type: "tuple",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "ksHash",
        type: "bytes32",
      },
    ],
    name: "invalidateKeysetHash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isBatchPoster",
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
        name: "",
        type: "address",
      },
    ],
    name: "isSequencer",
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
        internalType: "bytes32",
        name: "ksHash",
        type: "bytes32",
      },
    ],
    name: "isValidKeysetHash",
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
    name: "maxDataSize",
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
    name: "maxTimeVariation",
    outputs: [
      {
        internalType: "uint256",
        name: "delayBlocks",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "futureBlocks",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "delaySeconds",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "futureSeconds",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "removeDelayAfterFork",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rollup",
    outputs: [
      {
        internalType: "contract IOwnable",
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
        name: "newBatchPosterManager",
        type: "address",
      },
    ],
    name: "setBatchPosterManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isBatchPoster_",
        type: "bool",
      },
    ],
    name: "setIsBatchPoster",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isSequencer_",
        type: "bool",
      },
    ],
    name: "setIsSequencer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "delayBlocks",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "futureBlocks",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "delaySeconds",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "futureSeconds",
            type: "uint256",
          },
        ],
        internalType: "struct ISequencerInbox.MaxTimeVariation",
        name: "maxTimeVariation_",
        type: "tuple",
      },
    ],
    name: "setMaxTimeVariation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "keysetBytes",
        type: "bytes",
      },
    ],
    name: "setValidKeyset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalDelayedMessagesRead",
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
    name: "updateRollupAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ISequencerInbox__factory {
  static readonly abi = _abi;
  static createInterface(): ISequencerInboxInterface {
    return new utils.Interface(_abi) as ISequencerInboxInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISequencerInbox {
    return new Contract(address, _abi, signerOrProvider) as ISequencerInbox;
  }
}
