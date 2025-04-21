"use client";
import React from "react";
import FormField from "./FormField";
import SelectField from "./SelectField";

function BusinessProfileForm() {
  return (
    <div className="flex flex-col self-stretch my-auto w-full h-auto bg-white grow-0 max-md:mt-10 max-md:max-w-full">
      <header className="max-md:max-w-full">
        <h2 className="text-xl font-medium text-center text-black max-md:max-w-full">
          Build Your Business Identity
        </h2>
        <p className="mt-2.5 text-sm text-zinc-500 max-md:max-w-full">
          Help us tailor the referral experience by adding key details about
          your business
        </p>
      </header>

      <form className="mt-12 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-4 items-center max-w-full w-[263px]">
          <label className="self-stretch my-auto text-base text-zinc-800">
            Business Logo
          </label>
          <div className="flex flex-1 shrink gap-4 items-center self-stretch my-auto text-sm basis-0 text-stone-500">
            <button className="gap-2.5 self-stretch p-2.5 my-auto bg-white rounded-lg border border-solid border-stone-300">
              Choose Image
            </button>
          </div>
        </div>

        <div className="flex gap-5 items-center mt-6 w-full max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink self-stretch my-auto w-full rounded-lg basis-0 min-w-60 max-md:max-w-full">
            <label className="self-start text-base text-zinc-800">
              Business Description
            </label>
            <textarea
              placeholder="Enter business description..."
              className="px-4 pt-4 pb-12 mt-2 text-sm bg-white rounded-lg border border-solid border-stone-300 text-zinc-400 max-md:pr-5 max-md:max-w-full"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-5 items-center mt-6 w-full max-md:max-w-full">
          <FormField
            label="Business Name"
            placeholder="Enter business name"
            className="grow shrink self-stretch my-auto w-60 min-w-60"
          />
          <FormField
            label="Business Email"
            placeholder="e.g., robert.fox@myemail.com"
            className="grow shrink self-stretch my-auto w-60 min-w-60"
          />
        </div>

        <div className="flex flex-wrap gap-5 items-start mt-6 w-full max-md:max-w-full">
          <FormField
            label="Business Phone No."
            placeholder="Enter phone no."
            className="grow shrink w-60 min-w-60"
          />
          <SelectField
            label="Industry"
            placeholder="Select"
            className="grow shrink w-60 whitespace-nowrap min-w-60"
          />
        </div>

        <div className="flex flex-wrap gap-5 justify-between items-end mt-6 w-full max-md:max-w-full">
          <FormField
            label="Services"
            placeholder="Enter services.."
            className="min-w-60 w-[300px]"
          />
          <FormField
            label="Products"
            placeholder="Enter products..."
            className="min-w-60 w-[300px]"
          />
        </div>

        <div className="flex flex-wrap gap-5 justify-between items-end mt-6 w-full max-md:max-w-full">
          <SelectField
            label={
              <>
                Company Size{" "}
                <span className="text-[rgba(179,179,179,1)]">(Optional)</span>
              </>
            }
            placeholder="Select"
            className="min-w-60 w-[300px]"
          />
          <SelectField
            label="City"
            placeholder="Select"
            className="whitespace-nowrap min-w-60 w-[300px]"
          />
        </div>

        <div className="flex flex-wrap gap-5 justify-between items-end mt-6 w-full max-md:max-w-full">
          <SelectField
            label="State"
            placeholder="Select"
            className="whitespace-nowrap min-w-60 w-[300px]"
          />
          <FormField
            label="Zip Code"
            placeholder="Enter zip code"
            className="min-w-60 w-[300px]"
          />
        </div>
      </form>

      <div className="flex justify-center mt-10 w-full">
        <button 
          className="w-[350px] h-[39px] rounded-[8px] px-[35px] py-[10px] gap-[10px] text-white"
          style={{
            background: 'linear-gradient(90deg, rgba(48, 90, 255, 0.8) 0%, #B5D2FF 100%)'
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default BusinessProfileForm;
