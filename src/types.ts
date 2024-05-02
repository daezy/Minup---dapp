import { Connection, PublicKey } from "@solana/web3.js";
import React from "react";
import * as anchor from "@project-serum/anchor";

export type AppContextType = {
  walletConnected: boolean;
  connection: Connection;
  provider: anchor.Provider | undefined;
  walletAddress: PublicKey | undefined | null;
  solBalance: number;
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
