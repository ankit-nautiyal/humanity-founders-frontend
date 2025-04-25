import React from "react";
import TabNavigation from "../components/Payouts/TabNavigation";
import PayoutsTable from "../components/Payouts/PayoutsTable";
import StatisticsCards from "../components/Payouts/StatisticsCards";

function PayoutsPage() {
  return (
    <div className="flex pr-20 text-lg rounded-none max-md:pr-5">
      <div className="flex flex-col grow shrink-0 px-5 py-5 mt-52 mr-0 bg-white rounded-xl basis-0 w-fit max-md:px-5 max-md:max-w-full">
        <TabNavigation />
        <hr className="mt-6 max-w-full min-h-0 border border-solid border-stone-300 w-[1058px]" />

        <section className="flex flex-wrap gap-10 justify-between items-center mt-6 w-full max-md:max-w-full">
          <h1 className="gap-2.5 self-stretch my-auto font-semibold leading-none text-zinc-900">
            All Payouts
          </h1>
          <div className="flex gap-6 items-center self-stretch my-auto whitespace-nowrap text-zinc-800">
            <button className="flex gap-4 items-center self-stretch py-2 pr-4 my-auto ml-9 bg-white rounded-md border border-solid border-stone-300">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/797567846a529b16906eeb784590d6996cf630a5?placeholderIfAbsent=true"
                className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                alt="Filter icon"
              />
              <span className="self-stretch my-auto">Filter</span>
            </button>
          </div>
        </section>

        <PayoutsTable />
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/436657eb8fed0d9289f473a303fa8366adb4dec5?placeholderIfAbsent=true"
        className="object-contain shrink-0 self-start mt-64 aspect-[2.64] w-[87px] max-md:mt-10"
        alt="Decorative element"
      />

      <StatisticsCards />
    </div>
  );
}

export default PayoutsPage;
