import { useContext } from "react";
import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Strategies = () => {
  const ctx = useContext(AppContext);
  return (
    <>
      <h2 className="text-slate-100 text-xl">Recommended Strategies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-3">
        <div className="bg-slate-100 p-4 py-10 rounded-2xl md:col-span-2 md:mb-4">
          <div className="bg-slate-200 w-16 h-16 flex items-center justify-center border-2 border-solid border-slate-100 rounded-full mx-auto relative mt-[-55px]">
            <img
              src="./img/sol.png"
              alt="sol"
              className="max-w-full"
              width={35}
            />
          </div>
          <div className="text-center mt-4">
            <h2 className="text-2xl my-2">Solana Mining</h2>
            <p className="text-slate-400 text-sm">Automatic mine delegation</p>

            <div className="my-4 ">
              <h3 className="text-lg text-slate-700 my-1">APY</h3>
              <h2 className="text-4xl text-orange-600">8.08%</h2>
            </div>
            <Link to={`${ctx.walletConnected && "/mine"}`}>
              <button
                className="bg-orange-600 my-3 py-3 px-5 justify-center flex gap-3 items-center w-11/12 text-slate-100 rounded-full mx-auto disabled:bg-slate-300 disabled:text-slate-500"
                disabled={!ctx.walletConnected}
              >
                <FaCoins />
                Mine
              </button>
            </Link>
          </div>

          <div className="px-3 my-4">
            <p className="">What&apos;s in this product?</p>
            <ul className="my-1">
              <li>- Automated mine delegation</li>
              <li>- Protected Mining rewards</li>
            </ul>
          </div>
        </div>
        <div className="bg-slate-100 p-4 py-10 rounded-2xl">
          <div className="flex items-center justify-center rounded-full mx-auto relative mt-[-55px] border-2 border-solid border-slate-100 w-fit">
            <img
              src="./img/bsc.svg"
              alt="sol"
              className="max-w-full w-16 h-16 "
            />
          </div>
          <div className="text-center mt-4">
            <h2 className="text-2xl my-2">BSC Mining</h2>
            <p className="text-slate-400 text-sm">Automatic mine delegation</p>

            <div className="my-4 ">
              <h3 className="text-lg text-slate-700 my-1">APY</h3>
              <h2 className="text-4xl text-orange-600">8.08%</h2>
            </div>
            {/* <Link to={"/mine"}> */}
            <button
              className="bg-orange-600 my-3 py-3 px-5 justify-center flex gap-3 items-center w-11/12 text-slate-100 rounded-full mx-auto disabled:bg-slate-300 disabled:text-slate-500"
              disabled
            >
              {/* <FaCoins />
              Mine */}
              Coming Soon
            </button>
            {/* </Link> */}
          </div>

          <div className="px-3 my-4">
            <p className="">What&apos;s in this product?</p>
            <ul className="my-1">
              <li>- Automated mine delegation</li>
              <li>- Protected Mining rewards</li>
            </ul>
          </div>
        </div>
        <div className="bg-slate-100 p-4 py-10 rounded-2xl">
          <div className="bg-slate-200 w-16 h-16 flex items-center justify-center border-2 border-solid border-slate-100 rounded-full mx-auto relative mt-[-55px]">
            <img
              src="./img/ethereum.svg"
              alt="sol"
              className="max-w-full"
              width={28}
            />
          </div>
          <div className="text-center mt-4">
            <h2 className="text-2xl my-2">Ethereum Mining</h2>
            <p className="text-slate-400 text-sm">
              Unlock mine liquidity for DeFi
            </p>

            <div className="my-4 ">
              <h3 className="text-lg text-slate-700 my-1">APY</h3>
              <h2 className="text-4xl text-orange-600">7.60%</h2>
            </div>
            {/* <Link to={"/mine"}> */}
            <button
              className="bg-orange-600 my-3 py-3 px-5 justify-center flex gap-3 items-center w-11/12 text-slate-100 rounded-full mx-auto disabled:bg-slate-300 disabled:text-slate-500"
              disabled
            >
              {/* <FaCoins />
              Mine */}
              Coming Soon
            </button>
            {/* </Link> */}
          </div>

          <div className="px-3 my-4">
            <p className="">What&apos;s in this product?</p>
            <ul className="my-1">
              <li>- Automated mine delegation</li>
              <li>- Protected Mining rewards</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Strategies;
