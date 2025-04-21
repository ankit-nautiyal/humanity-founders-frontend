"use client";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VectorDown from "../assets/Vector-down.svg";
import VectorUp from "../assets/Vector-up.svg";
import CredentialsSection from "../components/CredentialsSection";
import MagicLinkSection from "../components/MagicLinkSection";
import PageTransition from "../components/PageTransition";

function LoginPage() {
  const navigate = useNavigate();

  // Immediate redirect without toast
  const handleSuccessfulLogin = () => {
    navigate('/platform-setup');
  };

  return (
    <PageTransition>
      <main className="flex min-h-screen flex-col items-center justify-center px-20 py-4 bg-slate-100 max-md:px-5 relative overflow-hidden">
        {/* Vector SVG backgrounds */}
        <div className="absolute top-0 right-0 w-full z-0 pointer-events-none">
          <img src={VectorUp} alt="" className="w-full" />
        </div>
        <div className="absolute bottom-[-100px] left-0 w-full z-0 pointer-events-none">
          <img src={VectorDown} alt="" className="w-full" />
        </div>

        <ToastContainer />
        <div className="flex flex-col max-w-full w-[650px] z-10 relative">
          <h1 className="self-center text-xl font-semibold text-center text-neutral-600 mb-2">
            Login to ReferralHub
          </h1>

          <section className="flex flex-col px-12 py-5 mt-4 bg-white rounded-2xl max-md:px-5 max-md:mt-3 max-md:max-w-full items-center justify-center shadow-[0px_10px_30px_rgba(0,0,0,0.08)]">
            <div className="max-w-[400px] w-full max-md:w-full">
              <button className="w-full text-base font-medium text-center text-blue-600 rounded-lg h-[40px] cursor-pointer">
                <div className="flex items-center justify-center px-8 py-2 rounded-lg border border-blue-600 border-solid max-md:px-5 cursor-pointer">
                  Continue with Google/Microsoft
                </div>
              </button>

              <MagicLinkSection />
            </div>

            <CredentialsSection onSuccessfulLogin={handleSuccessfulLogin} />

            <p className="self-center mt-4 text-base text-neutral-400 max-md:mt-2">
              Don't have an account?{" "}
              <Link to="/" className="text-[rgba(48,90,255,1)] hover:underline transition-all">
                Register now
              </Link>
            </p>
          </section>
        </div>
      </main>
    </PageTransition>
  );
}

export default LoginPage; 