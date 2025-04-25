import React, { useState } from "react";
import eyeIcon from "../../assets/eye-icon.png";
import messageIcon from "../../assets/message-up.png";
import PromoterStatusBadge from "./PromoterStatusBadge";

function PromotersTable() {
  const [selectedPromoters, setSelectedPromoters] = useState([]);
  
  const promoters = [
    {
      id: 1,
      name: "Emery Dokidis",
      contact: "+979970174715",
      leads: "12",
      conversionRate: "50%",
      lastFollowUp: "28-4-2024",
      revenueGenerated: "$50",
      status: "Active",
    },
    {
      id: 2,
      name: "Kadin Lipshutz",
      contact: "+971501948279",
      leads: "8",
      conversionRate: "30%",
      lastFollowUp: "27-5-2024",
      revenueGenerated: "$900",
      status: "Active",
    },
    {
      id: 3,
      name: "Randy Culhane",
      contact: "+971501598978",
      leads: "15",
      conversionRate: "60%",
      lastFollowUp: "29-5-2024",
      revenueGenerated: "$1000",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Jaxson Vaccaro",
      contact: "+971522503635",
      leads: "10",
      conversionRate: "45%",
      lastFollowUp: "30-6-2024",
      revenueGenerated: "$500",
      status: "Completed",
    },
    {
      id: 5,
      name: "Jocelyn Levin",
      contact: "+971554315300",
      leads: "6",
      conversionRate: "28%",
      lastFollowUp: "01-7-2024",
      revenueGenerated: "$1,500",
      status: "Inactive",
    },
    {
      id: 6,
      name: "Maren Septimus",
      contact: "+971525620832",
      leads: "18",
      conversionRate: "65%",
      lastFollowUp: "03-7-2024",
      revenueGenerated: "$2,000",
      status: "Completed",
    },
    {
      id: 7,
      name: "Haylie Saris",
      contact: "+971503328228",
      leads: "13",
      conversionRate: "58%",
      lastFollowUp: "05-7-2024",
      revenueGenerated: "$300",
      status: "Active",
    },
    {
      id: 8,
      name: "Randy Herwitz",
      contact: "+971554231522",
      leads: "12",
      conversionRate: "50%",
      lastFollowUp: "10-7-2024",
      revenueGenerated: "$600",
      status: "Inactive",
    },
  ];

  const toggleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedPromoters(promoters.map(p => p.id));
    } else {
      setSelectedPromoters([]);
    }
  };

  const toggleSelectPromoter = (id) => {
    if (selectedPromoters.includes(id)) {
      setSelectedPromoters(selectedPromoters.filter(p => p !== id));
    } else {
      setSelectedPromoters([...selectedPromoters, id]);
    }
  };

  return (
    <div className="flex flex-wrap gap-8 items-start py-5 pr-8 pl-4 mt-6 mr-8 w-full bg-white rounded-lg border border-solid border-stone-300 max-md:max-w-full">
      <table className="w-full">
        <thead>
          <tr className="flex gap-8 items-center mb-6">
            <th className="w-6">
              <input
                type="checkbox"
                className="w-4 h-4 cursor-pointer"
                checked={selectedPromoters.length === promoters.length}
                onChange={toggleSelectAll}
                aria-label="Select all promoters"
              />
            </th>
            <th className="flex-1 text-left text-sm font-semibold text-zinc-800 w-[103px]">Promoter Name</th>
            <th className="flex-1 text-center text-sm font-semibold text-zinc-800 w-[106px]">Contact No.</th>
            <th className="flex-1 text-center text-sm font-semibold text-zinc-800 w-9 max-md:hidden">Leads</th>
            <th className="flex-1 text-center text-sm font-semibold text-zinc-800 w-[107px]">Conversion Rate</th>
            <th className="flex-1 text-center text-sm font-semibold text-zinc-800 w-[97px]">Last Follow-Up</th>
            <th className="flex-1 text-center text-sm font-semibold text-zinc-800 w-[129px]">Revenue Generated</th>
            <th className="flex-1 text-center text-sm font-semibold text-zinc-800 w-[98px]">Referrer Status</th>
            <th className="flex-1 text-center text-sm font-semibold text-zinc-800 w-[70px]">Actions</th>
          </tr>
        </thead>
        <tbody>
          {promoters.map((promoter) => (
            <tr key={promoter.id} className="flex gap-8 items-center mb-8">
              <td className="w-6">
                <input
                  type="checkbox"
                  className="w-4 h-4 cursor-pointer"
                  checked={selectedPromoters.includes(promoter.id)}
                  onChange={() => toggleSelectPromoter(promoter.id)}
                  aria-label={`Select ${promoter.name}`}
                />
              </td>
              <td className="flex-1 text-sm text-stone-500 w-[103px]">{promoter.name}</td>
              <td className="flex-1 text-center text-sm text-stone-500 w-[106px]">{promoter.contact}</td>
              <td className="flex-1 text-center text-sm text-stone-500 w-9 max-md:hidden">{promoter.leads}</td>
              <td className="flex-1 text-center text-sm text-stone-500 w-[107px]">{promoter.conversionRate}</td>
              <td className="flex-1 text-center text-sm text-stone-500 w-[97px]">{promoter.lastFollowUp}</td>
              <td className="flex-1 text-center text-sm text-stone-500 w-[129px]">{promoter.revenueGenerated}</td>
              <td className="flex-1 flex justify-center text-sm w-[98px]">
                <PromoterStatusBadge status={promoter.status} />
              </td>
              <td className="flex-1 flex gap-2 justify-center items-center w-[70px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/15351fa4142869ab40f38e92908a2c28efa8aade?placeholderIfAbsent=true"
                  className="object-contain w-5 h-5 cursor-pointer"
                  alt="More options"
                />
                <img
                  src={eyeIcon}
                  className="object-contain w-5 h-5 cursor-pointer"
                  alt="View promoter details"
                />
                <img
                  src={messageIcon}
                  className="object-contain w-5 h-5 cursor-pointer"
                  alt="Message promoter"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PromotersTable;
