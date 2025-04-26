import React from "react";

function SearchBar() {
  return (
    <div className="flex items-center rounded bg-neutral-100 w-full max-w-[307px]">
      <div className="flex items-center px-3 py-2 w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/3182b83634c8c74deb0cb38c2694e5cca0f89fee?placeholderIfAbsent=true"
          className="object-contain w-4 h-4 mr-2"
          alt="Search icon"
        />
        <input
          type="text"
          placeholder="Search"
          className="flex-1 text-sm text-neutral-400 bg-transparent border-none outline-none"
        />
      </div>
    </div>
  );
}

export default SearchBar;
