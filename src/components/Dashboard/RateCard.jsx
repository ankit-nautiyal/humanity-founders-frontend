import React from "react";

function RateCard({ title, value, color, icon }) {
  return (
    <article className="flex flex-col px-5 py-5 bg-white rounded-xl h-full">
      <header className="flex gap-1.5 items-center text-base font-medium text-zinc-800">
        <h3>{title}</h3>
        <img
          src={icon}
          className="w-4 aspect-square"
          alt="Info icon"
        />
      </header>
      <p
        className={`text-lg font-bold mt-5 ${color}`}
      >
        {value}
      </p>
    </article>
  );
}

export default RateCard;
