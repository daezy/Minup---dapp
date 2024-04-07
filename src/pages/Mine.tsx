import { FaArrowLeft, FaCoins, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Mine = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>();
  const [tier, setTier] = useState<"tier1" | "tier2" | "tier3">("tier1");

  const ctx = useContext(AppContext);

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
                src="./img/sol.png"
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
                  src={`${
                    tier == "tier2" ? "./img/black.svg" : "./img/sol.png"
                  }`}
                  alt="sol"
                  className="max-w-full"
                  width={35}
                />
              </div>

              <div className="text-slate-500">
                <p className="text-sm">Strategy</p>
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
              7.60% APY
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
            <FaCoins /> Get mSOL token and participate in DeFi with 20+
            integrations
          </p>
        </div>

        <div className="bg-slate-100 p-4 rounded-2xl">
          <div className="flex items-center gap-3 justify-between">
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

            <div className="bg-slate-300 mt-4 rounded-2xl p-3 flex items-center gap-2 text-orange-600 text-sm">
              <FaCoins className="w-10" /> Get mSOL token and participate in
              DeFi with 20+ integrations
            </div>
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
                    src="./img/black.svg"
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

            <div className="bg-slate-300 mt-4 rounded-2xl p-3 flex items-center gap-2 text-orange-600 text-sm">
              <FaCoins className="w-10" /> Get mSOL token and participate in
              DeFi with 20+ integrations
            </div>
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
                    width={35}
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

            <div className="bg-slate-300 mt-4 rounded-2xl p-3 flex items-center gap-2 text-orange-600 text-sm">
              <FaCoins className="w-10" /> Get mSOL token and participate in
              DeFi with 20+ integrations
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Mine;
