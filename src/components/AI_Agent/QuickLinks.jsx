import React from "react";

function QuickLinks() {
  return (
    <nav className="flex flex-wrap gap-10 items-center mt-5 text-xs font-semibold text-center text-blue-600 max-md:max-w-full">
      <button className="flex gap-2.5 justify-center items-center self-stretch py-3 pr-12 pl-12 my-auto uppercase rounded-xl border border-blue-600 border-solid w-[220px] max-md:px-5 cursor-pointer transition-opacity duration-200 hover:opacity-70">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/d69da4a023a034e9b9de4fc7653c34076aff87fe?placeholderIfAbsent=true"
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          alt="Send referral icon"
        />
        <span className="self-stretch my-auto">Send Referral</span>
      </button>

      <button className="flex gap-2.5 justify-center items-center self-stretch py-3 pr-9 pl-10 my-auto uppercase rounded-xl border border-blue-600 border-solid w-[220px] max-md:px-5 cursor-pointer transition-opacity duration-200 hover:opacity-70">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/c8f24092e1b0c91ff9e474acb11da829a3fd079e?placeholderIfAbsent=true"
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          alt="Create campaign icon"
        />
        <span className="self-stretch my-auto">Create Campaign</span>
      </button>

      <button className="flex gap-2.5 justify-center items-center self-stretch px-12 py-3 my-auto tracking-wide whitespace-nowrap rounded-xl border border-blue-600 border-solid w-[220px] max-md:px-5 cursor-pointer transition-opacity duration-200 hover:opacity-70">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/164d470093f006de1e396603c19aaa6d23bb24b6?placeholderIfAbsent=true"
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          alt="Follow-up icon"
        />
        <span className="self-stretch my-auto">FOLLOW-UP</span>
      </button>

      <button className="flex gap-2.5 justify-center items-center self-stretch px-12 py-3 my-auto tracking-wide rounded-xl border border-blue-600 border-solid w-[220px] max-md:px-5 cursor-pointer transition-opacity duration-200 hover:opacity-70">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/46088f71773c4572c068ec70fd3aa349e4d555a4?placeholderIfAbsent=true"
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          alt="View referral icon"
        />
        <span className="self-stretch my-auto">VIEW REFERRAL</span>
      </button>
    </nav>
  );
}

export default QuickLinks;
