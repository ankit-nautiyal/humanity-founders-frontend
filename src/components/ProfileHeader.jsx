import React from "react";
import { CiSearch } from 'react-icons/ci';
import { HiBell } from 'react-icons/hi';
import { RiArrowDownSLine } from 'react-icons/ri';
import { useLocation } from "react-router-dom";
import Avatar from './Avatar';

function ProfileHeader({ avatar = '/avatars/avatar-1.png', name = 'John Doe', email = 'john@example.com', username = 'johndoe', title }) {
  const location = useLocation();
  const path = location.pathname;

  // Function to get the page title based on the current route
  const getPageTitle = () => {
    // If a custom title is provided, use it
    if (title) return title;

    // Otherwise, determine title from the path
    switch (true) {
      case path === '/dashboard':
        return 'Dashboard';
      case path === '/campaign':
        return 'Campaign';
      case path === '/promoters':
        return 'Promoters';
      case path.startsWith('/promoters/'):
        return 'Promoter Details';
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
        
        <div className="flex items-center gap-2">
          <Avatar src={avatar} size="sm" />
          <div className="hidden md:block">
            <p className="text-sm font-medium text-zinc-800">{name}</p>
            <p className="text-xs text-gray-500">@{username}</p>
          </div>
          <RiArrowDownSLine className="text-gray-500 hidden md:block" />
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
