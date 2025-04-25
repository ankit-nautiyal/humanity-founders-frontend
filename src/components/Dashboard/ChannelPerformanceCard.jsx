import React from "react";

function ChannelPerformanceCard() {
  return (
    <article className="flex flex-col px-5 py-5 bg-white rounded-xl">
      <header className="flex gap-6 items-center w-full text-lg font-semibold leading-none text-zinc-900">
        <h3 className="self-stretch my-auto">Top Performing Channel</h3>
      </header>
      <div className="flex gap-4 items-center self-end mt-8 whitespace-nowrap">
        <div className="self-stretch py-2 my-auto w-28 text-center rounded-md bg-red-200 bg-opacity-60">
          <h4 className="text-xs font-medium leading-loose text-zinc-800">
            Facebook
          </h4>
          <p className="mt-2.5 text-xl font-semibold text-zinc-900">78%</p>
        </div>
        <div className="self-stretch py-2 my-auto w-28 text-center rounded-md bg-pink-200 bg-opacity-60">
          <h4 className="text-xs font-medium leading-loose text-zinc-800">
            Twitter
          </h4>
          <p className="mt-2.5 text-xl font-semibold text-zinc-900">45%</p>
        </div>
        <div className="flex flex-col self-stretch py-2 my-auto w-28 rounded-md bg-blue-100 bg-opacity-60">
          <h4 className="text-xs font-medium leading-loose text-center text-zinc-800">
            LinkedIn
          </h4>
          <p className="self-center mt-2.5 text-xl font-semibold text-right text-zinc-900">
            23%
          </p>
        </div>
      </div>
    </article>
  );
}

export default ChannelPerformanceCard;
