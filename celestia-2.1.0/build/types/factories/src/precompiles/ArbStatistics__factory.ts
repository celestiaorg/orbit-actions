/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ArbStatistics,
  ArbStatisticsInterface,
} from "../../../src/precompiles/ArbStatistics";

const _abi = [
  {
    inputs: [],
    name: "getStats",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class ArbStatistics__factory {
  static readonly abi = _abi;
  static createInterface(): ArbStatisticsInterface {
    return new utils.Interface(_abi) as ArbStatisticsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ArbStatistics {
    return new Contract(address, _abi, signerOrProvider) as ArbStatistics;
  }
}
