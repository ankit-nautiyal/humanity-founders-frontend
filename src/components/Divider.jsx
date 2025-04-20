import React from "react";

function Divider() {
  return (
    <div className="flex items-center w-full text-sm whitespace-nowrap text-zinc-800 my-1">
      <div className="grow h-px border border-solid bg-zinc-800 border-stone-300" />
      <span className="mx-2">or</span>
      <div className="grow h-px border border-solid bg-zinc-800 border-stone-300" />
    </div>
  );
}

export default Divider;
