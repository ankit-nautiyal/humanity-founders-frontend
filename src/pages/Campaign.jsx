import React from "react";
import CampaignCard from "../components/Campaign/CampaignCard";
import CampaignHeader from "../components/Campaign/CampaignHeader";
import CampaignStats from "../components/Campaign/CampaignStats";
import CampaignToggleButtons from "../components/Campaign/CampaignToggleButtons";
import PageTransition from "../components/PageTransition";
import ProfileHeader from "../components/ProfileHeader";
import Sidebar from "../components/Sidebar";

function Campaign() {
  const campaigns = [
    {
      title: "Summer Referral Program",
      dateRange: "5/31/2024 - 8/30/2024",
      isActive: true,
      metrics: {
        referrals: 245,
        conversion: "32%",
        roi: "287%",
      },
      recommendation:
        "Increase reward by 10% to boost conversion rates during peak season",
    },
    {
      title: "Early Bird Special",
      dateRange: "8/20/2024 - 9/19/2024",
      isActive: false,
      metrics: {
        referrals: 300,
        conversion: "40%",
        roi: "320%",
      },
      recommendation:
        "Extend your campaign! Strong engagement suggests higher conversions with more time.",
    },
  ];

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen bg-slate-100">
        <main className="flex flex-1 bg-slate-100">
          <div className="flex w-full gap-5 p-4 max-md:flex-col min-h-screen">
            <aside className="w-[17%] max-md:w-full h-full">
              <Sidebar />
            </aside>
            <section className="flex flex-col w-[83%] max-md:w-full">
              <div className="flex flex-col">
                <ProfileHeader />
                <hr className="mt-4 h-px border border-solid border-neutral-200 max-md:max-w-full" />
                
                <CampaignToggleButtons />
                
                <div className="bg-white rounded-xl shadow-sm">
                  <div className="p-6">
                    <CampaignHeader />
                    <CampaignStats campaignCount={2} activeCount={1} />
                    
                    <div className="mt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {campaigns.map((campaign, index) => (
                          <CampaignCard key={index} campaign={campaign} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </PageTransition>
  );
}

export default Campaign;
