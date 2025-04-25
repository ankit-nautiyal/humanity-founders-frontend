import React from "react";

function ConversionRateCard() {
  return (
    <article className="flex flex-col px-5 py-5 bg-white rounded-xl h-full">
      <header className="flex items-center w-full text-lg font-semibold leading-none text-zinc-900">
        <h3 className="self-stretch my-auto">
          Conversion Success Rate
        </h3>
      </header>
      <hr className="mt-5 w-full border border-solid border-stone-300 min-h-px" />
      <div className="flex gap-10 items-center self-center mt-5 text-xs font-medium text-neutral-500">
        <div className="flex flex-col self-stretch my-auto rounded-none w-[130px]">
          <div className="flex gap-3">
            <span className="flex shrink-0 my-auto w-2.5 h-2.5 rounded-full bg-blue-200"></span>
            <p className="grow shrink w-[106px]">Referrals sent 57%</p>
          </div>
          <div className="flex gap-3 self-start mt-2.5">
            <span className="flex shrink-0 my-auto w-2.5 h-2.5 bg-violet-100 rounded-full"></span>
            <p>Converted 42%</p>
          </div>
        </div>
      </div>
      
      {/* Success Rate Circle */}
      <div className="flex justify-center mt-5">
        <div className="relative flex items-center justify-center w-32 h-32">
          <svg className="absolute" width="128" height="128" viewBox="0 0 128 128">
            <circle
              cx="64"
              cy="64"
              r="56"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="12"
            />
            <circle
              cx="64"
              cy="64"
              r="56"
              fill="none"
              stroke="#4F46E5"
              strokeWidth="12"
              strokeDasharray="352"
              strokeDashoffset="211"
              transform="rotate(-90 64 64)"
            />
          </svg>
          <div className="text-center">
            <span className="text-2xl font-bold text-indigo-600">42%</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ConversionRateCard;
