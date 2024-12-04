/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  DoubleLogicERC1967Upgrade,
  DoubleLogicERC1967UpgradeInterface,
} from "../../../../src/libraries/AdminFallbackProxy.sol/DoubleLogicERC1967Upgrade";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "UpgradedSecondary",
    type: "event",
  },
];

export class DoubleLogicERC1967Upgrade__factory {
  static readonly abi = _abi;
  static createInterface(): DoubleLogicERC1967UpgradeInterface {
    return new utils.Interface(_abi) as DoubleLogicERC1967UpgradeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DoubleLogicERC1967Upgrade {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as DoubleLogicERC1967Upgrade;
  }
}
