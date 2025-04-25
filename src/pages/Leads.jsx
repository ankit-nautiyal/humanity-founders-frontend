import React, { useState } from "react";
import eyeIcon from "../assets/eye-icon.png";
import messageIcon from "../assets/message-up.png";
import FilterButton from "../components/Leads/FilterButton";
import SearchBar from "../components/Leads/SearchBar";
import StatusButton from "../components/Leads/StatusButton";
import PageTransition from "../components/PageTransition";
import ProfileHeader from "../components/ProfileHeader";
import Sidebar from "../components/Sidebar";

function Leads() {
  const [selectedLeads, setSelectedLeads] = useState([]);
  
  // Sample data for leads
  const leads = [
    {
      id: 1,
      name: "Emery Dokidis",
      email: "emerydoki@gmail.com",
      contact: "+979970174715",
      couponCode: "SAVE10NOW",
      status: "Pending",
    },
    {
      id: 2,
      name: "Kadin Lipshutz",
      email: "kadinlipshutz@gmail.com",
      contact: "+971501948279",
      couponCode: "WELCOME15",
      status: "Pending",
    },
    {
      id: 3,
      name: "Randy Culhane",
      email: "randyculhane@gmail.com",
      contact: "+971501598978",
      couponCode: "EXCLUSIVE20",
      status: "Pending",
    },
    {
      id: 4,
      name: "Jaxson Vaccaro",
      email: "jaxonvaccaro@gmail.com",
      contact: "+971522503635",
      couponCode: "GETDEAL25",
      status: "Completed",
    },
    {
      id: 5,
      name: "Jocelyn Levin",
      email: "jocelynlevin@gmail.com",
      contact: "+971554315300",
      couponCode: "FIRSTORDER10",
      status: "Pending",
    },
    {
      id: 6,
      name: "Maren Septimus",
      email: "marenseptimus@gmail.com",
      contact: "+971525620832",
      couponCode: "SPECIALSAVE15",
      status: "Completed",
    },
    {
      id: 7,
      name: "Haylie Saris",
      email: "hayluesaris@gmail.com",
      contact: "+971503328228",
      couponCode: "LIMITED20",
      status: "Completed",
    },
    {
      id: 8,
      name: "Randy Herwitz",
      email: "randyherwitz@gmail.com",
      contact: "+971554231522",
      couponCode: "TRYUS10",
      status: "Pending",
    },
  ];

  const toggleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedLeads(leads.map(lead => lead.id));
    } else {
      setSelectedLeads([]);
    }
  };

  const toggleSelectLead = (id) => {
    if (selectedLeads.includes(id)) {
      setSelectedLeads(selectedLeads.filter(leadId => leadId !== id));
    } else {
      setSelectedLeads([...selectedLeads, id]);
    }
  };

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

                <div className="bg-white rounded-xl shadow-sm mt-6">
                  <div className="p-6">
                    <div className="flex flex-wrap justify-between items-center w-full mb-6">
                      <h2 className="text-lg font-semibold text-zinc-900">
                        Leads
                      </h2>
                      <div className="flex items-center gap-6">
                        <SearchBar />
                        <StatusButton />
                        <FilterButton />
                      </div>
                    </div>
                    
                    <div className="w-full border border-solid border-stone-300 rounded-lg overflow-hidden">
                      <table className="w-full text-sm">
                        <thead className="bg-white border-b border-gray-200">
                          <tr>
                            <th className="px-4 py-3 text-left">
                              <input
                                type="checkbox"
                                className="w-4 h-4 cursor-pointer"
                                checked={selectedLeads.length === leads.length}
                                onChange={toggleSelectAll}
                                aria-label="Select all leads"
                              />
                            </th>
                            <th className="px-4 py-3 text-left font-semibold text-zinc-800">Lead Name</th>
                            <th className="px-4 py-3 text-left font-semibold text-zinc-800">Email ID</th>
                            <th className="px-4 py-3 text-left font-semibold text-zinc-800">Contact No.</th>
                            <th className="px-4 py-3 text-left font-semibold text-zinc-800">Coupon Code</th>
                            <th className="px-4 py-3 text-left font-semibold text-zinc-800">Status</th>
                            <th className="px-4 py-3 text-center font-semibold text-zinc-800">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {leads.map((lead) => (
                            <tr key={lead.id} className="border-b border-gray-100 hover:bg-gray-50">
                              <td className="px-4 py-4">
                                <input
                                  type="checkbox"
                                  className="w-4 h-4 cursor-pointer"
                                  checked={selectedLeads.includes(lead.id)}
                                  onChange={() => toggleSelectLead(lead.id)}
                                  aria-label={`Select ${lead.name}`}
                                />
                              </td>
                              <td className="px-4 py-4 text-stone-500">{lead.name}</td>
                              <td className="px-4 py-4 text-stone-500">{lead.email}</td>
                              <td className="px-4 py-4 text-stone-500">{lead.contact}</td>
                              <td className="px-4 py-4 text-stone-500">{lead.couponCode}</td>
                              <td className="px-4 py-4">
                                <span className={`px-2.5 py-1.5 rounded-lg text-white ${
                                  lead.status === "Completed" 
                                    ? "bg-green-500" 
                                    : "bg-orange-400"
                                }`}>
                                  {lead.status}
                                </span>
                              </td>
                              <td className="px-4 py-4 text-center">
                                <div className="flex gap-4 justify-center">
                                  <img
                                    src={eyeIcon}
                                    className="object-contain w-5 h-5 cursor-pointer"
                                    alt="View lead details"
                                  />
                                  <img
                                    src={messageIcon}
                                    className="object-contain w-5 h-5 cursor-pointer"
                                    alt="Message lead"
                                  />
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
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

export default Leads;
