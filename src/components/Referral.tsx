import React, { useState } from "react";

const Referral: React.FC<{
  address: string | undefined;
  referred: boolean;
  referrer: string;
  setReferrer: (address: string) => void;
}> = (props) => {
  const [copyText, setCopyText] = useState<string>("Copy");

  const referralLink = `http://localhost:5173/?ref=${
    props.address ? props.address : ""
  }`;

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopyText("Copied");
    setTimeout(() => {
      setCopyText("Copy");
    }, 2000);
  };

  return (
    <div className="overflow-hidden">
      <div>
        {!props.referred && (
          <div>
            <h2 className="my-2">Referral Address</h2>
            <input
              type="text"
              id="referral"
              name="referral"
              className="outline-none mb-4 placeholder-slate-600 placeholder-custom w-full p-3 placeholder-text-right border"
              placeholder="Enter referral address"
              value={props.referrer}
              onChange={(e) => props.setReferrer(e.target.value)}
            />

            <br />
          </div>
        )}

        <h2 className="my-2">Referral Link</h2>
        <p className="bg-slate-200 p-3 py-4 rounded-md text-sm text-orange-600 flex items-center justify-between gap-3">
          <span className="break-words overflow-clip">{referralLink}</span>
          <button
            className="p-3 h-full text-slate-600 hover:bg-slate-300 rounded"
            onClick={handleCopyToClipboard}
          >
            {copyText}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Referral;
