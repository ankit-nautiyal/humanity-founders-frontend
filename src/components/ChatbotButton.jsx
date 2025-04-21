import React from "react";
import ChatbotIcon from "../assets/Chatbot Icon.svg";

function ChatbotButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300 focus:outline-none"
        aria-label="Open chatbot"
      >
        <img src={ChatbotIcon} alt="Chatbot" className="w-12 h-12" />
      </button>
    </div>
  );
}

export default ChatbotButton; 