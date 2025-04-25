"use client";
import React, { useRef, useState } from "react";
import FadeIn from "./FadeIn";
import FormField from "./FormField";
import SelectField from "./SelectField";

function BusinessProfileForm() {
  const [businessLogo, setBusinessLogo] = useState(null);
  const [businessDescription, setBusinessDescription] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [businessPhone, setBusinessPhone] = useState("");
  const [businessServices, setBusinessServices] = useState("");
  const [businessProducts, setBusinessProducts] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [industry, setIndustry] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  
  // Validation errors
  const [businessEmailError, setBusinessEmailError] = useState("");
  const [businessPhoneError, setBusinessPhoneError] = useState("");
  const [businessLogoError, setBusinessLogoError] = useState("");
  const [businessNameError, setBusinessNameError] = useState("");
  const [businessDescriptionError, setBusinessDescriptionError] = useState("");
  const [businessServicesError, setBusinessServicesError] = useState("");
  const [businessProductsError, setBusinessProductsError] = useState("");
  const [zipCodeError, setZipCodeError] = useState("");
  const [industryError, setIndustryError] = useState("");
  const [cityError, setCityError] = useState("");
  const [stateError, setStateError] = useState("");

  const fileInputRef = useRef(null);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setBusinessEmailError("Email is required");
      return false;
    } else if (!emailRegex.test(email)) {
      setBusinessEmailError("Please enter a valid email address");
      return false;
    }
    setBusinessEmailError("");
    return true;
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d+$/;
    if (!phone.trim()) {
      setBusinessPhoneError("Phone number is required");
      return false;
    } else if (!phoneRegex.test(phone)) {
      setBusinessPhoneError("Please enter numbers only");
      return false;
    }
    setBusinessPhoneError("");
    return true;
  };

  const validateRequiredField = (value, setter, fieldName) => {
    if (!value.trim()) {
      setter(`${fieldName} is required`);
      return false;
    }
    setter("");
    return true;
  };

  const validateSelectField = (value, setter, fieldName) => {
    if (!value) {
      setter(`Please select a ${fieldName}`);
      return false;
    }
    setter("");
    return true;
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    // Only allow numbers
    if (value === '' || /^\d+$/.test(value)) {
      setBusinessPhone(value);
      if (businessPhoneError) validatePhone(value);
    }
  };

  const handleEmailChange = (e) => {
    setBusinessEmail(e.target.value);
    if (businessEmailError) validateEmail(e.target.value);
  };

  const handleIndustryChange = (value) => {
    setIndustry(value);
    if (industryError) validateSelectField(value, setIndustryError, "industry");
  };

  const handleCityChange = (value) => {
    setCity(value);
    if (cityError) validateSelectField(value, setCityError, "city");
  };

  const handleStateChange = (value) => {
    setState(value);
    if (stateError) validateSelectField(value, setStateError, "state");
  };

  const handleLogoClick = () => {
    fileInputRef.current.click();
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file type
      const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml'];
      if (!validTypes.includes(file.type)) {
        setBusinessLogoError("Please select a valid image file (JPG, PNG, GIF, SVG)");
        return;
      }
      
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setBusinessLogoError("File size should be less than 5MB");
        return;
      }
      
      setBusinessLogo(file);
      setBusinessLogoError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all required fields
    const isEmailValid = validateEmail(businessEmail);
    const isPhoneValid = validatePhone(businessPhone);
    const isNameValid = validateRequiredField(businessName, setBusinessNameError, "Business name");
    const isDescriptionValid = validateRequiredField(businessDescription, setBusinessDescriptionError, "Business description");
    const isServicesValid = validateRequiredField(businessServices, setBusinessServicesError, "Services");
    const isProductsValid = validateRequiredField(businessProducts, setBusinessProductsError, "Products");
    const isZipCodeValid = validateRequiredField(zipCode, setZipCodeError, "Zip code");
    
    // Validate select fields
    const isIndustryValid = validateSelectField(industry, setIndustryError, "industry");
    const isCityValid = validateSelectField(city, setCityError, "city");
    const isStateValid = validateSelectField(state, setStateError, "state");
    
    // Check if business logo is uploaded
    let isLogoValid = true;
    if (!businessLogo) {
      setBusinessLogoError("Business logo is required");
      isLogoValid = false;
    }
    
    if (isEmailValid && isPhoneValid && isNameValid && isDescriptionValid && 
        isServicesValid && isProductsValid && isZipCodeValid && isLogoValid &&
        isIndustryValid && isCityValid && isStateValid) {
      // Form submission logic would go here
      console.log("Form submitted successfully");
    } else {
      // Scroll to the first error
      const firstError = document.querySelector('.text-red-500');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  return (
    <div className="flex flex-col self-stretch my-auto w-full h-auto bg-white grow-0 max-md:mt-10 max-md:max-w-full">
      <FadeIn delay={0.1}>
        <header className="max-md:max-w-full">
          <h2 className="text-xl font-medium text-center text-black max-md:max-w-full">
            Build Your Business Identity
          </h2>
          <p className="mt-2.5 text-sm text-zinc-500 max-md:max-w-full">
            Help us tailor the referral experience by adding key details about
            your business
          </p>
        </header>
      </FadeIn>

      <form onSubmit={handleSubmit} className="mt-12 w-full max-md:mt-10 max-md:max-w-full">
        <FadeIn delay={0.2}>
          <div className="flex gap-4 items-center max-w-full w-[263px]">
            <label className="self-stretch my-auto text-base text-zinc-800">
              Business Logo <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-1 shrink gap-4 items-center self-stretch my-auto text-sm basis-0 text-stone-500">
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleLogoChange} 
                accept="image/png, image/jpeg, image/gif, image/svg+xml"
                className="hidden" 
              />
              <button 
                type="button"
                onClick={handleLogoClick} 
                className="gap-2.5 self-stretch p-2.5 my-auto bg-white rounded-lg border border-solid border-stone-300 cursor-pointer transition-opacity duration-200 hover:opacity-70"
              >
                Choose Image
              </button>
              {businessLogo && <span className="text-xs text-green-600">{businessLogo.name}</span>}
            </div>
          </div>
          {businessLogoError && <p className="text-red-500 text-xs mt-1 ml-[263px]">{businessLogoError}</p>}
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex gap-5 items-center mt-6 w-full max-md:max-w-full">
            <div className="flex flex-col flex-1 shrink self-stretch my-auto w-full rounded-lg basis-0 min-w-60 max-md:max-w-full">
              <label className="self-start text-base text-zinc-800">
                Business Description <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Enter business description..."
                value={businessDescription}
                onChange={(e) => {
                  setBusinessDescription(e.target.value);
                  if (businessDescriptionError) validateRequiredField(e.target.value, setBusinessDescriptionError, "Business description");
                }}
                className={`px-4 pt-4 pb-12 mt-2 text-sm bg-white rounded-lg border border-solid ${businessDescriptionError ? "border-red-500" : "border-stone-300"} ${businessDescription ? "text-zinc-800" : "text-zinc-400"} max-md:pr-5 max-md:max-w-full`}
              />
              {businessDescriptionError && <p className="text-red-500 text-xs mt-1">{businessDescriptionError}</p>}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-wrap gap-5 items-center mt-6 w-full max-md:max-w-full">
            <FormField
              label="Business Name"
              placeholder="Enter business name"
              className="grow shrink self-stretch my-auto w-60 min-w-60"
              value={businessName}
              onChange={(e) => {
                setBusinessName(e.target.value);
                if (businessNameError) validateRequiredField(e.target.value, setBusinessNameError, "Business name");
              }}
              error={businessNameError}
              isRequired={true}
            />
            <FormField
              label="Business Email"
              placeholder="e.g., robert.fox@myemail.com"
              type="email"
              className="grow shrink self-stretch my-auto w-60 min-w-60"
              value={businessEmail}
              onChange={handleEmailChange}
              error={businessEmailError}
              isRequired={true}
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="flex flex-wrap gap-5 items-start mt-6 w-full max-md:max-w-full">
            <FormField
              label="Business Phone No."
              placeholder="Enter phone no."
              type="tel"
              className="grow shrink w-60 min-w-60"
              value={businessPhone}
              onChange={handlePhoneChange}
              error={businessPhoneError}
              isRequired={true}
            />
            <SelectField
              label="Industry"
              placeholder="Select"
              className="grow shrink w-60 whitespace-nowrap min-w-60"
              value={industry}
              onChange={handleIndustryChange}
              error={industryError}
              isRequired={true}
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="flex flex-wrap gap-5 justify-between items-end mt-6 w-full max-md:max-w-full">
            <FormField
              label="Services"
              placeholder="Enter services.."
              className="min-w-60 w-[300px]"
              value={businessServices}
              onChange={(e) => {
                setBusinessServices(e.target.value);
                if (businessServicesError) validateRequiredField(e.target.value, setBusinessServicesError, "Services");
              }}
              error={businessServicesError}
              isRequired={true}
            />
            <FormField
              label="Products"
              placeholder="Enter products..."
              className="min-w-60 w-[300px]"
              value={businessProducts}
              onChange={(e) => {
                setBusinessProducts(e.target.value);
                if (businessProductsError) validateRequiredField(e.target.value, setBusinessProductsError, "Products");
              }}
              error={businessProductsError}
              isRequired={true}
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.7}>
          <div className="flex flex-wrap gap-5 justify-between items-end mt-6 w-full max-md:max-w-full">
            <SelectField
              label={
                <>
                  Company Size{" "}
                  <span className="text-[rgba(179,179,179,1)]">(Optional)</span>
                </>
              }
              placeholder="Select"
              className="min-w-60 w-[300px]"
            />
            <SelectField
              label="City"
              placeholder="Select"
              className="whitespace-nowrap min-w-60 w-[300px]"
              value={city}
              onChange={handleCityChange}
              error={cityError}
              isRequired={true}
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.8}>
          <div className="flex flex-wrap gap-5 justify-between items-end mt-6 w-full max-md:max-w-full">
            <SelectField
              label="State"
              placeholder="Select"
              className="whitespace-nowrap min-w-60 w-[300px]"
              value={state}
              onChange={handleStateChange}
              error={stateError}
              isRequired={true}
            />
            <FormField
              label="Zip Code"
              placeholder="Enter zip code"
              className="min-w-60 w-[300px]"
              value={zipCode}
              onChange={(e) => {
                setZipCode(e.target.value);
                if (zipCodeError) validateRequiredField(e.target.value, setZipCodeError, "Zip code");
              }}
              error={zipCodeError}
              isRequired={true}
            />
          </div>
        </FadeIn>
        
        <FadeIn delay={0.9}>
          <div className="flex justify-center mt-10 w-full">
            <button 
              type="submit"
              className="w-[350px] h-[50px] rounded-[8px] px-[35px] py-[10px] gap-[10px] text-white cursor-pointer transition-opacity duration-200 hover:opacity-70"
              style={{
                background: 'linear-gradient(90deg, rgba(48, 90, 255, 0.8) 0%, #B5D2FF 100%)'
              }}
            >
              Next
            </button>
          </div>
        </FadeIn>
      </form>
    </div>
  );
}

export default BusinessProfileForm;
