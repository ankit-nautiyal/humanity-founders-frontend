import React from "react";

function ChatSummary() {
  return (
    <section className="flex flex-col justify-center p-5 mt-5 bg-white rounded-xl max-md:max-w-full">
      <div>
        <ul>
          <li>
            <span style={{ color: "rgba(48,90,255,1)" }}>Goal</span>: Increase
            sales
          </li>
        </ul>
      </div>
      <div className="mt-1.5">
        <ul>
          <li>
            <span style={{ color: "rgba(48,90,255,1)" }}>Reward</span>: 15%
            discount on the next purchase
          </li>
        </ul>
      </div>
      <div className="mt-1.5 max-md:max-w-full">
        <ul>
          <li>
            <span style={{ color: "rgba(48,90,255,1)" }}>Condition</span>:
            Reward is given when the referred person makes a purchase
          </li>
        </ul>
      </div>
      <div className="mt-1.5">
        <ul>
          <li>
            <span style={{ color: "rgba(48,90,255,1)" }}>Duration</span>: 3
            months
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ChatSummary;
