"use client";
import React from "react";
import Divider from "./Divider";

function MagicLinkSection() {
  return (
    <div className="mt-9 w-full max-md:max-w-full">
      <div className="w-full max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <div className="flex flex-col w-full rounded-lg max-md:max-w-full">
            <label className="self-start text-base text-zinc-800">
              Magic Link Login
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-4 mt-1.5 text-lg bg-white rounded-lg border border-solid border-stone-300 text-zinc-400 max-md:pr-5 max-md:max-w-full"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 w-full max-md:max-w-full">
        <button className="w-full text-lg font-medium text-center text-white rounded-xl max-md:max-w-full">
          <div className="px-16 py-4 bg-indigo-500 rounded-xl max-md:px-5 max-md:max-w-full">
            Send Magic Link
          </div>
        </button>

        <Divider />
      </div>
    </div>
  );
}

export default MagicLinkSection;
