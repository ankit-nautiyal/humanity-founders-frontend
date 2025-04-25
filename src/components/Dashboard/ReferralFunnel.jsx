import React from "react";

function ReferralFunnel() {
  // Data for the funnel stages
  const funnelData = [
    { stage: "Referrals Sent", value: 285, percentage: "100%" },
    { stage: "Clicked", value: 197, percentage: "69%" },
    { stage: "Signed Up", value: 154, percentage: "54%" },
    { stage: "Converted", value: 89, percentage: "31%" },
  ];

  return (
    <section className="px-5 py-5 bg-white rounded-xl">
      <header className="flex gap-6 items-center w-full text-lg font-semibold leading-none text-zinc-900">
        <h2 className="self-stretch my-auto">Referral Funnel</h2>
      </header>
      
      <div className="mt-6 w-full">
        {funnelData.map((stage, index) => (
          <div key={index} className="mb-5">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-zinc-800">{stage.stage}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-zinc-900">{stage.value}</span>
                <span className="text-xs text-neutral-500">({stage.percentage})</span>
              </div>
            </div>
            
            {/* Funnel bar with gradient */}
            <div className="h-8 bg-gray-100 rounded-md overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-indigo-600"
                style={{ 
                  width: stage.percentage,
                  // Funnel shape effect with decreasing width and height
                  height: `${100 - index * 5}%`,
                  marginTop: `${index * 2}px`,
                  borderRadius: "4px"
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-sm text-center text-neutral-500">
        <p>31% overall conversion rate from sent referrals to customers</p>
      </div>
    </section>
  );
}

export default ReferralFunnel; 