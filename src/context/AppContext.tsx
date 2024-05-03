import React, { useEffect, useState } from "react";
import { AppContextType, MineInfo, ReferralInfo, TierInfo, UserInfo } from "../types";
import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
} from "@solana/web3.js";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import * as anchor from "@coral-xyz/anchor";
import { TierSolMiner } from "../program/types/tier_sol_miner";
import idl from "../program/idl.json";
import { TOKEN_DECIMALS } from "../constants";

export const AppContext = React.createContext<AppContextType>({
  walletConnected: false,
  connection: new Connection(clusterApiUrl("devnet")),
  provider: undefined,
  program: undefined,
  walletAddress: PublicKey.default,
  solBalance: 0,
  mineInfo: undefined,
  tiers: [],
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
  const [program, setProgram] = useState<anchor.Program<TierSolMiner>>();

  const [mineInfo, setMineInfo] = useState<MineInfo>();
  const [tiers, setTiers] = useState<TierInfo[]>([]);
  const [userInfo, setUserInfo] = useState<UserInfo>();
  const [referralInfo, setReferralInfo] = useState<ReferralInfo>();
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
      if (wallet?.publicKey && provider) {
        const balance = await connection.getBalance(wallet?.publicKey);
        const balanceInSol = balance / LAMPORTS_PER_SOL;
        setSolBalance(balanceInSol);
      }
    };

    const getMineAndTierInfo = async () => {
      if (program) {
        const [mineAccount, ] = anchor.web3.PublicKey.findProgramAddressSync(
          [Buffer.from("mine")], 
          program.programId
        );
        const mineInfo = await program.account.mineInfo.fetch(mineAccount);
        setMineInfo({
          address: mineAccount,
          admin: mineInfo.admin,
          currentTierNonce: mineInfo.currentTierNonce,
          devFee: mineInfo.devFee.toNumber()/100,
          earlyWithdrawalFee: mineInfo.earlyWithdrawalFee.toNumber()/100,
          feeCollector: mineInfo.feeCollector,
          isActive: mineInfo.isActive,
          penaltyFeeCollector: mineInfo.penaltyFeeCollector,
          referralReward: mineInfo.referralReward.toNumber()/100,
          tokenMint: mineInfo.tokenMint
        })

        const tiers: TierInfo[] = [];
        for (let i = 0;i<mineInfo.currentTierNonce;i++) {
          const [ tierAddress, ] = anchor.web3.PublicKey.findProgramAddressSync(
            [Buffer.from("tier"), Uint8Array.from([i])], 
            program.programId
          );
          const tierInfo = await program.account.tierInfo.fetch(tierAddress);
          tiers.push({
            address: tierAddress,
            minimumTokenAmount: tierInfo.minimumTokenAmount.toNumber()/(10**TOKEN_DECIMALS),
            totalLocked: tierInfo.totalLocked.toNumber()/anchor.web3.LAMPORTS_PER_SOL,
            apy: tierInfo.apy.toNumber()/100,
            lockDuration: tierInfo.lockDuration.toNumber(),
            isActive: tierInfo.isActive,
            nonce: tierInfo.nonce
          })
        }
        setTiers(tiers);
      }
    }

    const getUserAndReferralInfo = async () => {
      if (wallet && program) {
        const [userInfoAddress, ] = PublicKey.findProgramAddressSync([Buffer.from("user"), wallet.publicKey.toBuffer()], program.programId);
        const [refInfoAddress, ] = PublicKey.findProgramAddressSync([Buffer.from("referral"), userInfoAddress.toBuffer()], program.programId);
        const userInfo = await program.account.userInfo.fetch(userInfoAddress);
        setUserInfo({
          address: userInfoAddress,
          totalLocked: userInfo.totalLocked.toNumber()/anchor.web3.LAMPORTS_PER_SOL,
          accruedInterest: userInfo.accruedInterest.toNumber()/anchor.web3.LAMPORTS_PER_SOL,
          lockTs: userInfo.lockTs.toNumber(),
          tier: userInfo.tier,
          isWhitelist: userInfo.isWhitelist
        })
        const refInfo = await program.account.referralInfo.fetch(refInfoAddress);
        setReferralInfo({
          address: refInfoAddress,
          userInfo: refInfo.userInfo,
          owner: refInfo.owner,
          earnings: refInfo.earnings.toNumber()/anchor.web3.LAMPORTS_PER_SOL,
          count: refInfo.count.toNumber()
        })
      }
    }

    getBalance();
    getMineAndTierInfo();
    getUserAndReferralInfo();
  }, [connection, wallet?.publicKey]);

  useEffect(() => {
    let provider: anchor.Provider;

    if (wallet) {
      try {
        provider = new anchor.AnchorProvider(connection, wallet, {});
        setProvider(provider);
        const programId = new PublicKey(idl.metadata.address);
        const program = new anchor.Program(idl as anchor.Idl, programId, provider) as unknown as anchor.Program<TierSolMiner>;
        setProgram(program);
      } catch {
        provider = new anchor.AnchorProvider(connection, wallet, {});
        anchor.setProvider(provider);
        setProvider(provider);
      }
    }
  }, [wallet, network]);

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
        mineInfo,
        tiers,
        userInfo,
        referralInfo,
        provider,
        program,
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
