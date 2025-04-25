import React from "react";
import AiRecommendation from "./AiRecommendation";

function CampaignCard({ campaign }) {
  const { title, dateRange, isActive, metrics, recommendation } = campaign;

  return (
    <article className="p-5 mx-auto w-full rounded-2xl bg-zinc-50 max-md:mt-6">
      <header className="flex gap-8 items-start pb-5 w-full border-b border-zinc-300">
        <div className="min-w-60 w-[251px]">
          <h2 className="text-lg font-semibold text-zinc-800">{title}</h2>
          <time className="mt-3 text-base font-medium text-zinc-500">
            {dateRange}
          </time>
        </div>
        <span
          style={{ background: isActive ? "#4184E91A" : "#F3F3F3" }}
          className={`inline-block px-2 py-0.5 text-xs leading-tight whitespace-nowrap rounded-lg ${
            isActive
              ? "text-blue-500"
              : "text-neutral-400"
          }`}
        >
          {isActive ? "Active" : "Inactive"}
        </span>
      </header>

      <div className="flex gap-10 items-center mt-8 whitespace-nowrap">
        <div className="flex flex-col items-center self-stretch my-auto">
          <p className="text-base font-medium text-zinc-500">Referrals</p>
          <p className="mt-1.5 text-2xl font-semibold text-center text-zinc-800">
            {metrics.referrals}
          </p>
        </div>
        <div className="flex flex-col items-center self-stretch my-auto">
          <p className="text-base font-medium text-zinc-500">Conversion</p>
          <p className="mt-1.5 text-2xl font-semibold text-center text-zinc-800">
            {metrics.conversion}
          </p>
        </div>
        <div className="flex flex-col self-stretch my-auto w-[60px]">
          <p className="text-base font-medium text-center text-zinc-500">ROI</p>
          <p className="self-center mt-1.5 text-2xl font-semibold text-zinc-800">
            {metrics.roi}
          </p>
        </div>
      </div>

      <AiRecommendation text={recommendation} />

      <div className="flex gap-10 justify-between items-start mt-8 w-full max-w-[343px]">
        <button className="flex gap-6 items-center w-6">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/6a65409d654970c18e791c4f44eb158cb7951be8?placeholderIfAbsent=true"
            className="object-contain self-stretch my-auto w-6 aspect-square"
            alt="Edit icon"
          />
        </button>
        <button>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/15351fa4142869ab40f38e92908a2c28efa8aade?placeholderIfAbsent=true"
            className="object-contain shrink-0 w-6 aspect-square"
            alt="More options icon"
          />
        </button>
      </div>
    </article>
  );
}

export default CampaignCard;
