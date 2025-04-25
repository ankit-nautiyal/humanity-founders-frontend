import React from "react";
import PageTransition from "../components/PageTransition";
import ProfileHeader from "../components/ProfileHeader";
import PromotersTable from "../components/Promoters/PromotersTable";
import SearchFilter from "../components/Promoters/SearchFilter";
import Sidebar from "../components/Sidebar";
import StatisticsCard from "../components/Promoters/StatisticsCard";

export default function Promoters() {
  return (
    <PageTransition>
      <div className="flex flex-col md:flex-row bg-[#FAFAFA] min-h-screen">
        <Sidebar />
        <div className="flex-1 p-4 md:p-8 overflow-hidden">
          <ProfileHeader title="Promoters" />
          
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <StatisticsCard
              title="Total Promoters"
              value="128"
              change="+12%"
              positive={true}
              time="from last month"
              icon="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/b4c5dd4ab9acf93e2c32d8e3ba5eb26a2eb76aad?placeholderIfAbsent=true"
            />
            <StatisticsCard
              title="Active Promoters"
              value="48"
              change="+8%"
              positive={true}
              time="from last month"
              icon="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/5dca8294c8b96a6be79fa45713722ace1d0eed38?placeholderIfAbsent=true"
            />
            <StatisticsCard
              title="View Rate"
              value="78.5%"
              change="-5%"
              positive={false}
              time="from last month"
              icon="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/1a1874c39a2f3e3e93da3455f2bcbc6d76e05bdc?placeholderIfAbsent=true"
            />
          </div>
          
          <div className="mt-8 bg-white rounded-xl p-4 md:p-6 shadow-sm overflow-x-auto">
            <SearchFilter />
            <div className="mt-6">
              <PromotersTable />
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
