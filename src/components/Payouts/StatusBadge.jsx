import React from "react";

function StatusBadge({ status }) {
  const isPaid = status === "Paid";
  const isDisputed = status === "Disputed";

  const baseClasses =
    "gap-2.5 px-2.5 py-1.5 leading-none rounded-lg text-white text-center w-full";

  const statusClasses = isPaid
    ? "bg-green-500"
    : isDisputed
      ? "bg-orange-400"
      : "";

  return <div className={`${baseClasses} ${statusClasses}`}>{status}</div>;
}

export default StatusBadge;
