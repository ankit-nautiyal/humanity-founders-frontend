import React from "react";

function ProfileHeader() {
  return (
    <div className="flex flex-wrap gap-10 justify-between items-center w-full max-w-[1105px] max-md:max-w-full">
      <h1 className="gap-4 self-stretch my-auto text-xl font-medium text-zinc-900">
        Platform Setup
      </h1>
      <div className="flex gap-8 items-center self-stretch my-auto">
        <div className="flex gap-5 self-stretch my-auto min-h-6" />
        <div className="flex gap-5 items-center self-stretch my-auto">
          <div className="flex gap-1.5 items-center self-stretch my-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/38cc02f4f303a1e594a08f5aeec00b26149af3e7?placeholderIfAbsent=true"
              className="object-contain shrink-0 self-stretch my-auto rounded-3xl aspect-square w-[30px]"
              alt="User profile"
            />
            <div className="self-stretch my-auto w-[126px]">
              <p className="text-sm font-semibold leading-none text-zinc-900">
                Kadin Stanton
              </p>
              <p className="text-xs text-neutral-400">kadinstanton@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
