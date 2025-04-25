import React from "react";
import PageTransition from "../components/PageTransition";
import PayoutsTable from "../components/Payouts/PayoutsTable";
import StatisticsCards from "../components/Payouts/StatisticsCards";
import TabNavigation from "../components/Payouts/TabNavigation";
import ProfileHeader from "../components/ProfileHeader";
import Sidebar from "../components/Sidebar";

function Payouts() {
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
                
                <div className="mt-6">
                  {/* Main content area */}
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <StatisticsCards />
                    
                    <TabNavigation />
                    <hr className="mt-6 w-full min-h-0 border border-solid border-stone-300" />

                    <section className="flex flex-wrap justify-between items-center mt-6 w-full">
                      <h2 className="text-lg font-semibold text-zinc-900">
                        All Payouts
                      </h2>
                      <div className="flex items-center">
                        <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-md border border-solid border-stone-300 cursor-pointer hover:bg-gray-50 transition-colors">
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/797567846a529b16906eeb784590d6996cf630a5?placeholderIfAbsent=true"
                            className="w-5 h-5"
                            alt="Filter icon"
                          />
                          <span className="text-sm font-medium">Filter</span>
                        </button>
                      </div>
                    </section>

                    <div className="mt-6">
                      <PayoutsTable />
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

export default Payouts; 