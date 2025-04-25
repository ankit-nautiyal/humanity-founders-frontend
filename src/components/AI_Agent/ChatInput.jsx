"use client";
import React, { useState } from "react";

function ChatInput() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle message submission logic here
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-between py-3 px-5 mt-6 text-base leading-8 rounded-none border-t bg-neutral-50 border-neutral-200 text-stone-500 max-md:max-w-full"
    >
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask me anything..."
        className="my-auto bg-transparent outline-none flex-grow"
      />
      <button 
        type="submit" 
        className="cursor-pointer transition-opacity duration-200 hover:opacity-70"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/08e3edda312989c5761274de26c4bb69d0176303?placeholderIfAbsent=true"
          className="object-contain shrink-0 aspect-[1.8] w-[72px]"
          alt="Send message"
        />
      </button>
    </form>
  );
}

export default ChatInput;
