import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import platformSetupIcon from "../assets/platform-stup-icon.svg";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  // Check for mobile view on component mount and window resize
  useEffect(() => {
    const checkForMobileView = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    
    // Initial check
    checkForMobileView();
    
    // Add resize listener
    window.addEventListener('resize', checkForMobileView);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkForMobileView);
  }, []);

  const menuItems = [
    {
      name: "Platform Setup",
      icon: platformSetupIcon,
      path: "/platform-setup",
      active: currentPath === "/platform-setup",
    },
    {
      name: "AI Agent",
      icon: "https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/8b9e9101defc6ad99ec4430d3ecedc06cdc06e8f?placeholderIfAbsent=true",
      path: "/ai-agent",
      active: currentPath === "/ai-agent",
    },
    {
      name: "Dashboard",
      icon: "https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/fd09e198f12c57e2d03e44eddc63e84b98cc3188?placeholderIfAbsent=true",
      path: "/dashboard",
      active: currentPath === "/dashboard",
    },
    {
      name: "Campaign",
      icon: "https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/4de6e5109238309216bddfc95ef085a2ded39479?placeholderIfAbsent=true",
      path: "/campaign",
      active: currentPath === "/campaign",
    },
    {
      name: "Promoters",
      icon: "https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/aae8f37a27a095783ff1f3e8ec2ebb4ebaf52ff5?placeholderIfAbsent=true",
      path: "/promoters",
      active: currentPath === "/promoters",
    },
    {
      name: "Leads",
      icon: "https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/74d29f8eed60254efa5b70a810b3d72739c7c114?placeholderIfAbsent=true",
      path: "/leads",
      active: currentPath === "/leads",
    },
    {
      name: "Payouts",
      icon: "https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/1e5a46ce258f5e0b49779edc2d69539f471b4bf7?placeholderIfAbsent=true",
      path: "/payouts",
      active: currentPath === "/payouts",
    },
  ];

  const bottomMenuItems = [
    {
      name: "Settings",
      icon: "https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/a9cca7237cba8153e14d0b1ec5751f68ff20cf49?placeholderIfAbsent=true",
      path: "/settings",
      active: currentPath === "/settings",
    },
    {
      name: "Help",
      icon: "https://cdn.builder.io/api/v1/image/assets/0f6176394f8a4b40b34a374327492484/363394b1fab287abda6c16f6efa94810db1417ed?placeholderIfAbsent=true",
      path: "#",
    },
  ];

  const handleNavigation = (path) => {
    if (path !== "#") {
      navigate(path);
      if (isMobileView) {
        setIsMobileMenuOpen(false);
      }
    }
  };

  // Find the active menu item for mobile display
  const activeMenuItem = [...menuItems, ...bottomMenuItems].find(item => item.active) || menuItems[0];

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      {isMobileView && (
        <div className="flex items-center justify-between w-full bg-white rounded-xl p-3 mb-3">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <img
              src={activeMenuItem.icon}
              className="object-contain shrink-0 my-auto w-6 h-6"
              alt={`${activeMenuItem.name} icon`}
            />
            <span className="font-medium text-blue-600">{activeMenuItem.name}</span>
            
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className={`w-5 h-5 transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>
      )}
      
      {/* Sidebar Navigation */}
      <nav 
        className={`h-full flex flex-col text-sm font-medium text-blue-600 bg-white rounded-3xl border border-gray-100 border-solid
          ${isMobileView ? (isMobileMenuOpen ? 'block absolute z-10 w-3/4 top-[60px] left-4 shadow-lg' : 'hidden') : 'block'}`}
      >
        <div className="flex-1 overflow-y-auto py-4">
          <div className="w-full max-w-full">
            <ul className="w-full">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`flex gap-2 items-center py-3 pl-4 ${index > 0 ? "mt-1.5" : ""} w-full rounded-none 
                    ${item.active 
                      ? "text-blue-600 border-l-[5px] border-blue-600 pl-[13px] bg-blue-50" 
                      : "hover:bg-blue-50"} 
                    cursor-pointer`}
                  onClick={() => handleNavigation(item.path)}
                >
                  <img
                    src={item.icon}
                    className="object-contain shrink-0 my-auto w-6 h-6"
                    alt={`${item.name} icon`}
                  />
                  <span className="my-auto">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="py-4 w-full">
          <hr className="w-full min-h-0 border border-solid border-neutral-200" />
          <ul className="pt-2">
            {bottomMenuItems.map((item, index) => (
              <li
                key={index}
                className={`flex gap-4 items-center py-3 pl-5 mt-1.5 w-full rounded-xl cursor-pointer hover:bg-blue-50 ${
                  item.active ? "text-blue-600 bg-blue-50" : ""
                }`}
                onClick={() => handleNavigation(item.path)}
              >
                <img
                  src={item.icon}
                  className="object-contain shrink-0 my-auto w-6 h-6"
                  alt={`${item.name} icon`}
                />
                <span className="my-auto">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
