import React, { useState } from "react";
import PageTransition from "../components/PageTransition";
import ProfileHeader from "../components/ProfileHeader";
import Sidebar from "../components/Sidebar";

export default function Settings() {
	const [activeSection, setActiveSection] = useState("userProfile");
	
	const menuItems = [
		{ id: "userProfile", label: "User Profile" },
		{ id: "businessProfile", label: "Business Profile" },
		{ id: "aiSettings", label: "AI Settings" },
		{ id: "emailPhoneSetup", label: "Email & Phone Setup" },
		{ id: "subscriptionUsage", label: "Subscription & Usage" }
	];
	
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
								
								<div className="mt-6 bg-white rounded-xl shadow-sm">
									<div className="flex flex-col items-start self-stretch bg-[#FFFFFF] rounded-[15px]">
										<div className="flex items-start mt-[25px] mb-[16px] ml-[25px] overflow-x-auto whitespace-nowrap gap-2 pb-2 max-w-full">
											{menuItems.map((item) => (
												<button 
													key={item.id}
													className={`flex flex-col shrink-0 items-start ${
														activeSection === item.id 
															? "bg-[#305AFF1A] text-[#333333]" 
															: "bg-transparent text-[#888888]"
													} text-left p-[10px] rounded-[4px] border-0 cursor-pointer hover:bg-[#305AFF30] mr-2`}
													onClick={() => setActiveSection(item.id)}>
													<span className="text-[18px] font-bold whitespace-nowrap">
														{item.label}
													</span>
												</button>
											))}
										</div>
										<div className="self-stretch bg-[#AAAAAA] h-[1px] mb-[43px] ml-[25px] mr-[25px]">
										</div>
										
										{activeSection === "userProfile" && (
											<div className="self-stretch ml-[25px] mr-[25px]">
												<div className="flex items-center self-stretch pb-[20px]">
													<span className="flex-1 text-[#333333] text-[18px] font-bold" >
														{"Profile"}
													</span>
													<div className="flex shrink-0 items-center">
														<img
															src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wsaq7dgVrF/qthkpu5m_expires_30_days.png"} 
															className="w-[50px] h-[50px] mr-[15px] object-fill"
														/>
														<img
															src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wsaq7dgVrF/yst8acvq_expires_30_days.png"} 
															className="w-[24px] h-[24px] object-fill"
														/>
													</div>
												</div>
												<div className="self-stretch bg-[#AAAAAA] h-[1px] mb-[29px]">
												</div>
												<div className="flex items-center self-stretch pb-[30px]">
													<span className="flex-1 text-[#333333] text-[18px] font-bold" >
														{"User Name"}
													</span>
													<div className="flex shrink-0 items-center">
														<span className="text-[#636363] text-[18px] mr-[19px]" >
															{"Kadin Stanton"}
														</span>
														<img
															src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wsaq7dgVrF/z43szn6l_expires_30_days.png"} 
															className="w-[24px] h-[24px] object-fill"
														/>
													</div>
												</div>
												<div className="self-stretch bg-[#AAAAAA] h-[1px] mb-[29px]">
												</div>
												<div className="flex items-center self-stretch pb-[30px]">
													<span className="flex-1 text-[#333333] text-[18px] font-bold" >
														{"User Phone"}
													</span>
													<span className="text-[#636363] text-[18px] mb-[1px]" >
														{"1234567890"}
													</span>
												</div>
												<div className="self-stretch bg-[#AAAAAA] h-[1px] mb-[29px]">
												</div>
												<div className="flex items-center self-stretch pb-[30px]">
													<span className="flex-1 text-[#333333] text-[18px] font-bold" >
														{"Email"}
													</span>
													<span className="text-[#636363] text-[18px]" >
														{"kadinstanton@gmail.com"}
													</span>
												</div>
												<div className="self-stretch bg-[#AAAAAA] h-[1px] mb-[29px]">
												</div>
												<div className="flex items-center self-stretch pb-[30px]">
													<span className="flex-1 text-[#333333] text-[18px] font-bold" >
														{"Password"}
													</span>
													<div className="flex shrink-0 items-center">
														<span className="text-[#636363] text-[18px] mr-[17px]" >
															{"*******"}
														</span>
														<button className="flex flex-col shrink-0 items-start bg-transparent text-left pt-[10px] pb-[10px] pl-[15px] pr-[15px] rounded-[5px] border-[1px] border-solid border-[#3059FE] cursor-pointer hover:bg-[#3059FE10]">
															<span className="text-[#3059FE] text-[16px]" >
																{"Change Password"}
															</span>
														</button>
													</div>
												</div>
											</div>
										)}
										
										{activeSection === "businessProfile" && (
											<div className="self-stretch ml-[25px] mr-[25px]">
												<div className="flex items-center self-stretch pb-[20px]">
													<span className="flex-1 text-[#333333] text-[18px] font-bold">
														{"Business Information"}
													</span>
												</div>
												<div className="self-stretch bg-[#AAAAAA] h-[1px] mb-[29px]"></div>
												<div className="flex items-center self-stretch pb-[30px]">
													<span className="flex-1 text-[#333333] text-[18px] font-bold">
														{"Company Name"}
													</span>
													<div className="flex shrink-0 items-center">
														<span className="text-[#636363] text-[18px] mr-[19px]">
															{"Humanity AI"}
														</span>
														<img
															src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wsaq7dgVrF/z43szn6l_expires_30_days.png"} 
															className="w-[24px] h-[24px] object-fill"
														/>
													</div>
												</div>
												<div className="self-stretch bg-[#AAAAAA] h-[1px] mb-[29px]"></div>
												<div className="flex items-center self-stretch pb-[30px]">
													<span className="flex-1 text-[#333333] text-[18px] font-bold">
														{"Industry"}
													</span>
													<div className="flex shrink-0 items-center">
														<span className="text-[#636363] text-[18px] mr-[19px]">
															{"Technology"}
														</span>
														<img
															src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wsaq7dgVrF/z43szn6l_expires_30_days.png"} 
															className="w-[24px] h-[24px] object-fill"
														/>
													</div>
												</div>
												<div className="self-stretch bg-[#AAAAAA] h-[1px] mb-[29px]"></div>
												<div className="flex items-center self-stretch pb-[30px]">
													<span className="flex-1 text-[#333333] text-[18px] font-bold">
														{"Website"}
													</span>
													<span className="text-[#636363] text-[18px]">
														{"www.humanityai.com"}
													</span>
												</div>
											</div>
										)}
										
										{activeSection === "aiSettings" && (
											<div className="self-stretch ml-[25px] mr-[25px]">
												<div className="flex items-center self-stretch pb-[20px]">
													<span className="flex-1 text-[#333333] text-[18px] font-bold">
														{"AI Preferences"}
													</span>
												</div>
												<div className="self-stretch bg-[#AAAAAA] h-[1px] mb-[29px]"></div>
												<div className="flex items-center self-stretch pb-[30px]">
													<span className="flex-1 text-[#333333] text-[18px] font-bold">
														{"AI Response Tone"}
													</span>
													<div className="flex shrink-0 items-center">
														<span className="text-[#636363] text-[18px] mr-[19px]">
															{"Professional"}
														</span>
														<img
															src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wsaq7dgVrF/z43szn6l_expires_30_days.png"} 
															className="w-[24px] h-[24px] object-fill"
														/>
													</div>
												</div>
												<div className="self-stretch bg-[#AAAAAA] h-[1px] mb-[29px]"></div>
												<div className="flex items-center self-stretch pb-[30px]">
													<span className="flex-1 text-[#333333] text-[18px] font-bold">
														{"AI Language"}
													</span>
													<div className="flex shrink-0 items-center">
														<span className="text-[#636363] text-[18px] mr-[19px]">
															{"English"}
														</span>
														<img
															src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wsaq7dgVrF/z43szn6l_expires_30_days.png"} 
															className="w-[24px] h-[24px] object-fill"
														/>
													</div>
												</div>
											</div>
										)}
										
										{activeSection === "emailPhoneSetup" && (
											<div className="self-stretch ml-[25px] mr-[25px]">
												<div className="flex items-center self-stretch pb-[20px]">
													<span className="flex-1 text-[#333333] text-[18px] font-bold">
														{"Contact Preferences"}
													</span>
												</div>
												<div className="self-stretch bg-[#AAAAAA] h-[1px] mb-[29px]"></div>
												<div className="flex items-center self-stretch pb-[30px]">
													<span className="flex-1 text-[#333333] text-[18px] font-bold">
														{"Primary Email"}
													</span>
													<span className="text-[#636363] text-[18px]">
														{"kadinstanton@gmail.com"}
													</span>
												</div>
												<div className="self-stretch bg-[#AAAAAA] h-[1px] mb-[29px]"></div>
												<div className="flex items-center self-stretch pb-[30px]">
													<span className="flex-1 text-[#333333] text-[18px] font-bold">
														{"Phone Number"}
													</span>
													<span className="text-[#636363] text-[18px]">
														{"1234567890"}
													</span>
												</div>
												<div className="self-stretch bg-[#AAAAAA] h-[1px] mb-[29px]"></div>
												<div className="flex items-center self-stretch pb-[30px]">
													<span className="flex-1 text-[#333333] text-[18px] font-bold">
														{"Communication Preferences"}
													</span>
													<div className="flex shrink-0 items-center">
														<span className="text-[#636363] text-[18px] mr-[19px]">
															{"Email & SMS"}
														</span>
														<img
															src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wsaq7dgVrF/z43szn6l_expires_30_days.png"} 
															className="w-[24px] h-[24px] object-fill"
														/>
													</div>
												</div>
											</div>
										)}
										
										{activeSection === "subscriptionUsage" && (
											<div className="self-stretch ml-[25px] mr-[25px]">
												<div className="flex items-center self-stretch pb-[20px]">
													<span className="flex-1 text-[#333333] text-[18px] font-bold">
														{"Subscription Plan"}
													</span>
													<div className="flex shrink-0 items-center">
														<span className="text-white text-[14px] font-medium bg-[#3059FE] px-3 py-1 rounded-full mr-[15px]">
															{"PRO"}
														</span>
													</div>
												</div>
												<div className="self-stretch bg-[#AAAAAA] h-[1px] mb-[29px]"></div>
												<div className="flex items-center self-stretch pb-[30px]">
													<span className="flex-1 text-[#333333] text-[18px] font-bold">
														{"Billing Cycle"}
													</span>
													<div className="flex shrink-0 items-center">
														<span className="text-[#636363] text-[18px] mr-[19px]">
															{"Monthly"}
														</span>
														<img
															src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wsaq7dgVrF/z43szn6l_expires_30_days.png"} 
															className="w-[24px] h-[24px] object-fill"
														/>
													</div>
												</div>
												<div className="self-stretch bg-[#AAAAAA] h-[1px] mb-[29px]"></div>
												<div className="flex items-center self-stretch pb-[30px]">
													<span className="flex-1 text-[#333333] text-[18px] font-bold">
														{"Next Billing Date"}
													</span>
													<span className="text-[#636363] text-[18px]">
														{"June 15, 2023"}
													</span>
												</div>
												<div className="self-stretch bg-[#AAAAAA] h-[1px] mb-[29px]"></div>
												<div className="flex items-center self-stretch pb-[30px]">
													<span className="flex-1 text-[#333333] text-[18px] font-bold">
														{"Payment Method"}
													</span>
													<div className="flex shrink-0 items-center">
														<span className="text-[#636363] text-[18px] mr-[19px]">
															{"Visa ****4231"}
														</span>
														<img
															src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wsaq7dgVrF/z43szn6l_expires_30_days.png"} 
															className="w-[24px] h-[24px] object-fill"
														/>
													</div>
												</div>
											</div>
										)}
										
										<div className="self-stretch bg-[#AAAAAA] h-[1px] mb-[54px] ml-[25px] mr-[25px]">
										</div>
										<div className="flex items-start self-stretch mb-[25px] ml-[346px] mr-[346px]">
											<div className="flex flex-1 flex-col pt-[10px] pb-[10px] mr-[30px] rounded-[8px] border-[1px] border-solid border-[#FF4C51] cursor-pointer hover:bg-[#FF4C5110]">
												<span className="text-center text-[#FF4C51] text-[18px] ml-[30px] mr-[30px]" >
													{"Delete Account"}
												</span>
											</div>
											<div className="flex flex-1 flex-col bg-[#FF4C51] pt-[10px] pb-[10px] rounded-[8px] border-[1px] border-solid border-[#FF4C51] cursor-pointer hover:bg-[#FF3C41]">
												<span className="text-center text-[#FFFFFF] text-[18px] font-bold ml-[59px] mr-[59px]" >
													{"Sign Out"}
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
				</main>
			</div>
		</PageTransition>
	);
}