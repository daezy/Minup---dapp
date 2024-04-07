import React, { useEffect, useState } from "react";
import { AppContextType } from "../types";
import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
} from "@solana/web3.js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

export const AppContext = React.createContext<AppContextType>({
  walletConnected: false,
  connection: new Connection(clusterApiUrl("devnet")),
  walletAddress: PublicKey.default,
  solBalance: 0,
});

export const AppContextProvider: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const [walletConnected, setWalletConnected] = useState<boolean>(false);
  const [solBalance, setSolBalance] = useState<number>(0);
  const { connection } = useConnection();
  const { wallet } = useWallet();

  useEffect(() => {
    if (wallet?.adapter.name) {
      setWalletConnected(true);
    } else {
      setWalletConnected(false);
    }
  }, [wallet]);

  useEffect(() => {
    const getBalance = async () => {
      if (wallet?.adapter.publicKey) {
        const balance = await connection.getBalance(wallet?.adapter.publicKey);
        const balanceInSol = balance / LAMPORTS_PER_SOL;
        setSolBalance(balanceInSol);
      }
    };

    getBalance();
  }, [connection, wallet?.adapter.publicKey]);

  return (
    <AppContext.Provider
      value={{
        walletConnected,
        solBalance,
        connection,
        walletAddress: wallet?.adapter.publicKey,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
