import { FaCoins } from "react-icons/fa";
import Intro from "../components/Intro";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { BiDiamond } from "react-icons/bi";

const Mining = () => {
  const ctx = useContext(AppContext);
  return (
    <>
      <div className="bg-slate-100 p-4 py-10 rounded-2xl">
        {!ctx.walletConnected ? (
          <Intro />
        ) : (
          <div className="w-[97%] mx-auto">
            <div className="flex justify-between items-center mb-6">
              <div className="">
                <p className=" text-orange-600 text-lg mb-1">Mined</p>
                <p className="text-slate-800 text-xl">0 SOL</p>
              </div>
              <div className="">
                <p className=" text-orange-600 text-lg mb-1">Available</p>
                <p className="text-slate-800 text-xl">{ctx.solBalance} SOL</p>
              </div>
            </div>

            <div className="flex items-center my-3 gap-3 mb-5">
              <p className="text-lg">Projected Yield</p>
              <p className="text-orange-700 p-1 px-2 bg-orange-200 rounded-xl text-sm">
                APY 1000 %
              </p>
            </div>

            <p className="text-4xl my-4 text-orange-600">
              ~ 0.00 <span className="text-base text-slate-800">SOL/Year</span>
            </p>

            <Link to="/mine">
              <button className="bg-orange-600 my-3 py-3 px-5 justify-center flex gap-3 items-center w-full text-slate-100 rounded-full">
                Mine More Sol
              </button>
            </Link>

            <p className="flex items-center gap-2 justify-center my-2">
              <BiDiamond className="text-orange-600 text-lg" /> Mine SOL and
              earn rewards
            </p>
          </div>
        )}
      </div>

      {ctx.walletConnected && (
        <div className="bg-slate-100 p-4 py-6 rounded-2xl">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center  gap-2">
              <div className="">
                <div className="p-3 w-[55px] h-[55px] rounded-full bg-slate-200 flex items-center justify-center">
                  <img
                    src="./img/sol.png"
                    alt="sol"
                    className="max-w-full"
                    width={30}
                  />
                </div>
              </div>
              <div className="">
                <h2 className="text-lg">SOL</h2>
                <p className="text-slate-400 text-sm font-medium">Solana</p>
              </div>
            </div>

            <p className="text-slate-400">Not earning yield</p>
          </div>
          <div className="mt-3">
            <Link to="/mine">
              <button className="bg-orange-600 my-3 py-3 px-6 justify-center flex gap-3 items-center text-slate-100 rounded-full">
                Start earning
              </button>
            </Link>

            <p className="flex items-center gap-2 justify-start my-2">
              <BiDiamond className="text-orange-600 text-lg" /> Mine SOL and
              earn rewards
            </p>
          </div>
        </div>
      )}

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
      {/* <h2 className="text-slate-100 text-xl">Your questions, answered</h2> */}
      {/* <Faq /> */}
    </>
  );
};

export default Mining;
