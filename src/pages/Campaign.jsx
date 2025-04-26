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
      title: "Referrals for email signups",
      description: "This campaign will enable your promoters to share their referral links with others to sign up for your email marketing list, growing your subscriber base. Promoters earn rewards when someone they refer signs up.",
      reward: 20,
      isActive: true,
      lastUpdated: "3h ago"
    },
    {
      title: "Product purchases",
      description: "Promoters earn a commission for every purchase made through their referral link. This campaign is perfect for encouraging product sales through word-of-mouth marketing.",
      reward: 15,
      isActive: false,
      lastUpdated: "2d ago"
    },
    {
      title: "Community outreach",
      description: "Focused on building your community presence. Promoters get rewards when new users join your community platforms through their referral.",
      reward: 25,
      isActive: true,
      lastUpdated: "1w ago"
    }
  ];

  // Calculate stats for CampaignStats component
  const campaignCount = campaigns.length;
  const activeCount = campaigns.filter(campaign => campaign.isActive).length;

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
                
                <div className="mt-4 bg-white p-6 max-sm:p-4 rounded-xl shadow-sm">
                  <CampaignHeader />
                  <CampaignStats campaignCount={campaignCount} activeCount={activeCount} />
                  
                  <div className="mt-6 grid gap-6 max-md:grid-cols-1">
                    {campaigns.map((campaign, index) => (
                      <CampaignCard
                        key={index}
                        title={campaign.title}
                        description={campaign.description}
                        reward={campaign.reward}
                        isActive={campaign.isActive}
                        lastUpdated={campaign.lastUpdated}
                      />
                    ))}
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
