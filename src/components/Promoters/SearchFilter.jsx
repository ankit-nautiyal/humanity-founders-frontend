import React from "react";

function SearchFilter() {
  return (
    <div className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
      <h2 className="gap-2.5 self-stretch my-auto text-lg font-semibold leading-none whitespace-nowrap text-zinc-900">
        Promoters
      </h2>
      <div className="flex gap-6 items-center self-stretch my-auto min-w-60 max-md:max-w-full">
        <div className="flex gap-5 items-center self-stretch my-auto rounded bg-neutral-100 min-w-60 w-[307px]">
          <div className="flex gap-5 items-center self-stretch py-2 my-auto rounded min-w-60 w-[307px]">
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
                  placeholder="Search"
                  className="flex-1 shrink self-stretch my-auto text-xs whitespace-nowrap basis-0 min-w-60 text-neutral-400 bg-transparent border-none outline-none"
                />
              </div>
            </div>
          </div>
        </div>
        <button className="flex gap-4 items-center self-stretch px-4 py-2 my-auto text-lg whitespace-nowrap bg-white rounded-md border border-solid border-stone-300 text-zinc-800 cursor-pointer hover:bg-gray-50 transition-colors">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/52e17fbea3fcb7bee973497370154c9ee83a0818?placeholderIfAbsent=true"
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            alt="Filter icon"
          />
          <span>Filter</span>
        </button>
      </div>
    </div>
  );
}

export default SearchFilter;
