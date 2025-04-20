"use client";
import React from "react";
import MagicLinkSection from "./MagicLinkSection";
import CredentialsSection from "./CredentialsSection";
import SocialLoginSection from "./SocialLoginSection";

function LoginPage() {
  return (
    <main className="flex overflow-hidden flex-col items-center px-20 pt-32 pb-16 bg-slate-100 max-md:px-5 max-md:pt-24">
      <div className="flex flex-col max-w-full w-[695px]">
        <h1 className="self-center text-2xl font-semibold text-center text-neutral-600">
          Login to ReferralHub
        </h1>

        <section className="flex flex-col px-16 py-14 mt-11 bg-white rounded-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full items-center justify-center">
          <div className="max-md:max-w-full ">
            <button className="max-w-full text-lg font-medium text-center text-blue-600 rounded-lg w-[495px] h-[50px] ">
              <div className="self-stretch px-12 py-4 rounded-lg border border-blue-600 border-solid grow-0 shadow-[0px_4px_10px_rgba(115,103,240,0.25)] max-md:px-5 max-md:max-w-full">
                Continue with Google/Microsoft
              </div>
            </button>

            <MagicLinkSection />
          </div>

          <CredentialsSection />

          <p className="self-center mt-12 text-lg text-neutral-400 max-md:mt-10">
            Don't have an account?{" "}
            <a href="#" className="text-[rgba(48,90,255,1)]">
              Register now
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}

export default LoginPage;
