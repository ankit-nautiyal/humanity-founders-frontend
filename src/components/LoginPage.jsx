"use client";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CredentialsSection from "./CredentialsSection";
import MagicLinkSection from "./MagicLinkSection";

function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-20 py-4 bg-slate-100 max-md:px-5">
      <ToastContainer />
      <div className="flex flex-col max-w-full w-[650px]">
        <h1 className="self-center text-xl font-semibold text-center text-neutral-600">
          Login to ReferralHub
        </h1>

        <section className="flex flex-col px-12 py-5 mt-4 bg-white rounded-2xl max-md:px-5 max-md:mt-3 max-md:max-w-full items-center justify-center">
          <div className="max-w-[400px] w-full max-md:w-full">
            <button className="w-full text-base font-medium text-center text-blue-600 rounded-lg h-[40px]">
              <div className="flex items-center justify-center px-8 py-2 rounded-lg border border-blue-600 border-solid shadow-[0px_4px_10px_rgba(115,103,240,0.25)] max-md:px-5">
                Continue with Google/Microsoft
              </div>
            </button>

            <MagicLinkSection />
          </div>

          <CredentialsSection />

          <p className="self-center mt-4 text-base text-neutral-400 max-md:mt-2">
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
