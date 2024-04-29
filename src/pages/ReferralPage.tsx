import Referral from "../components/Referral";

const ReferralPage = () => {
  return (
    <div className="bg-slate-100 p-4 py-6 rounded-2xl">
      <div className="flex items-center justify-between mb-2">
        <p className=" text-orange-600 text-lg mb-1">Referral rewards</p>
        <p className="text-slate-800 text-xl">0 SOL</p>
      </div>
      <div className="flex items-center justify-between mb-2">
        <p className=" text-orange-600 text-lg mb-1">Referral count</p>
        <p className="text-slate-800 text-xl">0</p>
      </div>
      <div className="flex justify-end">
        <button className="bg-orange-600 my-3 py-3 px-6 justify-center flex gap-3 items-center text-slate-100 rounded-full">
          Withdraw Referral rewards
        </button>
      </div>

      <Referral address={"shs6sgskshisk"} />
    </div>
  );
};

export default ReferralPage;
