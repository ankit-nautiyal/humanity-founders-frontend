import React from "react";

function StatisticsCard({
  iconSrc,
  title,
  value,
  changePercentage,
  isPositive,
  minWidth = "",
}) {
  return (
    <article className={`flex gap-2.5 items-start ${minWidth} max-sm:min-w-[130px]`}>
      <img
        src={iconSrc}
        className="object-contain shrink-0 aspect-square w-[50px] max-sm:w-[40px]"
        alt={`${title} icon`}
      />
      <div className={minWidth ? "w-full" : "w-[132px] max-sm:w-full"}>
        <h3 className="text-base font-semibold text-neutral-400 max-sm:text-sm">{title}</h3>
        <div className="flex gap-10 justify-between items-center mt-1.5 w-full">
          <p className="self-stretch my-auto text-xl font-semibold text-zinc-900 max-sm:text-lg">
            {value}
          </p>
          <div className="flex flex-wrap gap-1 content-center items-center self-stretch my-auto rounded-lg" />
        </div>
        <div className="flex gap-5 max-sm:gap-2 items-center mt-1.5 w-full max-sm:flex-wrap">
          <div
            className={`flex items-center self-stretch my-auto text-xs text-right ${isPositive ? "text-green-500" : "text-rose-500"} whitespace-nowrap`}
          >
            <p className="self-stretch my-auto">{changePercentage}</p>
            <img
              src={
                isPositive
                  ? "https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/56cdd76d19dc6192a142a57e30ad26f0d745959c?placeholderIfAbsent=true"
                  : "https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/6e00168f3aa267d722bc1b5867b23a43acea8630?placeholderIfAbsent=true"
              }
              className="object-contain shrink-0 self-stretch my-auto w-4 h-4 aspect-square"
              alt={isPositive ? "Up arrow" : "Down arrow"}
            />
          </div>
          <p className="self-stretch my-auto text-xs font-medium text-neutral-400">
            vs last month
          </p>
        </div>
      </div>
    </article>
  );
}

export default StatisticsCard;
