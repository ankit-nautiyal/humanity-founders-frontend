import React from "react";
import StatusBadge from "./StatusBadge";

function LeadRow({ lead, isFirst }) {
  const { name, email, contact, couponCode, status } = lead;

  return (
    <div className="flex gap-10 items-center w-full">
      <p className={`${isFirst ? "mt-9" : "mt-10"} leading-none w-[108px]`}>
        {name}
      </p>
      <p className={`${isFirst ? "mt-9" : "mt-10"} leading-none w-[170px]`}>
        {email}
      </p>
      <p className={`${isFirst ? "mt-9" : "mt-10"} leading-none w-[99px]`}>
        {contact}
      </p>
      <p className={`${isFirst ? "mt-9" : "mt-10"} leading-none w-24`}>
        {couponCode}
      </p>
      <StatusBadge status={status} isFirst={isFirst} />
    </div>
  );
}

export default LeadRow;
