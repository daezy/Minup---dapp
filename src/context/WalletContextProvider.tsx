import React from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import * as walletAdapterWallets from "@solana/wallet-adapter-wallets";
import "@solana/wallet-adapter-react-ui/styles.css";
import { clusterApiUrl } from "@solana/web3.js";

const WalletContextProvider: React.FC<{
  children: React.ReactNode;
  network: "devnet" | "testnet" | "mainnet-beta";
}> = ({ children, network }) => {
  let endpoint: string;
  if (network == "mainnet-beta") {
    endpoint =
      "https://solana-mainnet.g.alchemy.com/v2/mSSt0hYTZTKiDCQwz8TLgt7duMQLueDZ";
  } else {
    endpoint = clusterApiUrl(network);
  }
  const wallets = React.useMemo(() => {
    return [
      new walletAdapterWallets.PhantomWalletAdapter(),
      new walletAdapterWallets.SolflareWalletAdapter(),
    ];
  }, []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect={true}>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default WalletContextProvider;
