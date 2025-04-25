import React from "react";

function CampaignHeader() {
  return (
    <header className="flex flex-wrap gap-5 justify-between self-stretch w-full max-md:max-w-full">
      <button 
        className="flex gap-4 items-center self-start px-4 py-2 text-base font-medium text-white rounded-xl"
        style={{ background: "linear-gradient(90deg, rgba(48, 90, 255, 0.8) 0%, #B5D2FF 100%)" }}
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/f8bfc8ed45f7d32b40e5388b28b9f53da47eb61b?placeholderIfAbsent=true"
          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
          alt="Create campaign icon"
        />
        <span className="self-stretch my-auto">Create New Campaign</span>
      </button>

      <div className="flex gap-5 max-md:max-w-full">
        <div className="flex flex-auto gap-5 items-center py-0.5 bg-white rounded-md border border-solid border-stone-300">
          <div className="flex gap-5 items-center self-stretch py-1 my-auto rounded min-w-60 w-[307px]">
            <div className="flex gap-2 items-center w-full rounded-lg">
              <div className="flex flex-wrap flex-1 shrink gap-4 content-center items-center self-stretch w-full rounded-lg basis-0 min-w-60">
                <div className="flex justify-center items-center self-stretch my-auto w-4 rounded-lg ml-3">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/3182b83634c8c74deb0cb38c2694e5cca0f89fee?placeholderIfAbsent=true"
                    className="object-contain self-stretch my-auto w-4 h-4 aspect-square"
                    alt="Search icon"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Search campaigns..."
                  className="flex-1 shrink self-stretch my-auto text-xs basis-0 min-w-60 text-neutral-400 bg-transparent border-none outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        <button className="flex gap-4 items-center px-4 py-1.5 text-lg whitespace-nowrap bg-white rounded-md border border-solid border-stone-300 text-zinc-800">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/bf28de7bb22b0f893bb3a4ac5e56bc787b85e32f?placeholderIfAbsent=true"
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            alt="Filter icon"
          />
          <span className="self-stretch my-auto">Filter</span>
        </button>
      </div>
    </header>
  );
}

export default CampaignHeader;
