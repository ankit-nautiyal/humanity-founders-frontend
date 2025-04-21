import React from "react";
import platformSetupIcon from "../assets/platform-stup-icon.svg";

function Sidebar() {
  const menuItems = [
    {
      name: "Platform Setup",
      icon: platformSetupIcon,
      active: true,
    },
    {
      name: "AI Agent",
      icon: "https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/8b9e9101defc6ad99ec4430d3ecedc06cdc06e8f?placeholderIfAbsent=true",
      active: false,
    },
    {
      name: "Dashboard",
      icon: "https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/fd09e198f12c57e2d03e44eddc63e84b98cc3188?placeholderIfAbsent=true",
      active: false,
    },
    {
      name: "Campaign",
      icon: "https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/4de6e5109238309216bddfc95ef085a2ded39479?placeholderIfAbsent=true",
      active: false,
    },
    {
      name: "Promoters",
      icon: "https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/aae8f37a27a095783ff1f3e8ec2ebb4ebaf52ff5?placeholderIfAbsent=true",
      active: false,
    },
    {
      name: "Leads",
      icon: "https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/74d29f8eed60254efa5b70a810b3d72739c7c114?placeholderIfAbsent=true",
      active: false,
    },
    {
      name: "Payouts",
      icon: "https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/1e5a46ce258f5e0b49779edc2d69539f471b4bf7?placeholderIfAbsent=true",
      active: false,
    },
  ];

  const bottomMenuItems = [
    {
      name: "Settings",
      icon: "https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/a9cca7237cba8153e14d0b1ec5751f68ff20cf49?placeholderIfAbsent=true",
    },
    {
      name: "Help",
      icon: "https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/363394b1fab287abda6c16f6efa94810db1417ed?placeholderIfAbsent=true",
    },
  ];

  return (
    <nav className="h-screen overflow-y-auto py-4 w-full text-sm font-medium text-blue-600 bg-white rounded-3xl border border-gray-100 border-solid">
      <div className="sticky top-0">
        <div className="max-w-full w-[230px]">
          <ul className="w-full">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`flex gap-2 items-center py-3 pl-4 ${index > 0 ? "mt-1.5" : ""} w-full rounded-none 
                  ${item.active 
                    ? "text-blue-600 border-l-[5px] border-blue-600 pl-[13px] bg-blue-50" 
                    : "hover:bg-blue-50"} 
                  cursor-pointer`}
              >
                <img
                  src={item.icon}
                  className="object-contain shrink-0 my-auto w-6 h-6"
                  alt={`${item.name} icon`}
                />
                <span className="my-auto">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <hr className="mt-4 w-full min-h-0 border border-solid border-neutral-200" />
      </div>
      <div className="w-full whitespace-nowrap mt-auto pt-4">
        <hr className="max-w-full min-h-0 border border-solid border-neutral-200 w-[246px]" />
        <ul>
          {bottomMenuItems.map((item, index) => (
            <li
              key={index}
              className="flex gap-4 items-center py-3 pl-5 mt-1.5 w-full rounded-xl cursor-pointer hover:bg-blue-50"
            >
              <img
                src={item.icon}
                className="object-contain shrink-0 my-auto w-6 h-6"
                alt={`${item.name} icon`}
              />
              <span className="my-auto">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
