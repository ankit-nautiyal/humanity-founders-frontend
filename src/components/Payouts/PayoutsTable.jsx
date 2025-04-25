"use client";
import React from "react";
import TableRow from "./TableRow";

function PayoutsTable() {
  const payoutData = [
    {
      id: "#P-1048",
      promoterName: "Emery Dokidis",
      points: "500 pts",
      rewardDate: "28-4-2024",
      rewardEarnedFor: "Spring Boost",
      status: "Paid",
    },
    {
      id: "#P-1047",
      promoterName: "Kadin Lipshutz",
      points: "250 pts",
      rewardDate: "27-5-2024",
      rewardEarnedFor: "Summer Referral Program",
      status: "Paid",
    },
    {
      id: "#P-1046",
      promoterName: "Randy Culhane",
      points: "300 pts",
      rewardDate: "29-5-2024",
      rewardEarnedFor: "Early Bird Special",
      status: "Disputed",
    },
    {
      id: "#P-1045",
      promoterName: "Jaxson Vaccaro",
      points: "100 pts",
      rewardDate: "30-6-2024",
      rewardEarnedFor: "Early Bird Special",
      status: "Paid",
    },
    {
      id: "#P-1044",
      promoterName: "Jocelyn Levin",
      points: "200 pts",
      rewardDate: "01-7-2024",
      rewardEarnedFor: "Summer Referral Program",
      status: "Disputed",
    },
    {
      id: "#P-1043",
      promoterName: "Maren Septimus",
      points: "300 pts",
      rewardDate: "03-7-2024",
      rewardEarnedFor: "Summer Referral Program",
      status: "Paid",
    },
    {
      id: "#P-1042",
      promoterName: "Haylie Saris",
      points: "220 pts",
      rewardDate: "05-7-2024",
      rewardEarnedFor: "Spring Boost",
      status: "Paid",
    },
    {
      id: "#P-1041",
      promoterName: "Randy Herwitz",
      points: "400 pts",
      rewardDate: "10-7-2024",
      rewardEarnedFor: "Spring Boost",
      status: "Disputed",
    },
  ];

  return (
    <div className="flex flex-wrap gap-10 items-start py-5 pr-12 pl-4 mt-6 mr-0 w-full text-sm bg-white rounded-lg border border-solid border-stone-300 max-md:max-w-full">
      <table className="w-full">
        <thead>
          <tr className="text-left">
            <th className="font-semibold text-zinc-800 w-[55px]">Payout ID</th>
            <th className="font-semibold text-zinc-800 w-[98px]">
              Promoter Name
            </th>
            <th className="font-semibold text-zinc-800 w-[42px]">Points</th>
            <th className="font-semibold text-zinc-800 w-[77px]">
              Reward Date
            </th>
            <th className="font-semibold text-zinc-800 w-[161px]">
              Reward Earned For
            </th>
            <th className="font-semibold text-zinc-800 w-[90px]">Status</th>
            <th className="font-semibold text-zinc-800 w-[120px]">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {payoutData.map((payout, index) => (
            <TableRow key={payout.id} payout={payout} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PayoutsTable;
