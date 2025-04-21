"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Divider from "./Divider";

function MagicLinkSection() {
  const [magicLinkEmail, setMagicLinkEmail] = useState("");
  const [magicLinkEmailError, setMagicLinkEmailError] = useState("");

  const validateMagicLinkEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setMagicLinkEmailError("Email is required");
      return false;
    } else if (!emailRegex.test(email)) {
      setMagicLinkEmailError("Please enter a valid email address");
      return false;
    }
    setMagicLinkEmailError("");
    return true;
  };

  const handleSendMagicLink = (e) => {
    e.preventDefault();
    
    const isEmailValid = validateMagicLinkEmail(magicLinkEmail);
    
    if (isEmailValid) {
      toast.info("Magic link sent! Please check your email", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      
      // Here you would typically send the magic link email
    }
  };

  return (
    <div className="mt-3 w-full">
      <form onSubmit={handleSendMagicLink} className="w-full">
        <div className="w-full">
          <div className="flex flex-col w-full rounded-lg">
            <label className="self-start text-sm text-zinc-800">
              Magic Link Login
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className={`w-full p-2 mt-1 text-base bg-white rounded-lg border border-solid ${magicLinkEmailError ? "border-red-500" : "border-stone-300"} text-zinc-800`}
              value={magicLinkEmail}
              onChange={(e) => {
                setMagicLinkEmail(e.target.value);
                if (magicLinkEmailError) validateMagicLinkEmail(e.target.value);
              }}
            />
            {magicLinkEmailError && <p className="text-red-500 text-xs mt-1">{magicLinkEmailError}</p>}
          </div>
        </div>

        <div className="mt-2 w-full">
          <button 
            type="submit"
            className="w-full text-base font-medium text-center text-white rounded-lg h-[40px] overflow-hidden"
            style={{
              background: 'linear-gradient(90deg, rgba(48, 90, 255, 0.8) 0%, #B5D2FF 100%)',
              borderRadius: '8px'
            }}
          >
            Send Magic Link
          </button>

          <Divider />
        </div>
      </form>
    </div>
  );
}

export default MagicLinkSection;
