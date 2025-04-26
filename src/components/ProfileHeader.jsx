import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from 'react-icons/ci';
import { HiBell } from 'react-icons/hi';
import { RiArrowDownSLine, RiLogoutBoxLine, RiUserSettingsLine } from 'react-icons/ri';
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import Avatar from './Avatar';

function ProfileHeader({ avatar = '/assets/profilePic.png', name = 'Kadin Stanton', email = 'kadinstanton@gmail.com', title }) {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Function to get the page title based on the current route
  const getPageTitle = () => {
    // If a custom title is provided, use it
    if (title) return title;

    // Otherwise, determine title from the path
    switch (true) {
      case path === '/platform-setup':
        return 'Platform Setup';
      case path === '/dashboard':
        return 'Dashboard';
      case path === '/campaign':
        return 'Campaign';
      case path === '/promoters':
        return 'Promoters';
      case path === '/leads':
        return 'Leads';
      case path === '/payouts':
        return 'Payouts';
      case path === '/settings':
        return 'Settings & Preferences';
      case path === '/ai-agent':
        return 'AI Agent';
      default:
        return 'Welcome';
    }
  };

  // Function to get shorter titles for mobile view
  const getMobileTitle = () => {
    const fullTitle = getPageTitle();
    switch (fullTitle) {
      case 'Settings & Preferences':
        return 'Settings';
      default:
        return fullTitle;
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Close dropdown
    setIsDropdownOpen(false);
    
    // Remove auth tokens from localStorage
    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');
    localStorage.setItem('loginToastShown', 'false');
    
    // First navigate to login
    navigate('/login');

    // Then show toast after navigation
    setTimeout(() => {
      toast.success('Logged out successfully', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        // theme: "colored"
      });
    }, 100); // Small delay to ensure navigation completes first
  };

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-5 md:px-8 py-4 md:py-5 bg-white">
      <div>
        <h1 className="text-2xl font-semibold text-zinc-800 hidden md:block">{getPageTitle()}</h1>
        <h1 className="text-xl font-semibold text-zinc-800 md:hidden">{getMobileTitle()}</h1>
      </div>

      <div className="flex items-center gap-3 md:gap-5 mt-3 md:mt-0 w-full md:w-auto justify-between md:justify-end">
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-100 rounded-lg pl-10 pr-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[200px]"
          />
          <CiSearch className="absolute left-3 top-2.5 text-gray-500 text-lg" />
        </div>
        
        <div className="relative">
          <button className="p-2 bg-gray-100 rounded-lg relative">
            <HiBell className="text-gray-600 text-xl" />
            <span className="absolute top-1 right-1 bg-red-500 rounded-full w-2 h-2"></span>
          </button>
        </div>
        
        <div className="relative" ref={dropdownRef}>
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={toggleDropdown}
          >
            <Avatar src={avatar} size="sm" />
            <div className="hidden md:block">
              <p className="text-sm font-medium text-zinc-800">{name}</p>
              <p className="text-xs text-gray-500">{email}</p>
            </div>
            <RiArrowDownSLine className={`text-gray-500 ${isDropdownOpen ? 'rotate-180' : ''} transition-transform duration-200`} />
          </div>
          
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
              <a href="/settings" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <RiUserSettingsLine className="mr-2 text-gray-500" />
                Profile Settings
              </a>
              <button 
                onClick={handleLogout} 
                className="flex items-center w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
              >
                <RiLogoutBoxLine className="mr-2" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
