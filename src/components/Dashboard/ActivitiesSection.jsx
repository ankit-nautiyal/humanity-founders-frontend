import React from "react";

function ActivitiesSection() {
  const activities = [
    {
      activity: "Julian earned $10",
      date: "28-4-2024",
      time: "10:30 AM",
    },
    {
      activity: "John Doe signed up from your referral link",
      date: "29-4-2024",
      time: "9:45 AM",
    },
    {
      activity: "You reached 50 referrals milestone!",
      date: "30-4-2024",
      time: "8:20 AM",
    },
    {
      activity: "You updated your referral campaign",
      date: "31-4-2024",
      time: "7:00 AM",
    },
  ];

  return (
    <section className="px-5 py-5 mt-4 bg-white rounded-xl">
      <header className="flex flex-wrap justify-between items-center w-full text-lg font-semibold leading-none text-zinc-900">
        <h2 className="self-stretch my-auto">Recent Activities</h2>
      </header>
      <div className="flex flex-wrap items-start py-5 pr-7 pl-8 mt-6 w-full text-sm bg-white rounded-lg border border-solid border-stone-300 text-stone-500">
        <div className="flex flex-col grow shrink items-start rounded-none min-w-60 w-[239px]">
          <h3 className="font-semibold text-zinc-800">Activities</h3>
          {activities.map((item, index) => (
            <p
              key={index}
              className={`${index > 0 ? "mt-10" : "mt-9"} leading-none`}
            >
              {item.activity}
            </p>
          ))}
        </div>
        <div className="flex grow shrink gap-10 justify-between items-center w-[172px]">
          <div className="flex flex-col self-stretch my-auto whitespace-nowrap rounded-none w-[74px]">
            <h3 className="self-center font-semibold text-zinc-800">Date</h3>
            {activities.map((item, index) => (
              <p
                key={index}
                className={`${index > 0 ? "mt-10" : "mt-9"} leading-none`}
              >
                {item.date}
              </p>
            ))}
          </div>
          <div className="flex flex-col items-start self-stretch my-auto rounded-none w-[63px]">
            <h3 className="self-center font-semibold text-zinc-800">Time</h3>
            {activities.map((item, index) => (
              <p
                key={index}
                className={`${index > 0 ? "mt-10" : "mt-9"} leading-none`}
              >
                {item.time}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ActivitiesSection;
