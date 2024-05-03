import { FaArrowLeft, FaCoins, FaTimes } from "react-icons/fa";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import Modal from "../components/Modal";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useConnection } from "@solana/wallet-adapter-react";

const Mine = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>();
  const [tier, setTier] = useState<"tier1" | "tier2" | "tier3">("tier1");
  const [mineType, setMineType] = useState<"new" | "increase">("new");
  const [whitelisted, setWhitelisted] = useState<boolean>(false);

  const [refAddress, setRefAddress] = useState<string>("");

  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (sessionStorage.getItem("referrer")) {
      setRefAddress(String(sessionStorage.getItem("referrer")));
    }

    if (location.search) {
      const mineType = String(new URLSearchParams(location.search).get("type"));
      if (mineType === "new" || mineType === "increase") {
        setMineType(mineType);
      } else {
        setSearchParams(`${new URLSearchParams({ type: "new" })}`);
        setMineType("new");
      }
    }
  }, []);

  const ctx = useContext(AppContext);
  const connection = useConnection();
  console.log(connection);

  return (
    <>
      <div className="text-slate-100 flex items-center gap-5 text-4xl">
        <Link to={"/"}>
          <FaArrowLeft className="text-slate-400 text-xl cursor-pointer" />
        </Link>{" "}
        <p>Mine</p>
      </div>

      <div className="bg-slate-100 p-4 py-6 rounded-2xl">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-[12%] ">
            <div className="p-3 w-[55px] h-[55px] rounded-full bg-slate-200 flex items-center justify-center">
              <img
                src="../img/sol.png"
                alt="sol"
                className="max-w-full"
                width={30}
              />
            </div>
          </div>
          <div className="w-full">
            <h2 className="text-lg">Solana</h2>
            <p className="text-slate-400 text-sm font-medium">
              Balance: {ctx.solBalance} SOL
            </p>
          </div>
        </div>
        <div className="flex justify-center flex-col">
          {mineType == "increase" && (
            <div className="text-center text-slate-700">
              <p className="text-2xl ">2.8 SOL</p>
              <p className="text-xl">+</p>
            </div>
          )}

          <input
            type="number"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value))}
            id="amount"
            className="bg-transparent max-w-full  py-8 px-2 text-center placeholder:text-center text-4xl outline-none"
            placeholder="0.0 SOL"
            min={0}
          />

          <button
            className="p-2 rounded-lg border border-slate-300 w-fit text-sm font-medium mx-auto"
            onClick={() => setAmount(ctx.solBalance - 0.005)}
          >
            Max
          </button>
        </div>
      </div>

      <div>
        <div className="bg-slate-100 p-4 py-6 rounded-2xl mb-2">
          <div
            className="flex items-center justify-between gap-3 bg-slate-200 hover:bg-slate-300 cursor-pointer p-3 rounded-2xl"
            onClick={() => setModalOpen(true)}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-full mx-auto">
                <img
                  // src={`${
                  //   tier == "tier2"
                  //     ? "./img/bsc.svg"
                  //     : tier == "tier3"
                  //     ? "./img/ethereum.svg"
                  //     : "./img/sol.png"
                  // }`}
                  src="../img/sol.png"
                  alt="sol"
                  className="max-w-full"
                  width={35}
                />
              </div>

              <div className="text-slate-500">
                <p className="text-sm">Preferred Tier</p>
                <p className="text-black">
                  {tier == "tier1"
                    ? "Tier 1"
                    : tier == "tier2"
                    ? "Tier 2"
                    : "Tier 3"}
                </p>
              </div>
            </div>

            <p className="p-1 text-orange-600 bg-slate-100 px-3 rounded-full">
              {tier == "tier2" ? "7.09" : tier == "tier3" ? "20" : "12"} % APY
            </p>
          </div>

          <div className="px-3 my-4">
            <p className="font-semibold">What&apos;s in this product?</p>
            <ul className="my-1">
              <li>- &nbsp; Automated Mine delegation</li>
              <li>- &nbsp; Protected staking rewards</li>
            </ul>
          </div>

          <p className="flex items-center gap-3 bg-slate-200 text-orange-500 p-2 rounded-xl">
            <FaCoins /> Get SOL token and participate in DeFi with 20+
            integrations
          </p>
        </div>

        <div className="bg-slate-100 p-4 rounded-2xl">
          <div>
            <h2 className="my-2 text-slate-800">Referral Address(Optional)</h2>
            <input
              type="text"
              id="referral"
              name="referral"
              className="outline-none mb-4 placeholder-slate-600 placeholder-custom w-full p-3 placeholder-text-right border"
              placeholder="Enter referral address"
              value={refAddress}
              onChange={(e) => setRefAddress(e.target.value)}
            />

            <br />
          </div>

          <div className="my-3 flex justify-end items-center gap-3">
            <label htmlFor="whitelist">
              Stake via whitelist(For whitelisteed users only)
            </label>
            <input
              type="checkbox"
              name="whitelist"
              id="whitelist"
              checked={whitelisted}
              onChange={() => setWhitelisted((whitelisted) => !whitelisted)}
              className="w-5 h-5"
            />
          </div>

          <div className="flex items-center gap-3 justify-between mt-5">
            <p className="text-slate-400">Priority Fee</p>
            <p>0.000000010 SOL</p>
          </div>
        </div>
      </div>

      <button
        className="bg-orange-600 my-3 py-3 px-5 justify-center flex gap-3 items-center w-full text-slate-100 rounded-full mx-auto disabled:bg-slate-400"
        disabled
      >
        Mine
      </button>

      <Modal onClose={() => setModalOpen(false)} open={modalOpen}>
        <div>
          <div className="flex items-center gap-3 justify-between py-3 mb-5 text-xl">
            <p>Delegation</p>

            <FaTimes
              className="cursor-pointer hover:text-slate-700 text-black mr-3"
              onClick={() => setModalOpen(false)}
            />
          </div>

          <div
            className={`bg-slate-200 cursor-pointer p-3 rounded-2xl mb-3 ${
              tier == "tier1" && "border-2 border-orange-300 bg-orange-50"
            }`}
            onClick={() => {
              setTier("tier1");
              setModalOpen(false);
            }}
          >
            <div className="flex items-center justify-between gap-3 ">
              <div className="flex items-center gap-3">
                <div className=" w-12 h-12 flex items-center justify-center rounded-full mx-auto">
                  <img
                    src="./img/sol.png"
                    alt="sol"
                    className="max-w-full"
                    width={35}
                  />
                </div>

                <div className="text-slate-500">
                  <p className="text-sm">Strategy</p>
                  <p className="text-black">Tier 1</p>
                </div>
              </div>

              <p className="p-1 text-orange-600 bg-slate-100 px-3 rounded-full">
                7.60% APY
              </p>
            </div>

            {/* <div className="bg-slate-300 mt-4 rounded-2xl p-3 flex items-center gap-2 text-orange-600 text-sm">
              <FaCoins className="w-10" /> Get SOL token and participate in DeFi
              with 20+ integrations
            </div> */}
          </div>

          <div
            className={`bg-slate-200 cursor-pointer p-3 rounded-2xl mb-3 ${
              tier == "tier2" && "border-2 border-orange-300 bg-orange-50"
            }`}
            onClick={() => {
              setTier("tier2");
              setModalOpen(false);
            }}
          >
            <div className="flex items-center justify-between gap-3 ">
              <div className="flex items-center gap-3">
                <div className=" w-12 h-12 flex items-center justify-center rounded-full mx-auto">
                  <img
                    src="./img/sol.png"
                    alt="sol"
                    className="max-w-full"
                    width={35}
                  />
                </div>

                <div className="text-slate-500">
                  <p className="text-sm">Strategy</p>
                  <p className="text-black">Tier 2</p>
                </div>
              </div>

              <p className="p-1 text-orange-600 bg-slate-100 px-3 rounded-full">
                7.60% APY
              </p>
            </div>

            {/* <div className="bg-slate-300 mt-4 rounded-2xl p-3 flex items-center gap-2 text-orange-600 text-sm">
              <FaCoins className="w-10" /> Get BSC token and participate in DeFi
              with 20+ integrations
            </div> */}
          </div>

          <div
            className={`bg-slate-200 cursor-pointer p-3 rounded-2xl mb-3 ${
              tier == "tier3" && "border-2 border-orange-300 bg-orange-50"
            }`}
            onClick={() => {
              setTier("tier3");
              setModalOpen(false);
            }}
          >
            <div className="flex items-center justify-between gap-3 ">
              <div className="flex items-center gap-3">
                <div className=" w-12 h-12 flex items-center justify-center rounded-full mx-auto">
                  <img
                    src="./img/sol.png"
                    alt="sol"
                    className="max-w-full"
                    width={28}
                  />
                </div>

                <div className="text-slate-500">
                  <p className="text-sm">Strategy</p>
                  <p className="text-black">Tier 3</p>
                </div>
              </div>

              <p className="p-1 text-orange-600 bg-slate-100 px-3 rounded-full">
                7.60% APY
              </p>
            </div>

            {/* <div className="bg-slate-300 mt-4 rounded-2xl p-3 flex items-center gap-2 text-orange-600 text-sm">
              <FaCoins className="w-10" /> Get ETH token and participate in DeFi
              with 20+ integrations
            </div> */}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Mine;
