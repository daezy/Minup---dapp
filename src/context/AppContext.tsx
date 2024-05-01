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
  success: "",
  error: "",
  network: "devnet",
  userInitialized: true,
  setNetwork: () => {},
  setUserInitialized: () => {},
  setError: () => {},
  setSuccess: () => {},
});

export const AppContextProvider: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const [walletConnected, setWalletConnected] = useState<boolean>(false);
  const [userInitialized, setUserInitialized] = useState<boolean>(false);
  const [solBalance, setSolBalance] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [network, setNetwork] = useState<"devnet" | "testnet" | "mainnet-beta">(
    "devnet"
  );
  const { connection } = useConnection();
  const { wallet } = useWallet();

  useEffect(() => {
    if (wallet?.adapter.publicKey) {
      setWalletConnected(true);
    } else {
      setWalletConnected(false);
    }
  }, [wallet?.adapter.publicKey]);

  useEffect(() => {
    const getBalance = async () => {
      if (wallet?.adapter.publicKey) {
        const balance = await connection.getBalance(wallet?.adapter.publicKey);
        const balanceInSol = balance / LAMPORTS_PER_SOL;
        setSolBalance(balanceInSol);
      }
    };

    getBalance();
  }, [connection, wallet?.adapter.publicKey, network]);

  const handleSetError = (msg: string) => {
    setError(msg);
  };

  const handleSetSuccess = (msg: string) => {
    setSuccess(msg);
  };

  return (
    <AppContext.Provider
      value={{
        walletConnected,
        userInitialized,
        solBalance,
        connection,
        walletAddress: wallet?.adapter.publicKey,
        error,
        success,
        network,
        setNetwork,
        setUserInitialized,
        setError: handleSetError,
        setSuccess: handleSetSuccess,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
