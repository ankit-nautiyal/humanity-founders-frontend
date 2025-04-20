"use client";
import React, { useState } from "react";
import Divider from "./Divider";
import SocialLoginSection from "./SocialLoginSection";

function CredentialsSection() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mt-8 max-md:max-w-full">
      <div className="w-full max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <div className="flex flex-col w-full whitespace-nowrap rounded-lg max-md:max-w-full">
            <label className="self-start text-base text-zinc-800">Email</label>
            <input
              type="email"
              placeholder="robert.fox@myemail.com"
              className="p-4 mt-1.5 text-lg bg-white rounded-lg border border-solid border-stone-300 text-zinc-400 max-md:pr-5 max-md:max-w-full"
            />
          </div>

          <div className="flex flex-col mt-8 w-full rounded-none max-md:max-w-full">
            <label className="self-start text-base text-zinc-800">
              Password
            </label>
            <div className="flex flex-wrap gap-5 justify-between px-4 py-3.5 mt-1.5 text-lg bg-white rounded-lg border border-solid border-stone-300 text-zinc-400 max-md:max-w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="my-auto bg-transparent border-none outline-none"
              />
              <button onClick={() => setShowPassword(!showPassword)}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/50b0a4dd759d18728d6990ea86fbf5aae4f8d744?placeholderIfAbsent=true"
                  alt="Toggle password visibility"
                  className="object-contain shrink-0 w-6 aspect-square"
                />
              </button>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-wrap gap-10 justify-between items-center mt-4 w-full text-lg max-md:max-w-full">
          <label className="flex gap-2.5 self-stretch my-auto text-neutral-600 w-[151px] cursor-pointer">
            <input type="checkbox" className="w-4 h-4 accent-blue-500" />
            
            <span className="basis-auto">Remember Me</span>
          </label>

          <a href="#" className="self-stretch my-auto text-blue-600">
            Forgot password?
          </a>
        </div> */}

      <div className="flex flex-wrap gap-10 justify-between items-baseline mt-4 w-full text-lg max-md:max-w-full">
        <label className="flex gap-2.5 text-neutral-600 w-[151px] cursor-pointer items-baseline">
          <input type="checkbox" className="w-4 h-4 bo accent-blue-600 rounded-2xl" />
          <span className="basis-auto">Remember Me</span>
        </label>

        <a href="#" className="text-blue-600">Forgot password?</a>
      </div>

      </div>

      <div className="mt-10 w-full max-md:max-w-full">
        <button className="w-full text-lg font-medium text-center text-white whitespace-nowrap bg-indigo-500 rounded-xl max-md:max-w-full">
          <div className="px-16 py-4 rounded-xl border border-indigo-600 border-solid max-md:px-5 max-md:max-w-full">
            Login
          </div>
        </button>

        <div className="flex flex-col justify-center mt-5 w-full max-md:max-w-full">
          <Divider />
          <SocialLoginSection />
        </div>
      </div>
    </div>
  );
}

export default CredentialsSection;
