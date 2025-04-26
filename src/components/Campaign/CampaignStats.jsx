import React from "react";

function CampaignStats({ campaignCount = 0, activeCount = 0 }) {
  // Ensure we have numbers for the calculations
  const totalCampaigns = Number(campaignCount) || 0;
  const activeCampaigns = Number(activeCount) || 0;
  const inactiveCampaigns = Math.max(0, totalCampaigns - activeCampaigns);
  
  return (
    <div className="flex gap-10 mt-6 mb-4">
      <div className="flex items-center gap-3">
        <span className="text-lg font-semibold text-zinc-900">{totalCampaigns}</span>
        <span className="text-base text-zinc-500">Total Campaigns</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-lg font-semibold text-zinc-900">{activeCampaigns}</span>
        <span className="text-base text-zinc-500">Active</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-lg font-semibold text-zinc-900">{inactiveCampaigns}</span>
        <span className="text-base text-zinc-500">Inactive</span>
      </div>
    </div>
  );
}

export default CampaignStats;
