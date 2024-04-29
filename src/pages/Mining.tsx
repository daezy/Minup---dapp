import { FaCoins } from "react-icons/fa";
import Intro from "../components/Intro";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { BiDiamond } from "react-icons/bi";
import Referral from "../components/Referral";
import Strategies from "../components/Strategies";

const Mining = () => {
  const [refAddress, setRefAddress] = useState<string>("");
  const [userDataExists, setUserDataExists] = useState<boolean>(true);
  const [userTier, setUserTier] = useState<string>("");
  const ctx = useContext(AppContext);
  const location = useLocation();

  const handleReferralAddress = (address: string) => {
    setRefAddress(address);
  };

  useEffect(() => {
    const userData = "";
    if (!userData) {
      ctx.setError("Create a stake to proceed");
    }
  }, []);

  useEffect(() => {
    if (location.search) {
      const referrer = String(new URLSearchParams(location.search).get("ref"));
      setRefAddress(referrer);
      sessionStorage.setItem("referrer", referrer);
    }
  }, []);

  return (
    <>
      {!ctx.walletConnected ? (
        <div className="bg-slate-100 p-4 py-10 rounded-2xl">
          <Intro />
        </div>
      ) : userDataExists ? (
        <div className="bg-slate-100 p-4 py-10 rounded-2xl">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link
                to={`/app/mine?${new URLSearchParams({ type: "increase" })}`}
              >
                <button className="bg-orange-600 my-3 py-3 px-5 justify-center flex gap-3 items-center w-full text-slate-100 rounded-full">
                  Mine More Sol
                </button>
              </Link>

              {/* <hr /> */}
              <button className="bg-orange-600 my-3 py-3 px-5 justify-center flex gap-3 items-center w-full text-slate-100 rounded-full disabled:bg-slate-300 disabled:text-slate-500">
                Withdraw Sol
              </button>
            </div>

            <p className="flex items-center gap-2 justify-center my-2">
              <BiDiamond className="text-orange-600 text-lg" /> Mine SOL and
              earn rewards
            </p>
          </div>
        </div>
      ) : (
        <></>
      )}

      {ctx.walletConnected && (
        <>
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

              <p className="text-slate-400">
                {userDataExists ? "rewards SOL" : "Not earning yield"}
              </p>
            </div>
            <div className="mt-3">
              {userDataExists ? (
                // true if userdata exists and false if it doesnt exist
                <div className="flex items-center justify-between gap-3">
                  <Link to="/mine">
                    <button className="bg-orange-600 my-3 py-3 px-5 justify-center flex gap-3 items-center text-slate-100 rounded-full md:w-40">
                      Re-mine
                    </button>
                  </Link>

                  <button className="bg-orange-600 my-3 py-3 px-5 justify-center flex gap-3 items-center text-slate-100 rounded-full md:w-40">
                    Claim Rewards
                  </button>
                </div>
              ) : (
                <Link to="/app/mine?type=new" className="w-fit">
                  <button className="bg-orange-600 my-3 py-3 px-6 justify-center flex gap-3 items-center text-slate-100 rounded-full">
                    Start earning
                  </button>
                </Link>
              )}

              <p className="flex items-center gap-2 justify-start my-2">
                <BiDiamond className="text-orange-600 text-lg" /> Mine SOL and
                earn rewards
              </p>
            </div>
          </div>
        </>
      )}

      <Strategies />
      {/* <h2 className="text-slate-100 text-xl">Your questions, answered</h2> */}
      {/* <Faq /> */}
    </>
  );
};

export default Mining;
