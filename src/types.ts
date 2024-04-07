import { Connection, PublicKey } from "@solana/web3.js";

export type AppContextType = {
  walletConnected: boolean;
  connection: Connection;
  walletAddress: PublicKey | undefined | null;
  solBalance: number;
};
