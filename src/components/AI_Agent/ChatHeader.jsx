import React from "react";

function ChatHeader() {
  return (
    <header className="flex flex-wrap gap-5 justify-between w-full text-zinc-900 max-md:max-w-full">
      <div className="flex gap-4 items-center text-2xl font-medium">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/e8206164333bb612e4d155d0f28c4eb30327b4da?placeholderIfAbsent=true"
          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
          alt="AI Agent icon"
        />
        <h1 className="self-stretch my-auto">AI Agent</h1>
      </div>
      <button className="flex gap-4 items-center self-start text-lg whitespace-nowrap cursor-pointer transition-opacity duration-200 hover:opacity-70">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/5b23728e527226c543ccc87eca56a4d314019653?placeholderIfAbsent=true"
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          alt="Reset icon"
        />
        <span className="self-stretch my-auto">Reset</span>
      </button>
    </header>
  );
}

export default ChatHeader;
