import React, { useEffect, useState } from "react";
import { AppContextType } from "../types";
import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
} from "@solana/web3.js";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import * as anchor from "@project-serum/anchor";

export const AppContext = React.createContext<AppContextType>({
  walletConnected: false,
  connection: new Connection(clusterApiUrl("devnet")),
  provider: undefined,
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

export const AppContextProvider: React.FC<{
  children: React.ReactElement;
  network: "devnet" | "testnet" | "mainnet-beta";
  setNetwork: React.Dispatch<
    React.SetStateAction<"devnet" | "testnet" | "mainnet-beta">
  >;
}> = ({ children, network, setNetwork }) => {
  const [walletConnected, setWalletConnected] = useState<boolean>(false);
  const [provider, setProvider] = useState<anchor.Provider>();
  const [userInitialized, setUserInitialized] = useState<boolean>(true);
  const [solBalance, setSolBalance] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const { connection } = useConnection();
  const wallet = useAnchorWallet();

  useEffect(() => {
    if (wallet?.publicKey) {
      setWalletConnected(true);
    } else {
      setWalletConnected(false);
    }
  }, [wallet?.publicKey]);

  useEffect(() => {
    const getBalance = async () => {
      if (wallet?.publicKey) {
        const balance = await connection.getBalance(wallet?.publicKey);
        const balanceInSol = balance / LAMPORTS_PER_SOL;
        setSolBalance(balanceInSol);
      }
    };

    getBalance();
  }, [connection, wallet?.publicKey, network]);

  useEffect(() => {
    let provider: anchor.Provider;

    if (wallet) {
      try {
        provider = anchor.getProvider();
        setProvider(provider);
      } catch {
        provider = new anchor.AnchorProvider(connection, wallet, {});
        anchor.setProvider(provider);
        setProvider(provider);
      }
    }
  }, [wallet]);

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
        provider,
        connection,
        walletAddress: wallet?.publicKey,
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
