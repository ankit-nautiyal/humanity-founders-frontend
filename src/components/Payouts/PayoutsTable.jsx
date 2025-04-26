"use client";
import React, { useEffect, useState } from "react";
import eyeIcon from "../../assets/eye-icon.png";
import TableRow from "./TableRow";

function PayoutsTable() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

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

  // Mobile card view for payouts
  const renderMobileView = () => {
    return (
      <div className="w-full">
        {payoutData.map((payout, index) => (
          <div key={payout.id} className="bg-white rounded-lg p-4 mb-4 border border-gray-200 shadow-sm">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-medium text-sm">{payout.promoterName}</h3>
                <p className="text-xs text-gray-500">{payout.id}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className={`px-2.5 py-1 text-xs rounded-lg text-white ${
                  payout.status === "Paid" 
                    ? "bg-green-500" 
                    : "bg-orange-400"
                }`}>
                  {payout.status}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="text-xs">
                <span className="text-gray-500">Points:</span>
                <span className="ml-1 font-medium">{payout.points}</span>
              </div>
              <div className="text-xs">
                <span className="text-gray-500">Date:</span>
                <span className="ml-1 font-medium">{payout.rewardDate}</span>
              </div>
              <div className="text-xs col-span-2">
                <span className="text-gray-500">Earned For:</span>
                <span className="ml-1 font-medium">{payout.rewardEarnedFor}</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-3 pt-3 border-t">
              <button className="text-blue-600 text-xs hover:text-blue-700 transition-colors">
                {payout.status === "Disputed" ? "Track Dispute" : "Request Dispute"}
              </button>
              <img
                src={eyeIcon}
                className="object-contain w-5 h-5 cursor-pointer"
                alt="View details"
              />
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-wrap gap-10 items-start py-5 px-4 mt-6 w-full text-sm bg-white rounded-lg border border-solid border-stone-300 max-md:max-w-full overflow-x-auto">
      {isMobile ? (
        renderMobileView()
      ) : (
        <table className="w-full min-w-[650px]">
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
      )}
    </div>
  );
}

export default PayoutsTable;
