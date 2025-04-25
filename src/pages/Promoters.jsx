import React from "react";
import PageTransition from "../components/PageTransition";
import ProfileHeader from "../components/ProfileHeader";
import PromotersTable from "../components/Promoters/PromotersTable";
import SearchFilter from "../components/Promoters/SearchFilter";
import StatisticsCard from "../components/Promoters/StatisticsCard";
import Sidebar from "../components/Sidebar";

function Promoters() {
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

                <div className="flex gap-4 items-center mt-6 mb-4">
                  <button className="flex gap-2 items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium cursor-pointer hover:bg-blue-700 transition-colors">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/bf28de7bb22b0f893bb3a4ac5e56bc787b85e32f?placeholderIfAbsent=true"
                      className="object-contain w-4 h-4"
                      alt="Plus icon"
                    />
                    <span>New Promoter</span>
                  </button>
                  <button className="flex gap-2 items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg text-sm font-medium cursor-pointer hover:bg-blue-50 transition-colors">
                    <span>Ask Past Customers For Referrals</span>
                  </button>
                </div>

                <div className="bg-white rounded-xl shadow-sm">
                  <div className="p-6">
                    <div className="flex flex-wrap gap-8 items-start bg-white rounded-xl">
                      <StatisticsCard
                        iconSrc="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/7051bb078ca210791cfd89027b934a34f1deacaa?placeholderIfAbsent=true"
                        title="Total Customers"
                        value="8"
                        changePercentage="+12%"
                        isPositive={true}
                      />
                      <div className="shrink-0 w-0 border border-solid border-neutral-200 h-[50px]" />
                      <StatisticsCard
                        iconSrc="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/181dc599d36d0b23f32211c6227f9dc651feeb86?placeholderIfAbsent=true"
                        title="New Customers"
                        value="94"
                        changePercentage="+8%"
                        isPositive={true}
                      />
                      <div className="shrink-0 w-0 border border-solid border-neutral-200 h-[50px]" />
                      <StatisticsCard
                        iconSrc="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/7d8e30aeb4bd8bb7a883489e200abbd348c49e2a?placeholderIfAbsent=true"
                        title="Average Conversion rate"
                        value="64%"
                        changePercentage="-3%"
                        isPositive={false}
                        minWidth="min-w-60"
                      />
                      <div className="shrink-0 w-0 border border-solid border-neutral-200 h-[50px]" />
                      <StatisticsCard
                        iconSrc="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/d9e08a6e169cd4416683adf3ab0aa779d47f829f?placeholderIfAbsent=true"
                        title="Total Revenue Generated"
                        value="$23,900"
                        changePercentage="+15%"
                        isPositive={true}
                        minWidth="min-w-60"
                      />
                    </div>

                    <SearchFilter />

                    <PromotersTable />
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

export default Promoters;
