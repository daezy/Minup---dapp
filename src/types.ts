import { Connection, PublicKey } from "@solana/web3.js";
import React from "react";
import * as anchor from "@coral-xyz/anchor";
import { TierSolMiner } from "./program/types/tier_sol_miner";

export type AppContextType = {
  walletConnected: boolean;
  connection: Connection;
  provider: anchor.Provider | undefined;
  program: anchor.Program<TierSolMiner> | undefined;
  walletAddress: PublicKey | undefined | null;
  solBalance: number;
  mineInfo: MineInfo | undefined;
  tiers: TierInfo[];
  userInfo: UserInfo | undefined;
  referralInfo: ReferralInfo | undefined;
  error: string;
  success: string;
  network: "devnet" | "testnet" | "mainnet-beta";
  userInitialized: boolean;
  setError: (msg: string) => void;
  setUserInitialized: React.Dispatch<React.SetStateAction<boolean>>;
  setNetwork: React.Dispatch<
    React.SetStateAction<"devnet" | "testnet" | "mainnet-beta">
  >;
  setSuccess: (msg: string) => void;
};

export interface MineInfo {
  address: PublicKey,
  admin: PublicKey,
  currentTierNonce: number,
  devFee: number,
  earlyWithdrawalFee: number,
  feeCollector: PublicKey,
  isActive: Boolean,
  penaltyFeeCollector: PublicKey,
  referralReward: number,
  tokenMint: PublicKey
}

export interface TierInfo {
  address: PublicKey,
  minimumTokenAmount: number,
  totalLocked: number,
  apy: number,
  lockDuration: number,
  isActive: Boolean,
  nonce: number
}

export interface UserInfo {
  address: PublicKey,
  totalLocked: number,
  accruedInterest: number,
  lockTs: number,
  tier: PublicKey,
  isWhitelist: Boolean
}

export interface ReferralInfo {
  address: PublicKey,
  userInfo: PublicKey,
  owner: PublicKey,
  earnings: number,
  count: number
}
