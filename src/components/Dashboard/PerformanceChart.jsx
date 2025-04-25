"use client";
import React from "react";

function PerformanceChart() {
  return (
    <section className="p-5 bg-white rounded-xl h-full">
      <header className="flex flex-wrap justify-between items-center w-full">
        <h2 className="text-lg font-semibold leading-none text-zinc-900">
          Promoter Performance Over Time
        </h2>
        <div className="flex items-center text-sm font-medium leading-none text-neutral-400">
          <button className="flex gap-2.5 items-center px-2.5 py-2 bg-white rounded-md border border-solid border-zinc-300">
            <span>Last 6 months</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/2563879319d0b3a122cfac4dcaae40ea17d647a2?placeholderIfAbsent=true"
              className="w-6 aspect-square"
              alt="Dropdown icon"
            />
          </button>
        </div>
      </header>

      <div className="mt-5 w-full">
        <div>
          <div className="flex gap-5">
            <div className="w-6/12">
              <div className="text-xs font-medium text-center whitespace-nowrap text-neutral-400">
                <div className="flex items-center">
                  <p>50%</p>
                  <div className="h-px border border-gray-200 border-dashed w-full ml-4" />
                </div>
                <div className="flex items-center mt-12">
                  <p>40%</p>
                  <div className="h-px border border-gray-200 border-dashed w-full ml-4" />
                </div>
                <p className="mt-12">30%</p>
                <p className="mt-12">20%</p>
                <p className="mt-12">10%</p>
                <div className="flex items-center mt-12">
                  <p>0%</p>
                  <div className="h-px border border-solid border-zinc-300 w-full ml-4" />
                </div>
              </div>
            </div>
            <div className="w-6/12">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/456147b31fb566e59b6850b72bf84b6018b63012?placeholderIfAbsent=true"
                className="object-contain mt-10 w-full aspect-[1.98]"
                alt="Performance chart"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-10 items-center justify-center mt-2.5 text-xs font-medium text-center text-neutral-400">
          <p className="w-[60px]">Jan</p>
          <p className="w-[60px]">Feb</p>
          <p className="w-[60px]">Mar</p>
          <p className="w-[60px]">Apr</p>
          <p className="w-[60px]">May</p>
          <p className="w-[60px]">Jun</p>
        </div>
      </div>
    </section>
  );
}

export default PerformanceChart;
