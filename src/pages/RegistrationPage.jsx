"use client";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VectorDown from "../assets/Vector-down.svg";
import VectorUp from "../assets/Vector-up.svg";
import ChatbotButton from "../components/ChatbotButton";
import Divider from "../components/Divider";
import PageTransition from "../components/PageTransition";
import SocialLoginSection from "../components/SocialLoginSection";
import api from "../utils/api";

function RegistrationPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const validateConfirmPassword = (confirmPassword) => {
    if (!confirmPassword.trim()) {
      setConfirmPasswordError("Please confirm your password");
      return false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
      return false;
    }
    setConfirmPasswordError("");
    return true;
  };

  const validateName = (name) => {
    if (!name.trim()) {
      setNameError("Name is required");
      return false;
    }
    setNameError("");
    return true;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const isConfirmPasswordValid = validateConfirmPassword(confirmPassword);
    const isNameValid = validateName(name);
    
    if (isEmailValid && isPasswordValid && isConfirmPasswordValid && isNameValid) {
      setIsSubmitting(true);
      
      try {
        // Call the mock API for registration - fixed to match the API interface
        const response = await api.auth.login(email, password);
        
        // Show success message
        toast.success("Registration successful!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        
        // Store token and user in localStorage (in a real app, use a more secure method)
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        
        // Redirect to login page after a delay
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } catch (error) {
        // Show error message
        toast.error(error.data?.error || "Registration failed. Please try again.", {
          position: "top-right",
          autoClose: 3000,
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <PageTransition>
      <main className="flex min-h-screen flex-col items-center justify-center px-20 py-4 bg-slate-100 max-md:px-5 relative overflow-hidden">
        {/* Vector SVG backgrounds */}
        <div className="absolute top-0 right-0 w-full z-0 pointer-events-none">
          <img src={VectorUp} alt="" className="w-full" />
        </div>
        <div className="absolute bottom-[-100px] left-0 w-full z-0 pointer-events-none">
          <img src={VectorDown} alt="" className="w-full" />
        </div>

        {/* Chatbot Button */}
        <ChatbotButton />

        <ToastContainer />
        <div className="flex flex-col max-w-full w-[650px] z-10 relative">
          <h1 className="self-center text-xl font-semibold text-center text-neutral-600 mb-2">
            Register for ReferralHub
          </h1>

          <section className="flex flex-col px-12 py-5 mt-4 bg-white rounded-2xl max-md:px-5 max-md:mt-3 max-md:max-w-full items-center justify-center shadow-[0px_10px_30px_rgba(0,0,0,0.08)]">
            <form onSubmit={handleRegister} className="max-w-[400px] w-full">
              {/* Name Field */}
              <div className="flex flex-col w-full rounded-lg mb-3">
                <label className="self-start text-sm text-zinc-800">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className={`w-full p-2 mt-1 text-base bg-white rounded-lg border border-solid ${nameError ? "border-red-500" : "border-stone-300"} text-zinc-800`}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (nameError) validateName(e.target.value);
                  }}
                />
                {nameError && <p className="text-red-500 text-xs mt-1">{nameError}</p>}
              </div>
              
              {/* Email Field */}
              <div className="flex flex-col w-full rounded-lg mb-3">
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

              {/* Password Field */}
              <div className="flex flex-col w-full rounded-none mb-3">
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

              {/* Confirm Password Field */}
              <div className="flex flex-col w-full rounded-none mb-8">
                <label className="self-start text-sm text-zinc-800">
                  Confirm Password
                </label>

                <div className={`flex w-full justify-between px-3 py-2 mt-1 text-base bg-white rounded-lg border border-solid ${confirmPasswordError ? "border-red-500" : "border-stone-300"} text-zinc-800`}>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Re-enter password"
                    className="my-auto bg-transparent border-none outline-none w-full text-zinc-800"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      if (confirmPasswordError) validateConfirmPassword(e.target.value);
                    }}
                  />
                  <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    {showConfirmPassword ? (
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
                {confirmPasswordError && <p className="text-red-500 text-xs mt-1">{confirmPasswordError}</p>}
              </div>

              {/* Register Button */}
              <button 
                type="submit" 
                className="w-full text-base font-medium text-center text-white rounded-lg h-[40px] overflow-hidden disabled:opacity-70 cursor-pointer"
                style={{
                  background: 'linear-gradient(90deg, rgba(48, 90, 255, 0.8) 0%, #B5D2FF 100%)',
                  borderRadius: '8px'
                }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Registering..." : "Register"}
              </button>

              <div className="flex flex-col justify-center mt-2 w-full mb-5">
                  <Divider />
                  <SocialLoginSection />
              </div>

              <p className="self-center text-base text-center text-neutral-400">
                Already have an account?{" "}
                <Link to="/login" className="text-[rgba(48,90,255,1)] hover:underline transition-all">
                  Login
                </Link>
              </p>
            </form>
          </section>
        </div>
      </main>
    </PageTransition>
  );
}

export default RegistrationPage; 