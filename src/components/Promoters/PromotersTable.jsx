import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import eyeIcon from "../../assets/eye-icon.png";
import messageIcon from "../../assets/message-up.png";
import PromoterStatusBadge from "./PromoterStatusBadge";

function PromotersTable() {
  const [selectedPromoters, setSelectedPromoters] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);
  
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

  const handleViewPromoter = (id) => {
    navigate(`/promoters/${id}`);
  };

  // Mobile view - Card layout
  const renderMobileView = () => {
    return (
      <div className="w-full">
        <div className="flex justify-between items-center mb-4 px-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="w-4 h-4 cursor-pointer mr-2"
              checked={selectedPromoters.length === promoters.length}
              onChange={toggleSelectAll}
              aria-label="Select all promoters"
            />
            <span className="text-sm font-semibold">Select All</span>
          </div>
          <div className="text-sm text-gray-500">
            {selectedPromoters.length} selected
          </div>
        </div>
        
        {promoters.map((promoter) => (
          <div key={promoter.id} className="bg-white rounded-lg p-4 mb-4 border border-gray-200 shadow-sm">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 cursor-pointer mr-2"
                  checked={selectedPromoters.includes(promoter.id)}
                  onChange={() => toggleSelectPromoter(promoter.id)}
                  aria-label={`Select ${promoter.name}`}
                />
                <div>
                  <h3 className="font-medium text-sm">{promoter.name}</h3>
                  <p className="text-xs text-gray-500">{promoter.contact}</p>
                </div>
              </div>
              <PromoterStatusBadge status={promoter.status} />
            </div>
            
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="text-xs">
                <span className="text-gray-500">Revenue:</span>
                <span className="ml-1 font-medium">{promoter.revenueGenerated}</span>
              </div>
              <div className="text-xs">
                <span className="text-gray-500">Leads:</span>
                <span className="ml-1 font-medium">{promoter.leads}</span>
              </div>
              <div className="text-xs">
                <span className="text-gray-500">Conv. Rate:</span>
                <span className="ml-1 font-medium">{promoter.conversionRate}</span>
              </div>
              <div className="text-xs">
                <span className="text-gray-500">Last Follow-Up:</span>
                <span className="ml-1 font-medium">{promoter.lastFollowUp}</span>
              </div>
            </div>
            
            <div className="flex justify-end gap-3 mt-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/15351fa4142869ab40f38e92908a2c28efa8aade?placeholderIfAbsent=true"
                className="object-contain w-5 h-5 cursor-pointer"
                alt="More options"
              />
              <img
                src={eyeIcon}
                className="object-contain w-5 h-5 cursor-pointer"
                alt="View promoter details"
                onClick={() => handleViewPromoter(promoter.id)}
              />
              <img
                src={messageIcon}
                className="object-contain w-5 h-5 cursor-pointer"
                alt="Message promoter"
              />
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Desktop view - Table layout
  const renderDesktopView = () => {
    return (
      <div className="w-full min-w-[640px]">
        <table className="w-full">
          <thead>
            <tr className="flex gap-2 sm:gap-8 items-center mb-6">
              <th className="w-6">
                <input
                  type="checkbox"
                  className="w-4 h-4 cursor-pointer"
                  checked={selectedPromoters.length === promoters.length}
                  onChange={toggleSelectAll}
                  aria-label="Select all promoters"
                />
              </th>
              <th className="flex-1 text-left text-xs sm:text-sm font-semibold text-zinc-800 w-[80px] sm:w-[103px]">Promoter</th>
              <th className="flex-1 text-center text-xs sm:text-sm font-semibold text-zinc-800 w-[80px] sm:w-[106px]">Contact</th>
              <th className="flex-1 text-center text-xs sm:text-sm font-semibold text-zinc-800 w-9 max-sm:hidden">Leads</th>
              <th className="flex-1 text-center text-xs sm:text-sm font-semibold text-zinc-800 w-[90px] sm:w-[107px] max-sm:hidden">Conv. Rate</th>
              <th className="flex-1 text-center text-xs sm:text-sm font-semibold text-zinc-800 w-[80px] sm:w-[97px] max-sm:hidden">Follow-Up</th>
              <th className="flex-1 text-center text-xs sm:text-sm font-semibold text-zinc-800 w-[80px] sm:w-[129px]">Revenue</th>
              <th className="flex-1 text-center text-xs sm:text-sm font-semibold text-zinc-800 w-[70px] sm:w-[98px]">Status</th>
              <th className="flex-1 text-center text-xs sm:text-sm font-semibold text-zinc-800 w-[60px] sm:w-[70px]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {promoters.map((promoter) => (
              <tr key={promoter.id} className="flex gap-2 sm:gap-8 items-center mb-8">
                <td className="w-6">
                  <input
                    type="checkbox"
                    className="w-4 h-4 cursor-pointer"
                    checked={selectedPromoters.includes(promoter.id)}
                    onChange={() => toggleSelectPromoter(promoter.id)}
                    aria-label={`Select ${promoter.name}`}
                  />
                </td>
                <td className="flex-1 text-xs sm:text-sm text-stone-500 w-[80px] sm:w-[103px] truncate">{promoter.name}</td>
                <td className="flex-1 text-center text-xs sm:text-sm text-stone-500 w-[80px] sm:w-[106px] truncate">{promoter.contact}</td>
                <td className="flex-1 text-center text-xs sm:text-sm text-stone-500 w-9 max-sm:hidden">{promoter.leads}</td>
                <td className="flex-1 text-center text-xs sm:text-sm text-stone-500 w-[90px] sm:w-[107px] max-sm:hidden">{promoter.conversionRate}</td>
                <td className="flex-1 text-center text-xs sm:text-sm text-stone-500 w-[80px] sm:w-[97px] max-sm:hidden">{promoter.lastFollowUp}</td>
                <td className="flex-1 text-center text-xs sm:text-sm text-stone-500 w-[80px] sm:w-[129px]">{promoter.revenueGenerated}</td>
                <td className="flex-1 flex justify-center text-xs sm:text-sm w-[70px] sm:w-[98px]">
                  <PromoterStatusBadge status={promoter.status} />
                </td>
                <td className="flex-1 flex gap-1 sm:gap-2 justify-center items-center w-[60px] sm:w-[70px]">
                  <img
                    src={eyeIcon}
                    className="object-contain w-4 sm:w-5 h-4 sm:h-5 cursor-pointer"
                    alt="View promoter details"
                    onClick={() => handleViewPromoter(promoter.id)}
                  />
                  <img
                    src={messageIcon}
                    className="object-contain w-4 sm:w-5 h-4 sm:h-5 cursor-pointer"
                    alt="Message promoter"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="flex flex-wrap gap-8 items-start py-5 px-4 mt-6 sm:pr-8 w-full bg-white rounded-lg border border-solid border-stone-300 max-md:max-w-full overflow-x-auto">
      {isMobile ? renderMobileView() : renderDesktopView()}
    </div>
  );
}

export default PromotersTable;
