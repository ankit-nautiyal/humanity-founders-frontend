import React from "react";
import eyeIcon from "../../assets/eye-icon.png";
import StatusBadge from "./StatusBadge";

function TableRow({ payout }) {
  const {
    id,
    promoterName,
    points,
    rewardDate,
    rewardEarnedFor,
    status,
  } = payout;

  const isDisputed = status === "Disputed";
  const actionText = isDisputed ? "Track Dispute" : "Request Dispute";

  return (
    <tr className="text-stone-500">
      <td className="pt-9 pb-4 leading-none max-md:mr-1">{id}</td>
      <td className="pt-9 pb-4 leading-none max-md:mr-2 max-md:ml-1.5">
        {promoterName}
      </td>
      <td className="pt-9 pb-4 leading-none">{points}</td>
      <td className="pt-9 pb-4 leading-none max-md:mx-2">{rewardDate}</td>
      <td className="pt-9 pb-4 leading-none">{rewardEarnedFor}</td>
      <td className="pt-7 pb-4 pr-8">
        <StatusBadge status={status} />
      </td>
      <td className="pt-8 pb-4">
        <div className="flex items-center w-full">
          <div className="flex justify-center w-[35px]">
            <img
              src={eyeIcon}
              className="object-contain w-5 h-5 cursor-default"
              alt="View details"
            />
          </div>
          <div className="mx-2 text-zinc-300">|</div>
          <button className="text-blue-600 hover:text-blue-700 transition-colors">
            {actionText}
          </button>
        </div>
      </td>
    </tr>
  );
}

export default TableRow;
