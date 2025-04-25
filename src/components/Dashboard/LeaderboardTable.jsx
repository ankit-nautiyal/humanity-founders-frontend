import React from "react";

function LeaderboardTable() {
  const leaderboardData = [
    {
      rank: 1,
      name: "Emery Dokidis",
      conversionRate: 150,
      referralsSent: 80,
      successfulConversions: "60%",
      revenueGenerated: "$1,200",
    },
    {
      rank: 2,
      name: "Kadin Lipshutz",
      conversionRate: 132,
      referralsSent: 90,
      successfulConversions: "65%",
      revenueGenerated: "$980",
    },
    {
      rank: 3,
      name: "Randy Culhane",
      conversionRate: 110,
      referralsSent: 60,
      successfulConversions: "60%",
      revenueGenerated: "$880",
    },
    {
      rank: 4,
      name: "Jaxson Vaccaro",
      conversionRate: 100,
      referralsSent: 85,
      successfulConversions: "75%",
      revenueGenerated: "$500",
    },
    {
      rank: 5,
      name: "Jocelyn Levin",
      conversionRate: 50,
      referralsSent: 30,
      successfulConversions: "63%",
      revenueGenerated: "$600",
    },
    {
      rank: 6,
      name: "Maren Septimus",
      conversionRate: 80,
      referralsSent: 35,
      successfulConversions: "25%",
      revenueGenerated: "$200",
    },
    {
      rank: 7,
      name: "Haylie Saris",
      conversionRate: 120,
      referralsSent: 55,
      successfulConversions: "45%",
      revenueGenerated: "$150",
    },
    {
      rank: 8,
      name: "Randy Herwitz",
      conversionRate: 110,
      referralsSent: 90,
      successfulConversions: "65%",
      revenueGenerated: "$880",
    },
  ];

  return (
    <section className="px-5 py-5 mt-4 bg-white rounded-xl">
      <header className="flex items-center w-full text-lg font-semibold leading-none text-zinc-900">
        <h2 className="self-stretch my-auto">Leaderboard Table View</h2>
      </header>
      <div className="flex flex-wrap gap-10 items-start px-4 py-5 mt-6 w-full text-sm bg-white rounded-lg border border-solid border-stone-300 text-stone-500">
        <div className="flex flex-col grow shrink items-center whitespace-nowrap rounded-none w-[27px] max-md:hidden">
          <h3 className="self-stretch font-semibold text-zinc-800">Rank</h3>
          {leaderboardData.map((item, index) => (
            <p
              key={index}
              className={`${index > 0 ? "mt-10" : "mt-9"} leading-none`}
            >
              {item.rank}
            </p>
          ))}
        </div>
        <div className="flex flex-col grow shrink rounded-none w-[101px]">
          <h3 className="font-semibold text-zinc-800">Promoter Name</h3>
          {leaderboardData.map((item, index) => (
            <p
              key={index}
              className={`${index > 0 ? "mt-10" : "mt-9"} leading-none max-md:mx-1.5`}
            >
              {item.name}
            </p>
          ))}
        </div>
        <div className="flex flex-col grow shrink items-center rounded-none w-[105px]">
          <h3 className="self-stretch font-semibold text-zinc-800">
            Conversion Rate
          </h3>
          {leaderboardData.map((item, index) => (
            <p
              key={index}
              className={`${index > 0 ? "mt-10" : "mt-9"} leading-none`}
            >
              {item.conversionRate}
            </p>
          ))}
        </div>
        <div className="flex flex-col grow shrink items-center rounded-none w-[89px]">
          <h3 className="self-stretch font-semibold text-zinc-800">
            Referrals Sent
          </h3>
          {leaderboardData.map((item, index) => (
            <p
              key={index}
              className={`${index > 0 ? "mt-10" : "mt-9"} leading-none`}
            >
              {item.referralsSent}
            </p>
          ))}
        </div>
        <div className="flex flex-col grow shrink items-center rounded-none w-[157px]">
          <h3 className="self-stretch font-semibold text-zinc-800">
            Successful Conversions
          </h3>
          {leaderboardData.map((item, index) => (
            <p
              key={index}
              className={`${index > 0 ? "mt-10" : "mt-9"} leading-none`}
            >
              {item.successfulConversions}
            </p>
          ))}
        </div>
        <div className="flex flex-col grow shrink items-center rounded-none w-[127px]">
          <h3 className="self-stretch font-semibold text-zinc-800">
            Revenue Generated
          </h3>
          {leaderboardData.map((item, index) => (
            <p
              key={index}
              className={`${index > 0 ? "mt-10" : "mt-9"} leading-none`}
            >
              {item.revenueGenerated}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LeaderboardTable;
