import { Connection, PublicKey } from "@solana/web3.js";
import React from "react";

export type AppContextType = {
  walletConnected: boolean;
  connection: Connection;
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
