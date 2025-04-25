import React, { useState } from "react";

function FilterButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      className="flex items-center px-4 py-2 text-sm font-medium bg-white rounded-md border border-solid border-stone-300 text-zinc-600 hover:bg-gray-50 transition-colors cursor-pointer"
      onClick={toggleFilter}
    >
      <img
        src="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/797567846a529b16906eeb784590d6996cf630a5?placeholderIfAbsent=true"
        className="object-contain w-5 h-5 mr-2"
        alt="Filter icon"
      />
      <span>Filter</span>
    </button>
  );
}

export default FilterButton;
