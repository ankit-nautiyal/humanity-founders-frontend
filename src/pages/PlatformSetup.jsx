"use client";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BusinessProfileForm from "../components/BusinessProfileForm";
import PageTransition from "../components/PageTransition";
import ProfileHeader from "../components/ProfileHeader";
import SetupProgress from "../components/SetupProgress";
import Sidebar from "../components/Sidebar";

function PlatformSetup() {
  useEffect(() => {
 
      // Set flag in localStorage to prevent showing it again
      localStorage.setItem('loginToastShown', 'true');
    
  }, []);

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen bg-slate-100">
        <main className="flex flex-1 bg-slate-100">
          <div className="flex w-full gap-5 p-4 max-md:flex-col min-h-screen">
            <aside className="w-[17%] max-md:w-full h-full">
              <Sidebar />
            </aside>
            <section className="flex flex-col w-[83%] max-md:w-full">
              <div className="flex flex-col">
                <ProfileHeader />
                <hr className="mt-4 h-px border border-solid border-neutral-200 max-md:max-w-full" />
                <div className="py-6 px-6 mt-6 bg-white rounded-2xl shadow-sm">
                  <div className="flex gap-5 max-md:flex-col">
                    <div className="w-[36%] max-md:w-full">
                      <SetupProgress />
                    </div>
                    <div className="w-[64%] max-md:w-full">
                      <BusinessProfileForm />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </PageTransition>
  );
}

export default PlatformSetup; 