/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
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
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface StakingInterface extends utils.Interface {
  contractName: "Staking";
  functions: {
    "THRESHOLD()": FunctionFragment;
    "addAllowedTokens(address)": FunctionFragment;
    "allowedTokens(address)": FunctionFragment;
    "dappToken()": FunctionFragment;
    "getTokenValue(address)": FunctionFragment;
    "getUserSingleTokenValue(address,address)": FunctionFragment;
    "getUserTotalValue(address)": FunctionFragment;
    "issueTokens()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "stake(uint256,address)": FunctionFragment;
    "stakers(uint256)": FunctionFragment;
    "stakingBalances(address,address)": FunctionFragment;
    "tokenPricefeed(address)": FunctionFragment;
    "tokensStaked(address,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "uniqueTokensStaked(address)": FunctionFragment;
    "unstakeTokens(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "THRESHOLD", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "addAllowedTokens",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "allowedTokens",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "dappToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getTokenValue",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserSingleTokenValue",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserTotalValue",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "issueTokens",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stake",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "stakers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakingBalances",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenPricefeed",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "tokensStaked",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "uniqueTokensStaked",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "unstakeTokens",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "THRESHOLD", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addAllowedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "dappToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTokenValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserSingleTokenValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserTotalValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "issueTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stakers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakingBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenPricefeed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokensStaked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uniqueTokensStaked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unstakeTokens",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "Stake(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Stake"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type StakeEvent = TypedEvent<
  [string, BigNumber],
  { token: string; amount: BigNumber }
>;

export type StakeEventFilter = TypedEventFilter<StakeEvent>;

export interface Staking extends BaseContract {
  contractName: "Staking";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: StakingInterface;

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
    THRESHOLD(overrides?: CallOverrides): Promise<[BigNumber]>;

    addAllowedTokens(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    allowedTokens(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    dappToken(overrides?: CallOverrides): Promise<[string]>;

    getTokenValue(
      _token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    getUserSingleTokenValue(
      _user: string,
      _token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getUserTotalValue(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    issueTokens(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stake(
      amount: BigNumberish,
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakers(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    stakingBalances(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    tokenPricefeed(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    tokensStaked(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    uniqueTokensStaked(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    unstakeTokens(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;

  addAllowedTokens(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  allowedTokens(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  dappToken(overrides?: CallOverrides): Promise<string>;

  getTokenValue(
    _token: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  getUserSingleTokenValue(
    _user: string,
    _token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getUserTotalValue(
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  issueTokens(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stake(
    amount: BigNumberish,
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakers(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  stakingBalances(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  tokenPricefeed(arg0: string, overrides?: CallOverrides): Promise<string>;

  tokensStaked(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  uniqueTokensStaked(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  unstakeTokens(
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;

    addAllowedTokens(token: string, overrides?: CallOverrides): Promise<void>;

    allowedTokens(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    dappToken(overrides?: CallOverrides): Promise<string>;

    getTokenValue(
      _token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    getUserSingleTokenValue(
      _user: string,
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserTotalValue(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    issueTokens(overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    stake(
      amount: BigNumberish,
      _token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    stakers(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    stakingBalances(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenPricefeed(arg0: string, overrides?: CallOverrides): Promise<string>;

    tokensStaked(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    uniqueTokensStaked(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unstakeTokens(_token: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "Stake(address,uint256)"(token?: null, amount?: null): StakeEventFilter;
    Stake(token?: null, amount?: null): StakeEventFilter;
  };

  estimateGas: {
    THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;

    addAllowedTokens(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    allowedTokens(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    dappToken(overrides?: CallOverrides): Promise<BigNumber>;

    getTokenValue(
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserSingleTokenValue(
      _user: string,
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserTotalValue(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    issueTokens(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stake(
      amount: BigNumberish,
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakers(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    stakingBalances(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenPricefeed(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    tokensStaked(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    uniqueTokensStaked(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unstakeTokens(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    THRESHOLD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addAllowedTokens(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    allowedTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    dappToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTokenValue(
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserSingleTokenValue(
      _user: string,
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserTotalValue(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    issueTokens(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stake(
      amount: BigNumberish,
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stakingBalances(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenPricefeed(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokensStaked(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    uniqueTokensStaked(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unstakeTokens(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
