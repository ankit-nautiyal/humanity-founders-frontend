import React from "react";
import bellIcon from "../assets/bell.svg";

function ProfileHeader() {
  return (
    <div className="flex justify-between items-center w-full max-w-[1105px]">
      <h1 className="text-xl font-medium text-zinc-900">
        Platform Setup
      </h1>
      <div className="flex items-center gap-3">
        <div className="cursor-pointer">
          <img
            src={bellIcon}
            className="w-[24px] h-[24px] object-contain"
            alt="Notifications"
          />
        </div>
        <div className="flex gap-1.5 items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/38cc02f4f303a1e594a08f5aeec00b26149af3e7?placeholderIfAbsent=true"
            className="object-contain shrink-0 rounded-3xl aspect-square w-[30px]"
            alt="User profile"
          />
          <div className="w-[115px]">
            <p className="text-sm font-semibold leading-none text-zinc-900">
              Kadin Stanton
            </p>
            <p className="text-xs text-neutral-400">kadinstanton@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
