"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../utils/api";
import Divider from "./Divider";
import SocialLoginSection from "./SocialLoginSection";

function CredentialsSection() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error when field is changed
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    // Email validation
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Password validation
    if (!formData.password.trim()) {
      tempErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // Call the actual login API endpoint
        const response = await api.auth.login(formData.email, formData.password);
        
        // Check if we have a user in the response
        if (response.user) {
          // Store user data
          localStorage.setItem('user', JSON.stringify(response.user));
        }

        // First navigate to platform setup
        navigate('/platform-setup');
        
        // Then show toast after navigation
        setTimeout(() => {
          toast.success("Logged in successfully!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            // theme: "colored"
          });
        }, 100); // Small delay to ensure navigation completes first
        
      } catch (error) {
        // Show error message from API
        const errorMessage = error.data?.error || "Login failed. Please check your credentials.";
        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 3000,
          theme: "colored"
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="mt-3 w-full max-w-[400px]">
      <form onSubmit={handleLogin} className="w-full">
        <div className="w-full">
          <div className="flex flex-col w-full whitespace-nowrap rounded-lg">
            <label className="self-start text-sm text-zinc-800">Email</label>
            <input
              type="email"
              name="email"
              placeholder="robert.fox@myemail.com"
              className={`w-full p-2 mt-1 text-base bg-white rounded-lg border border-solid ${errors.email ? "border-red-500" : "border-stone-300"} text-zinc-800`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div className="flex flex-col mt-2 w-full rounded-none">
            <label className="self-start text-sm text-zinc-800">
              Password
            </label>
            <div className={`flex w-full justify-between px-3 py-2 mt-1 text-base bg-white rounded-lg border border-solid ${errors.password ? "border-red-500" : "border-stone-300"} text-zinc-800`}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                className="my-auto bg-transparent border-none outline-none w-full text-zinc-800"
                value={formData.password}
                onChange={handleChange}
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
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          <div className="flex flex-wrap justify-between items-baseline mt-2 w-full text-sm gap-y-2">
            <label className="flex gap-2 text-neutral-600 cursor-pointer items-baseline">
              <input type="checkbox" className="w-3 h-3 bo accent-blue-600 rounded-2xl" />
              <span className="basis-auto text-sm">Remember Me</span>
            </label>

            <a href="#" className="text-blue-600 text-sm">Forgot password?</a>
          </div>
        </div>

        <div className="mt-3 w-full">
          <button 
            type="submit" 
            className="w-full text-base font-medium text-center text-white rounded-lg h-[40px] overflow-hidden disabled:opacity-70 cursor-pointer"
            style={{
              background: 'linear-gradient(90deg, rgba(48, 90, 255, 0.8) 0%, #B5D2FF 100%)',
              borderRadius: '8px'
            }}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Login"}
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
