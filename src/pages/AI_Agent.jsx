import React from "react";
import ChatHeader from "../components/AI_Agent/ChatHeader";
import ChatInput from "../components/AI_Agent/ChatInput";
import ChatMessage from "../components/AI_Agent/ChatMessage";
import ChatSummary from "../components/AI_Agent/ChatSummary";
import QuickLinks from "../components/AI_Agent/QuickLinks";
import PageTransition from "../components/PageTransition";
import ProfileHeader from "../components/ProfileHeader";
import Sidebar from "../components/Sidebar";

function AI_Agent() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen bg-slate-100">
        <main className="flex flex-1 bg-slate-100">
          <div className="flex w-full gap-5 p-4 max-md:flex-col min-h-screen">
            <aside className="w-[17%] max-md:w-full h-full">
              <Sidebar />
            </aside>
            <section className="flex flex-col w-[83%] max-md:w-full">
              <div className="flex flex-col">
                <ProfileHeader />
                <hr className="mt-4 h-px border border-solid border-neutral-200 max-md:max-w-full" />
                <div className="py-6 px-6 mt-6 bg-white rounded-2xl shadow-sm">
                  <article className="overflow-hidden py-8 bg-white rounded-2xl">
                    <div className="flex flex-col px-10 w-full text-zinc-800 max-md:px-5 max-md:max-w-full">
                      <ChatHeader />
                      <hr className="flex shrink-0 mt-6 h-px rounded-none border-t border-stone-300 max-md:max-w-full" />

                      {/* AI Welcome Message */}
                      <div className="flex gap-2.5 items-start self-start mt-6 ml-8 text-base font-medium max-md:max-w-full">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/77699f4b6106513fff2b1f58c43099e63ecf8d96?placeholderIfAbsent=true"
                          className="object-contain shrink-0 w-10 aspect-square"
                          alt="AI avatar"
                        />
                        <div 
                          className="flex gap-1.5 items-center p-4 rounded-md min-w-60"
                          style={{
                            background: "linear-gradient(90deg, #E8F1FF 0%, #F6EEFB 100%)",
                            border: "0.5px solid #CCD7E9",
                            borderImageSource: "linear-gradient(90deg, #CCD7E9 0%, #DDDBE8 100%)"
                          }}
                        >
                          <p className="self-stretch my-auto">Welcome Back, Kadin!</p>
                          <p className="self-stretch my-auto">How can I help you today?</p>
                        </div>
                      </div>

                      {/* User First Message */}
                      <div className="flex flex-wrap gap-2.5 items-end self-end mt-5 mr-8 text-base font-medium leading-6 max-md:mr-2.5 max-md:max-w-full">
                        <p 
                          className="gap-2.5 self-stretch px-2.5 py-4 rounded-md min-w-60 w-[620px] max-md:max-w-full"
                          style={{
                            background: "#F8F8F8",
                            border: "0.5px solid #CCD7E9",
                            borderImageSource: "linear-gradient(90deg, #CCD7E9 0%, #DDDBE8 100%)"
                          }}
                        >
                          Hey, I want to create a new referral campaign, but I'd like some
                          help from AI to make sure it's set up correctly and performs well.
                          Can you guide me through it?
                        </p>
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/dbf1194b5aebf68082a9d70901ece929230f275e?placeholderIfAbsent=true"
                          className="object-contain shrink-0 w-10 rounded-3xl aspect-square"
                          alt="User avatar"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col px-16 mt-5 w-full text-base font-medium leading-6 text-zinc-800 max-md:px-5 max-md:max-w-full">
                      {/* AI Response */}
                      <ChatMessage
                        isAI={true}
                        avatarSrc="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/fc6847a0eba1d792fb224c49c6766d346f15ae92?placeholderIfAbsent=true"
                        message="Absolutely! I'll help you create a high-converting referral campaign step by step. Let's start by defining your main objective. What's the primary goal of this campaign?"
                      />

                      {/* User Response */}
                      <ChatMessage
                        isAI={false}
                        avatarSrc="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/dbf1194b5aebf68082a9d70901ece929230f275e?placeholderIfAbsent=true"
                        message="My main goal is to increase sales through referrals. I want existing customers to bring in new paying customers, and I'd like to reward them for it."
                      />
                    </div>

                    <div className="flex flex-col px-16 mt-5 w-full max-md:px-5 max-md:max-w-full">
                      <div className="max-md:max-w-full" space={10}>
                        <div className="flex gap-5 max-md:flex-col max-md:">
                          <div className="w-[71%] max-md:ml-0 max-md:w-full">
                            <div className="w-full text-base font-medium leading-6 text-zinc-800 max-md:mt-2.5 max-md:max-w-full">
                              <ChatMessage
                                isAI={true}
                                avatarSrc="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/b279f4fd744849108e97a7e9073995f68220353e?placeholderIfAbsent=true"
                                message="That's a great goal! Referral campaigns work best when there's a strong incentive. What kind of reward would you like to offer referrers?"
                              />

                              <div className="flex flex-wrap gap-2.5 items-start mt-24 max-md:mt-10">
                                <img
                                  src="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/90a2c91f1d155e424a55a439e56cc46b0f9c18ab?placeholderIfAbsent=true"
                                  className="object-contain shrink-0 w-10 aspect-square"
                                  alt="AI avatar"
                                />
                                <p 
                                  className="p-4 rounded-md min-w-60 w-[630px] max-md:max-w-full"
                                  style={{
                                    background: "linear-gradient(90deg, #E8F1FF 0%, #F6EEFB 100%)",
                                    border: "0.5px solid #CCD7E9",
                                    borderImageSource: "linear-gradient(90deg, #CCD7E9 0%, #DDDBE8 100%)"
                                  }}
                                >
                                  Smart choice! Discounts are a great way to encourage both
                                  referrals and repeat purchases. How much discount would
                                  you like to offer per successful referral?
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="ml-5 w-[29%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col mt-24 w-full text-base font-medium leading-loose text-zinc-800 max-md:mt-10">
                              <div className="flex gap-2.5 items-end">
                                <p 
                                  className="gap-2.5 self-stretch px-2.5 py-4 rounded-md min-w-60"
                                  style={{
                                    background: "#F8F8F8",
                                    border: "0.5px solid #CCD7E9",
                                    borderImageSource: "linear-gradient(90deg, #CCD7E9 0%, #DDDBE8 100%)"
                                  }}
                                >
                                  Discount on next purchase
                                </p>
                                <img
                                  src="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/dbf1194b5aebf68082a9d70901ece929230f275e?placeholderIfAbsent=true"
                                  className="object-contain shrink-0 w-10 rounded-3xl aspect-square"
                                  alt="User avatar"
                                />
                              </div>
                              <div className="flex gap-2.5 items-end self-end mt-36 whitespace-nowrap max-md:mt-10">
                                <p 
                                  className="gap-2.5 self-stretch px-2.5 py-4 rounded-md min-w-60"
                                  style={{
                                    background: "#F8F8F8",
                                    border: "0.5px solid #CCD7E9",
                                    borderImageSource: "linear-gradient(90deg, #CCD7E9 0%, #DDDBE8 100%)"
                                  }}
                                >
                                  15%
                                </p>
                                <img
                                  src="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/dbf1194b5aebf68082a9d70901ece929230f275e?placeholderIfAbsent=true"
                                  className="object-contain shrink-0 w-10 rounded-3xl aspect-square"
                                  alt="User avatar"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* AI Response with Highlighted Background */}
                      <div className="flex flex-wrap gap-2.5 items-start self-start mt-5 text-base font-medium leading-6 text-zinc-800">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/06965f5ea04db979848617e99fae5d45e068a862?placeholderIfAbsent=true"
                          className="object-contain shrink-0 w-10 aspect-square"
                          alt="AI avatar"
                        />
                        <p 
                          className="p-4 rounded-md min-w-60 w-[630px] max-md:max-w-full"
                          style={{
                            background: "linear-gradient(90deg, #E8F1FF 0%, #F6EEFB 100%)",
                            border: "0.5px solid #CCD7E9",
                            borderImageSource: "linear-gradient(90deg, #CCD7E9 0%, #DDDBE8 100%)"
                          }}
                        >
                          15% sounds like a strong incentive! Now, let's define when a
                          referral is considered valid. When should the referrer receive their
                          reward?
                        </p>
                      </div>

                      {/* User Response */}
                      <div className="flex gap-2.5 items-end self-end mt-5 text-base font-medium leading-loose text-zinc-800">
                        <p 
                          className="gap-2.5 self-stretch px-2.5 py-4 rounded-md min-w-60"
                          style={{
                            background: "#F8F8F8",
                            border: "0.5px solid #CCD7E9",
                            borderImageSource: "linear-gradient(90deg, #CCD7E9 0%, #DDDBE8 100%)"
                          }}
                        >
                          When the referred person signs up
                        </p>
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/dbf1194b5aebf68082a9d70901ece929230f275e?placeholderIfAbsent=true"
                          className="object-contain shrink-0 w-10 rounded-3xl aspect-square"
                          alt="User avatar"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col px-16 mt-5 w-full text-base font-medium leading-6 text-zinc-800 max-md:px-5 max-md:max-w-full">
                      {/* AI Response with Highlighted Background */}
                      <div className="flex flex-wrap gap-2.5 items-start self-start">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/78711406cc7942e295203f89c3da9959c4636845?placeholderIfAbsent=true"
                          className="object-contain shrink-0 w-10 aspect-square"
                          alt="AI avatar"
                        />
                        <p 
                          className="p-4 rounded-md min-w-60 w-[630px] max-md:max-w-full"
                          style={{
                            background: "linear-gradient(90deg, #E8F1FF 0%, #F6EEFB 100%)",
                            border: "0.5px solid #CCD7E9",
                            borderImageSource: "linear-gradient(90deg, #CCD7E9 0%, #DDDBE8 100%)"
                          }}
                        >
                          That's a great way to ensure that your campaign drives real revenue!
                          Now, how long do you want this referral campaign to run?
                        </p>
                      </div>

                      {/* User Response */}
                      <ChatMessage
                        isAI={false}
                        avatarSrc="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/dbf1194b5aebf68082a9d70901ece929230f275e?placeholderIfAbsent=true"
                        message="I want to test this campaign for a while before making any long-term decisions, so I think 3 months would be ideal. If it works well, I can always extend it later."
                      />
                    </div>

                    <div className="flex flex-col px-10 mt-5 w-full max-md:px-5 max-md:max-w-full">
                      <div
                        className="self-center w-full max-w-[965px] max-md:max-w-full"
                        space={150}
                      >
                        <div className="flex gap-5 max-md:flex-col max-md:">
                          <div className="w-[85%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-wrap gap-2.5 items-start text-base font-medium leading-loose text-zinc-800 max-md:mt-10">
                              <img
                                src="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/d6dd1309ce542504640ef70e571250850c15da49?placeholderIfAbsent=true"
                                className="object-contain shrink-0 w-10 aspect-square"
                                alt="AI avatar"
                              />
                              <div 
                                className="flex flex-col p-4 rounded-md min-w-60 max-md:max-w-full"
                                style={{
                                  background: "linear-gradient(90deg, #E8F1FF 0%, #F6EEFB 100%)",
                                  border: "0.5px solid #CCD7E9",
                                  borderImageSource: "linear-gradient(90deg, #CCD7E9 0%, #DDDBE8 100%)"
                                }}
                              >
                                <p className="max-md:max-w-full">
                                  Got it! Here's a quick summary of your campaign:
                                </p>

                                <ChatSummary />

                                <div className="flex flex-wrap gap-5 items-start mt-5 text-blue-600 whitespace-nowrap max-md:max-w-full">
                                  <button className="px-5 py-1.5 rounded-md border border-blue-600 border-solid min-w-60 w-[295px] cursor-pointer transition-opacity duration-200 hover:opacity-70">
                                    Edit
                                  </button>
                                  <button className="px-5 py-1.5 rounded-md border border-blue-600 border-solid min-w-60 w-[295px] cursor-pointer transition-opacity duration-200 hover:opacity-70">
                                    Launch
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="ml-5 w-[15%] max-md:ml-0 max-md:w-full">
                            <div className="flex gap-2.5 items-end mt-72 text-base font-medium leading-loose whitespace-nowrap text-zinc-800 max-md:mt-10">
                              <p 
                                className="gap-2.5 self-stretch px-2.5 py-4 rounded-md"
                                style={{
                                  background: "#F8F8F8",
                                  border: "0.5px solid #CCD7E9",
                                  borderImageSource: "linear-gradient(90deg, #CCD7E9 0%, #DDDBE8 100%)"
                                }}
                              >
                                Launch
                              </p>
                              <img
                                src="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/ae1f9a5f61018ddadc0ba40624414a31a273fc8a?placeholderIfAbsent=true"
                                className="object-contain shrink-0 w-10 rounded-full aspect-square shadow-[0px_1px_6px_rgba(0,0,0,0.1)]"
                                alt="User avatar"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <hr className="flex shrink-0 mt-10 h-px rounded-none border-t border-stone-300 max-md:max-w-full" />

                      <h2 className="self-start mt-4 text-lg font-medium text-zinc-900">
                        Quick Links
                      </h2>

                      <QuickLinks />

                      <ChatInput />
                    </div>
                  </article>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </PageTransition>
  );
}

export default AI_Agent;
