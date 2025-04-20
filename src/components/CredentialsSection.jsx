"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Divider from "./Divider";
import SocialLoginSection from "./SocialLoginSection";

function CredentialsSection() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError("Email is required");
      return false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePassword = (password) => {
    if (!password.trim()) {
      setPasswordError("Password is required");
      return false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    
    if (isEmailValid && isPasswordValid) {
      toast.success("Logged in successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      
      // Here you would typically handle the actual login API call
    }
  };

  return (
    <div className="mt-3 max-w-[400px] w-full">
      <form onSubmit={handleLogin} className="w-full">
        <div className="w-full">
          <div className="flex flex-col w-full whitespace-nowrap rounded-lg">
            <label className="self-start text-sm text-zinc-800">Email</label>
            <input
              type="email"
              placeholder="robert.fox@myemail.com"
              className={`w-full p-2 mt-1 text-base bg-white rounded-lg border border-solid ${emailError ? "border-red-500" : "border-stone-300"} text-zinc-800`}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (emailError) validateEmail(e.target.value);
              }}
            />
            {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
          </div>

          <div className="flex flex-col mt-2 w-full rounded-none">
            <label className="self-start text-sm text-zinc-800">
              Password
            </label>
            <div className={`flex w-full justify-between px-3 py-2 mt-1 text-base bg-white rounded-lg border border-solid ${passwordError ? "border-red-500" : "border-stone-300"} text-zinc-800`}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="my-auto bg-transparent border-none outline-none w-full text-zinc-800"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (passwordError) validatePassword(e.target.value);
                }}
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                )}
              </button>
            </div>
            {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
          </div>

          <div className="flex justify-between items-baseline mt-2 w-full text-sm">
            <label className="flex gap-2 text-neutral-600 cursor-pointer items-baseline">
              <input type="checkbox" className="w-3 h-3 bo accent-blue-600 rounded-2xl" />
              <span className="basis-auto">Remember Me</span>
            </label>

            <a href="#" className="text-blue-600">Forgot password?</a>
          </div>
        </div>

        <div className="mt-3 w-full">
          <button 
            type="submit" 
            className="w-full text-base font-medium text-center text-white bg-indigo-500 rounded-lg h-[40px] overflow-hidden"
          >
            <div className="flex items-center justify-center py-2 w-full h-full bg-indigo-500 border border-indigo-600 border-solid">
              Login
            </div>
          </button>

          <div className="flex flex-col justify-center mt-2 w-full">
            <Divider />
            <SocialLoginSection />
          </div>
        </div>
      </form>
    </div>
  );
}

export default CredentialsSection;
