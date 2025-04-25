import React from "react";

function CampaignStats({ campaignCount, activeCount }) {
  return (
    <div className="flex gap-10 mt-6 mb-4">
      <div className="flex items-center gap-3">
        <span className="text-lg font-semibold text-zinc-900">{campaignCount}</span>
        <span className="text-base text-zinc-500">Total Campaigns</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-lg font-semibold text-zinc-900">{activeCount}</span>
        <span className="text-base text-zinc-500">Active</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-lg font-semibold text-zinc-900">{campaignCount - activeCount}</span>
        <span className="text-base text-zinc-500">Inactive</span>
      </div>
    </div>
  );
}

export default CampaignStats;
