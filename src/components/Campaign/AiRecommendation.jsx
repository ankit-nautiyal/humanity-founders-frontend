import React from "react";

function AiRecommendation({ text }) {
  return (
    <div className="flex gap-2.5 items-start p-4 mt-8 w-full bg-indigo-50 rounded-md max-w-[343px]">
      <div className="flex gap-2.5 items-center p-1 bg-white h-[26px] rounded-[100px] w-[26px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/11588e9f93a555553a84e3d2db5138119349edc6?placeholderIfAbsent=true"
          className="object-contain self-stretch my-auto w-5 rounded-full aspect-square"
          alt="AI assistant icon"
        />
      </div>
      <p className="text-base font-medium leading-6 text-stone-500 w-[277px]">
        {text}
      </p>
    </div>
  );
}

export default AiRecommendation;
