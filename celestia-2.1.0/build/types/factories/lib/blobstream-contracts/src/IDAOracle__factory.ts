/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IDAOracle,
  IDAOracleInterface,
} from "../../../../lib/blobstream-contracts/src/IDAOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tupleRootNonce",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "height",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "dataRoot",
            type: "bytes32",
          },
        ],
        internalType: "struct DataRootTuple",
        name: "_tuple",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "bytes32[]",
            name: "sideNodes",
            type: "bytes32[]",
          },
          {
            internalType: "uint256",
            name: "key",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "numLeaves",
            type: "uint256",
          },
        ],
        internalType: "struct BinaryMerkleProof",
        name: "_proof",
        type: "tuple",
      },
    ],
    name: "verifyAttestation",
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
];

export class IDAOracle__factory {
  static readonly abi = _abi;
  static createInterface(): IDAOracleInterface {
    return new utils.Interface(_abi) as IDAOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDAOracle {
    return new Contract(address, _abi, signerOrProvider) as IDAOracle;
  }
}
