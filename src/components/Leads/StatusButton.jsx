import React, { useState } from "react";

function StatusButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      className="flex items-center justify-between px-4 py-2 text-sm font-medium bg-white rounded-md border border-solid border-stone-300 text-zinc-600 hover:bg-gray-50 transition-colors cursor-pointer"
      onClick={toggleDropdown}
    >
      <span>Change Status</span>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/f921ba7ada65b25b0a7ccb5c7b33f016edfc3111?placeholderIfAbsent=true"
        className="object-contain w-5 h-5 ml-2"
        alt="Dropdown arrow"
      />
    </button>
  );
}

export default StatusButton;
