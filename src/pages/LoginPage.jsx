"use client";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import VectorDown from "../assets/Vector-down.svg";
import VectorUp from "../assets/Vector-up.svg";
import CredentialsSection from "../components/CredentialsSection";
import MagicLinkSection from "../components/MagicLinkSection";
import PageTransition from "../components/PageTransition";

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get the redirect path from location state or default to dashboard
  const from = location.state?.from || "/dashboard";

  // Reset login toast flag and redirect to appropriate page
  const handleSuccessfulLogin = () => {
    // Redirect to the intended page or platform setup
    navigate(from);
  };

  return (
    <PageTransition>
      <main className="flex min-h-screen flex-col items-center justify-center px-6 sm:px-10 md:px-20 py-4 bg-slate-100 relative overflow-hidden">
        {/* Vector SVG backgrounds */}
        <div className="absolute top-0 right-0 w-full z-0 pointer-events-none">
          <img src={VectorUp} alt="" className="w-full" />
        </div>
        <div className="absolute bottom-[-100px] left-0 w-full z-0 pointer-events-none">
          <img src={VectorDown} alt="" className="w-full" />
        </div>

        <div className="flex flex-col max-w-full w-full sm:w-[500px] md:w-[650px] z-10 relative">
          <h1 className="self-center text-xl font-semibold text-center text-neutral-600 mb-2">
            Login to ReferralHub
          </h1>

          <section className="flex flex-col px-4 sm:px-8 md:px-12 py-5 mt-4 bg-white rounded-2xl items-center justify-center shadow-[0px_10px_30px_rgba(0,0,0,0.08)]">
            <div className="max-w-[400px] w-full">
              <button className="w-full text-base font-medium text-center text-blue-600 rounded-lg h-[40px] cursor-pointer">
                <div className="flex items-center justify-center px-3 sm:px-5 md:px-8 py-2 rounded-lg border border-blue-600 border-solid cursor-pointer">
                  Continue with Google/Microsoft
                </div>
              </button>

              <MagicLinkSection />
            </div>

            <CredentialsSection  />

            <p className="self-center mt-4 text-sm sm:text-base text-neutral-400">
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