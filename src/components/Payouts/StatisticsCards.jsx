import React from "react";

function StatisticsCards() {
  return (
    <section className="flex justify-between gap-6 p-5 bg-white rounded-xl shadow-sm mb-5">
      <div className="flex gap-4 items-center">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/c2461c62af921b799353129359218d69dfb54e09?placeholderIfAbsent=true"
          className="object-contain shrink-0 aspect-square w-[50px]"
          alt="Total points icon"
        />
        <div>
          <h2 className="text-base font-semibold text-neutral-400">
            Total Points Given
          </h2>
          <p className="mt-1 text-xl font-semibold text-zinc-900">
            12,500
          </p>
        </div>
      </div>

      <div className="h-auto w-px bg-neutral-200"></div>

      <div className="flex gap-4 items-center">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/49d33f40390ca6cc667f1dbda88bddea614df2f7?placeholderIfAbsent=true"
          className="object-contain shrink-0 aspect-square w-[50px]"
          alt="Current balance icon"
        />
        <div>
          <h2 className="text-base font-semibold text-neutral-400">
            Current Point Balance
          </h2>
          <p className="mt-1 text-xl font-semibold text-zinc-900">
            1,250
          </p>
        </div>
      </div>

      <div className="h-auto w-px bg-neutral-200"></div>

      <div className="flex gap-4 items-center">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/499222c3a96cc21d973b1735621cf80e0454ca6d?placeholderIfAbsent=true"
          className="object-contain shrink-0 aspect-square w-[50px]"
          alt="Last transfer icon"
        />
        <div>
          <h2 className="text-base font-semibold text-neutral-400">
            Last Points Transfer
          </h2>
          <p className="mt-1 text-xl font-semibold text-zinc-900">
            April 9, 2025
          </p>
        </div>
      </div>
    </section>
  );
}

export default StatisticsCards;
