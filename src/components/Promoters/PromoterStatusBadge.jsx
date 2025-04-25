import React from "react";

function PromoterStatusBadge({ status, className = "" }) {
  let statusStyles = "";

  switch (status) {
    case "Active":
      statusStyles = "text-white bg-blue-500";
      break;
    case "Inactive":
      statusStyles = "text-white bg-orange-400";
      break;
    case "Completed":
      statusStyles = "text-white bg-green-500";
      break;
    default:
      statusStyles = "text-white bg-blue-500";
  }

  return (
    <div
      className={`gap-2.5 self-stretch px-2.5 py-1.5 leading-none whitespace-nowrap rounded-lg ${statusStyles} ${className}`}
    >
      {status}
    </div>
  );
}

export default PromoterStatusBadge;
