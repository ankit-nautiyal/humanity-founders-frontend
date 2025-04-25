import React, { useState } from "react";

function CampaignToggleButtons() {
  const [activeButton, setActiveButton] = useState("campaign");

  const buttons = [
    { id: "campaign", label: "Campaign" },
    { id: "pastPromoters", label: "Past Promoters" },
    { id: "analytics", label: "Analytics" }
  ];

  return (
    <div className="flex items-center gap-2 mt-4 mb-6">
      {buttons.map((button) => (
        <button
          key={button.id}
          className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
            activeButton === button.id 
              ? "text-blue-600 shadow-sm" 
              : "bg-white text-zinc-600 border border-gray-200 hover:bg-gray-50"
          }`}
          style={{
            background: activeButton === button.id ? "#305AFF1A" : "white"
          }}
          onClick={() => setActiveButton(button.id)}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
}

export default CampaignToggleButtons; 