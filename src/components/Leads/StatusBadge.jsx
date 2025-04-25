import React from "react";

function StatusBadge({ status, isFirst }) {
  const isCompleted = status === "Completed";

  return (
    <div
      className={`
        gap-2.5 self-stretch px-2.5 py-1.5 ${isFirst ? "mt-7" : "mt-7"}
        leading-none rounded-lg w-[81px] text-center
        ${
          isCompleted
            ? "text-green-500 bg-green-500 bg-opacity-10"
            : "text-orange-300 bg-orange-300 bg-opacity-10"
        }
      `}
    >
      {status}
    </div>
  );
}

export default StatusBadge;
