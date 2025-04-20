import React from "react";

function Divider() {
  return (
    <div className="flex flex-wrap gap-4 items-center w-full text-base whitespace-nowrap text-zinc-800 max-md:max-w-full">
      <div className="grow shrink self-stretch my-auto h-px border border-solid bg-zinc-800 border-stone-300 w-[220px]" />
      <span className="self-stretch my-auto">or</span>
      <div className="grow shrink self-stretch my-auto h-px border border-solid bg-zinc-800 border-stone-300 w-[220px]" />
    </div>
  );
}

export default Divider;
