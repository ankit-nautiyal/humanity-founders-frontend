import React from "react";
import PageTransition from "../components/PageTransition";
import ProfileHeader from "../components/ProfileHeader";
import PromotersTable from "../components/Promoters/PromotersTable";
import SearchFilter from "../components/Promoters/SearchFilter";
import StatisticsCard from "../components/Promoters/StatisticsCard";
import Sidebar from "../components/Sidebar";

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
              changePercentage="+12%"
              isPositive={true}
              iconSrc="https://cdn-icons-png.flaticon.com/512/681/681494.png"
            />
            <StatisticsCard
              title="Active Promoters"
              value="48"
              changePercentage="+8%"
              isPositive={true}
              iconSrc="https://cdn-icons-png.flaticon.com/512/3126/3126647.png"
            />
            <StatisticsCard
              title="View Rate"
              value="78.5%"
              changePercentage="-5%"
              isPositive={false}
              iconSrc="https://cdn-icons-png.flaticon.com/512/709/709612.png"
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
