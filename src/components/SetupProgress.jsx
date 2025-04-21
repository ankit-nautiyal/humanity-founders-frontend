import React, { useState } from "react";

function SetupProgress() {
  const [selectedStep, setSelectedStep] = useState(0); // First step is active by default

  const setupSteps = [
    {
      title: "Set Up Business Profile",
      status: "In Progress",
      icon: (active) => (
        <div className={`flex items-center justify-center w-12 h-12 rounded-full ${active ? 'bg-blue-600 text-white' : 'bg-white border-2 border-gray-300 text-gray-400'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      ),
    },
    {
      title: "Sync Your Customer Data",
      status: "Not Started",
      icon: (active) => (
        <div className={`flex items-center justify-center w-12 h-12 rounded-full ${active ? 'bg-blue-600 text-white' : 'bg-white border-2 border-gray-300 text-gray-400'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
          </svg>
        </div>
      ),
    },
    {
      title: "Set Up AI Agent Rules",
      status: "Not Started",
      icon: (active) => (
        <div className={`flex items-center justify-center w-12 h-12 rounded-full ${active ? 'bg-blue-600 text-white' : 'bg-white border-2 border-gray-300 text-gray-400'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
      ),
    },
    {
      title: "Set Up First Campaign",
      status: "Not Started",
      icon: (active) => (
        <div className={`flex items-center justify-center w-12 h-12 rounded-full ${active ? 'bg-blue-600 text-white' : 'bg-white border-2 border-gray-300 text-gray-400'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
          </svg>
        </div>
      ),
    },
  ];

  const handleStepClick = (index) => {
    setSelectedStep(index);
  };

  return (
    <section className="overflow-hidden px-8 pt-8 pb-20 w-full font-medium rounded-lg bg-slate-50 max-md:px-5 max-md:mt-10">
      <div className="pb-8 border-b border-stone-300">
        <h2 className="text-lg text-blue-600">Get Started with ReferralHub </h2>
        <p className="mt-3 text-sm text-stone-500">
          To get started with better referrals & rewards, complete your account
          setup in a few easy steps.
        </p>
      </div>
      <ul className="flex flex-col items-start mt-10 max-w-full w-full">
        {setupSteps.map((step, index) => (
          <li
            key={index}
            className={`flex gap-4 items-center ${index > 0 ? "mt-6" : ""} w-full cursor-pointer`}
            onClick={() => handleStepClick(index)}
          >
            {step.icon(selectedStep === index)}
            <div className="flex flex-col">
              <h3 className={`text-base ${selectedStep === index ? 'text-blue-600 font-semibold' : 'text-black'}`}>
                {step.title}
              </h3>
              <p className={`mt-1 text-sm ${selectedStep === index ? 'text-blue-400' : 'text-zinc-500'}`}>
                {index === selectedStep && index === 0 ? "In Progress" : step.status}
              </p>
            </div>
            {selectedStep === index && (
              <div className="ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SetupProgress;
