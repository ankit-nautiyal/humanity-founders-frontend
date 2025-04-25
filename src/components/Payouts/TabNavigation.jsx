import React, { useState } from "react";

function TabNavigation() {
  const [activeTab, setActiveTab] = useState("allPayouts");

  return (
    <nav className="flex flex-wrap items-start self-start text-stone-500 max-md:max-w-full">
      <button 
        className={`gap-2.5 self-stretch px-12 py-3.5 font-medium rounded-md w-[200px] max-md:px-5 
          ${activeTab === "allPayouts" 
            ? "text-blue-600" 
            : "text-zinc-600 bg-white hover:bg-gray-50"}`}
        style={activeTab === "allPayouts" ? { background: "#305AFF1A" } : {}}
        onClick={() => setActiveTab("allPayouts")}
      >
        All Payouts
      </button>
      <button 
        className={`gap-2.5 self-stretch px-12 py-3.5 font-medium rounded-md w-[200px] max-md:px-5
          ${activeTab === "disputes" 
            ? "text-blue-600" 
            : "text-zinc-600 bg-white hover:bg-gray-50"}`}
        style={activeTab === "disputes" ? { background: "#305AFF1A" } : {}}
        onClick={() => setActiveTab("disputes")}
      >
        Disputes
      </button>
      <button 
        className={`gap-2.5 self-stretch px-12 py-3.5 font-medium rounded-md w-[200px] max-md:px-5
          ${activeTab === "settings" 
            ? "text-blue-600" 
            : "text-zinc-600 bg-white hover:bg-gray-50"}`}
        style={activeTab === "settings" ? { background: "#305AFF1A" } : {}}
        onClick={() => setActiveTab("settings")}
      >
        Payout Settings
      </button>
    </nav>
  );
}

export default TabNavigation;
