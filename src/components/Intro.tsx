import { FaWallet } from "react-icons/fa";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

const Intro = () => {
  const wallet = useWalletModal();

  return (
    <div className="w-[90%] mx-auto text-center flex flex-col items-center">
      <h1 className="text-4xl my-2 kanit-medium leading-tight">
        All you ever need in one place for{" "}
        <span className="text-orange-400"> Solana Mining</span>
      </h1>
      <p className="text-slate-400 my-1">
        Start staking SOL, review your existing mine, and unmine at any time,
        for the best price.
      </p>
      <button
        className="bg-orange-600 my-3 py-3 px-5 justify-center flex gap-3 items-center w-11/12 md:w-7/12 text-slate-100 rounded-full"
        onClick={() => wallet.setVisible(true)}
      >
        <FaWallet />
        Connect Wallet
      </button>
    </div>
  );
};

export default Intro;
