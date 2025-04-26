"use client";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    full_name: "",
    phone: "",
    role: "BusinessOwner"
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
    } else if (formData.password.length < 1) {
      tempErrors.password = "Password must not be empty";
      isValid = false;
    }

    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    // Full name validation
    if (!formData.full_name.trim()) {
      tempErrors.full_name = "Full name is required";
      isValid = false;
    } else if (formData.full_name.length > 255) {
      tempErrors.full_name = "Full name must be less than 255 characters";
      isValid = false;
    }

    // Phone validation (optional field)
    if (formData.phone && formData.phone.length > 15) {
      tempErrors.phone = "Phone number must be less than 15 characters";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // Prepare data for API
        const userData = {
          email: formData.email,
          password: formData.password,
          full_name: formData.full_name,
          role: formData.role
        };
        
        // Only include phone if not empty
        if (formData.phone && formData.phone.trim() !== "") {
          userData.phone = formData.phone;
        }
        
        // Call the actual registration API endpoint
        const response = await api.auth.register(userData);
        
        // Show success message
        toast.success("Registration successful!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        
        // Redirect to login page after a delay
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } catch (error) {
        console.error('Registration error in component:', error);
        
        // Check for structured validation errors
        let errorMessage = "Registration failed. Please try again.";
        
        if (error.data) {
          // Handle FastAPI validation errors format
          if (error.data.detail && Array.isArray(error.data.detail)) {
            const fieldErrors = {};
            error.data.detail.forEach(item => {
              if (item.loc && item.loc.length > 1) {
                const fieldName = item.loc[1];
                fieldErrors[fieldName] = item.msg;
              }
            });
            
            if (Object.keys(fieldErrors).length > 0) {
              setErrors(fieldErrors);
              errorMessage = "Please fix the highlighted fields";
            }
          } 
          // Handle Django REST framework error format
          else if (typeof error.data === 'object') {
            const fieldErrors = {};
            
            Object.keys(error.data).forEach(key => {
              if (Array.isArray(error.data[key])) {
                fieldErrors[key] = error.data[key][0];
              } else if (typeof error.data[key] === 'string') {
                fieldErrors[key] = error.data[key];
              }
            });
            
            if (Object.keys(fieldErrors).length > 0) {
              setErrors(fieldErrors);
              errorMessage = "Please fix the highlighted fields";
            } else if (error.data.detail) {
              errorMessage = error.data.detail;
            } else if (error.data.error) {
              errorMessage = error.data.error;
            }
          }
        }
        
        toast.error(errorMessage, {
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
      <main className="flex min-h-screen flex-col items-center justify-center px-6 sm:px-10 md:px-20 py-4 bg-slate-100 relative overflow-hidden">
        {/* Vector SVG backgrounds */}
        <div className="absolute top-0 right-0 w-full z-0 pointer-events-none">
          <img src={VectorUp} alt="" className="w-full" />
        </div>
        <div className="absolute bottom-[-100px] left-0 w-full z-0 pointer-events-none">
          <img src={VectorDown} alt="" className="w-full" />
        </div>

        {/* Chatbot Button */}
        <ChatbotButton />

        <div className="flex flex-col max-w-full w-full sm:w-[500px] md:w-[650px] z-10 relative">
          <h1 className="self-center text-xl font-semibold text-center text-neutral-600 mb-2">
            Create a New Account
          </h1>

          <section className="flex flex-col px-4 sm:px-8 md:px-12 py-5 mt-4 bg-white rounded-2xl items-center justify-center shadow-[0px_10px_30px_rgba(0,0,0,0.08)]">
            <form onSubmit={handleRegister} className="w-full max-w-[400px]">
              {/* Full Name Field */}
              <div className="flex flex-col w-full rounded-lg mb-3">
                <label className="self-start text-sm text-zinc-800">Full Name</label>
                <input
                  type="text"
                  name="full_name"
                  placeholder="Enter your full name"
                  className={`w-full p-2 mt-1 text-base bg-white rounded-lg border border-solid ${errors.full_name ? "border-red-500" : "border-stone-300"} text-zinc-800`}
                  value={formData.full_name}
                  onChange={handleChange}
                />
                {errors.full_name && <p className="text-red-500 text-xs mt-1">{errors.full_name}</p>}
              </div>
              
              {/* Email Field */}
              <div className="flex flex-col w-full rounded-lg mb-3">
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

              {/* Phone Number Field */}
              <div className="flex flex-col w-full rounded-lg mb-3">
                <label className="self-start text-sm text-zinc-800">Phone Number (Optional)</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  className={`w-full p-2 mt-1 text-base bg-white rounded-lg border border-solid ${errors.phone ? "border-red-500" : "border-stone-300"} text-zinc-800`}
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              {/* Role Selection */}
              <div className="flex flex-col w-full rounded-lg mb-3">
                <label className="self-start text-sm text-zinc-800">Role</label>
                <select
                  name="role"
                  className="w-full p-2 mt-1 text-base bg-white rounded-lg border border-solid border-stone-300 text-zinc-800"
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option value="BusinessOwner">Business Owner</option>
                  <option value="Promoter">Promoter</option>
                </select>
              </div>

              {/* Password Field */}
              <div className="flex flex-col w-full rounded-none mb-3">
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

              {/* Confirm Password Field */}
              <div className="flex flex-col w-full rounded-none mb-6">
                <label className="self-start text-sm text-zinc-800">
                  Confirm Password
                </label>

                <div className={`flex w-full justify-between px-3 py-2 mt-1 text-base bg-white rounded-lg border border-solid ${errors.confirmPassword ? "border-red-500" : "border-stone-300"} text-zinc-800`}>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Re-enter password"
                    className="my-auto bg-transparent border-none outline-none w-full text-zinc-800"
                    value={formData.confirmPassword}
                    onChange={handleChange}
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
                {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
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

              <p className="self-center text-sm sm:text-base text-center text-neutral-400">
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