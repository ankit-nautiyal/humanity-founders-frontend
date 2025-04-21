"use client";
import React from "react";

function SocialLoginSection() {
  const socialIcons = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/b730cdc900ed6690210c8a0d6dec24c31d11c78c?placeholderIfAbsent=true",
      alt: "Social login option 1",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/fc4ba486274b90c4a5b7f75f54167cf3ae9e7b8f?placeholderIfAbsent=true",
      alt: "Social login option 2",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/d9be75e3db757d8752c24a4067960b8a8cd57d8c?placeholderIfAbsent=true",
      alt: "Social login option 3",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/22778a41f9cde368d9a780a173a6f16a1493dde1?placeholderIfAbsent=true",
      alt: "Social login option 4",
    },
  ];

  return (
    <div className="flex gap-2 justify-center items-center w-full mt-2">
      {socialIcons.map((icon, index) => (
        <button
          key={index}
          className="flex gap-1 items-center justify-center p-1 w-9 h-9 bg-slate-100 rounded-full cursor-pointer"
          aria-label={icon.alt}
        >
          <img
            src={icon.src}
            alt={icon.alt}
            className="object-contain w-6 aspect-square"
          />
        </button>
      ))}
    </div>
  );
}

export default SocialLoginSection;
