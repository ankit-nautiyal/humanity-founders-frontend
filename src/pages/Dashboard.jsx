import React from "react";
import ActivitiesSection from "../components/Dashboard/ActivitiesSection";
import ChannelPerformanceCard from "../components/Dashboard/ChannelPerformanceCard";
import ConversionRateCard from "../components/Dashboard/ConversionRateCard";
import LeaderboardTable from "../components/Dashboard/LeaderboardTable";
import MetricsCard from "../components/Dashboard/MetricsCard";
import PerformanceChart from "../components/Dashboard/PerformanceChart";
import RateCard from "../components/Dashboard/RateCard";
import ReferralFunnel from "../components/Dashboard/ReferralFunnel";
import PageTransition from "../components/PageTransition";
import ProfileHeader from "../components/ProfileHeader";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const metricsData = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/7051bb078ca210791cfd89027b934a34f1deacaa?placeholderIfAbsent=true",
      title: "Total Promoters",
      value: "1,234",
      change: "+12%",
      isPositive: true,
      comparisonText: "vs last month",
      iconChange:
        "https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/56cdd76d19dc6192a142a57e30ad26f0d745959c?placeholderIfAbsent=true",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/9cffd88be9492135fd25d154c335ad0c1524c45b?placeholderIfAbsent=true",
      title: "Conversion rate",
      value: "23.5%",
      change: "-2.4%",
      isPositive: false,
      comparisonText: "vs last month",
      iconChange:
        "https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/6e00168f3aa267d722bc1b5867b23a43acea8630?placeholderIfAbsent=true",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/ffc4ef4749136bd8a779d917197f5e5822958c14?placeholderIfAbsent=true",
      title: "Revenue Generated",
      value: "$12,345",
      change: "+8.7%",
      isPositive: true,
      comparisonText: "vs last month",
      iconChange:
        "https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/56cdd76d19dc6192a142a57e30ad26f0d745959c?placeholderIfAbsent=true",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/26551f640d706311e4553a13b12d880f460ca4cd?placeholderIfAbsent=true",
      title: "Active Campaigns",
      value: "3",
      change: "",
      isPositive: null,
      comparisonText: "",
      iconChange: "",
    },
  ];

  const rateCardsData = [
    {
      title: "Repeat Referral Rate",
      value: "42%",
      color: "text-green-500",
      icon: "https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/d39627b3ac9cfcf1c7524fb7c7989c720de9e65e?placeholderIfAbsent=true",
    },
    {
      title: "Referral Engagement Rate",
      value: "67%",
      color: "text-red-400",
      icon: "https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/3fc604b4e3185029dda19e082105cbe53081dc41?placeholderIfAbsent=true",
    },
    {
      title: "Churn Rate of Leads",
      value: "28%",
      color: "text-blue-500",
      icon: "https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/3fc604b4e3185029dda19e082105cbe53081dc41?placeholderIfAbsent=true",
    },
    {
      title: "Upsell Rate of Leads",
      value: "19%",
      color: "text-fuchsia-700",
      icon: "https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/a8fc5470aad52d0521e66f4dad37c5cb1aa216a6?placeholderIfAbsent=true",
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
                
                <div className="mt-6 space-y-4 pb-6">
                  {/* Metrics Cards Section */}
                  <div className="grid grid-cols-4 gap-4 max-xl:grid-cols-2 max-sm:grid-cols-1">
                    {metricsData.map((metric, index) => (
                      <div key={index} className="p-5 bg-white rounded-xl shadow-sm">
                        <MetricsCard {...metric} />
                      </div>
                    ))}
                  </div>
                  
                  {/* Rate Cards Section */}
                  <div className="grid grid-cols-4 gap-4 max-xl:grid-cols-2 max-sm:grid-cols-1">
                    {rateCardsData.map((card, index) => (
                      <RateCard key={index} {...card} />
                    ))}
                  </div>
                  
                  {/* Chart and Conversion Rate Section */}
                  <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-1">
                    <div className="col-span-2 max-lg:col-span-1">
                      <PerformanceChart />
                    </div>
                    <div className="col-span-1">
                      <ConversionRateCard />
                    </div>
                  </div>
                  
                  {/* Referral Funnel and Channel Performance row */}
                  <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1">
                    <ReferralFunnel />
                    <ChannelPerformanceCard />
                  </div>
                  
                  {/* Leaderboard Table - Responsive container for horizontal scroll on small screens */}
                  <div className="overflow-x-auto">
                    <div className="min-w-[800px]">
                      <LeaderboardTable />
                    </div>
                  </div>
                  
                  {/* Activities Section */}
                  <ActivitiesSection />
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </PageTransition>
  );
}

export default Dashboard;
