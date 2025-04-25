import React from "react";

function MetricsCard({
  icon,
  title,
  value,
  change,
  isPositive,
  comparisonText,
  iconChange,
}) {
  return (
    <article className="flex gap-2.5 items-start">
      <img
        src={icon}
        className="object-contain shrink-0 aspect-square w-[50px]"
        alt={`${title} icon`}
      />
      <div className="w-[132px]">
        <h3 className="text-base font-semibold text-neutral-400">{title}</h3>
        <div className="flex gap-9 justify-between items-center mt-1.5 w-full">
          <p className="self-stretch my-auto text-xl font-semibold text-zinc-900">
            {value}
          </p>
          <div className="flex flex-wrap gap-1 content-center items-center self-stretch my-auto rounded-lg">
            <div className="flex self-stretch my-auto rounded-lg min-h-[18px]" />
          </div>
        </div>
        {change && (
          <div className="flex gap-5 items-center mt-1.5 w-full">
            <div
              className={`flex items-center self-stretch my-auto text-xs text-right ${isPositive ? "text-green-500" : "text-rose-500"} whitespace-nowrap`}
            >
              <p className="self-stretch my-auto">{change}</p>
              {iconChange && (
                <img
                  src={iconChange}
                  className="object-contain shrink-0 self-stretch my-auto w-4 h-4 aspect-square"
                  alt="Change indicator"
                />
              )}
            </div>
            {comparisonText && (
              <p className="self-stretch my-auto text-xs font-medium text-neutral-400">
                {comparisonText}
              </p>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default MetricsCard;
