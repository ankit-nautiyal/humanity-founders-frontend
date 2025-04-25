import React from "react";

function ChatMessage({ isAI, avatarSrc, message }) {
  if (isAI) {
    return (
      <div className="flex flex-wrap gap-2.5 items-start self-start">
        <img
          src={avatarSrc}
          className="object-contain shrink-0 w-10 aspect-square"
          alt="AI avatar"
        />
        <p 
          className="p-4 rounded-md min-w-60 w-[630px] max-md:max-w-full"
          style={{
            background: "linear-gradient(90deg, #E8F1FF 0%, #F6EEFB 100%)",
            border: "0.5px solid #CCD7E9",
            borderImageSource: "linear-gradient(90deg, #CCD7E9 0%, #DDDBE8 100%)"
          }}
        >
          {message}
        </p>
      </div>
    );
  } else {
    return (
      <div className="flex flex-wrap gap-2.5 items-end self-end mt-5 max-md:max-w-full">
        <p 
          className="gap-2.5 self-stretch px-2.5 py-4 rounded-md min-w-60 w-[620px] max-md:max-w-full"
          style={{
            background: "#F8F8F8",
            border: "0.5px solid #CCD7E9",
            borderImageSource: "linear-gradient(90deg, #CCD7E9 0%, #DDDBE8 100%)"
          }}
        >
          {message}
        </p>
        <img
          src={avatarSrc}
          className="object-contain shrink-0 w-10 rounded-3xl aspect-square"
          alt="User avatar"
        />
      </div>
    );
  }
}

export default ChatMessage;
