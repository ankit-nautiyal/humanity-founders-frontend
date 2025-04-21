import React, { useState } from "react";

function SelectField({ 
  label, 
  placeholder, 
  className = "", 
  options = [], 
  value = "", 
  onChange = null, 
  error = "", 
  isRequired = false 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value);

  // Set default options if none provided
  const fieldOptions = options.length > 0 ? options : getDefaultOptions(label);

  function getDefaultOptions(labelText) {
    // Convert label to string in case it's a React element
    const labelStr = typeof labelText === 'string' ? labelText : '';
    
    // Convert React element to string if needed
    if (React.isValidElement(labelText)) {
      // Check for Company Size in the label's children
      const children = labelText.props.children;
      if (Array.isArray(children) && children.includes("Company Size")) {
        return [
          "1-10 employees", 
          "11-50 employees", 
          "51-200 employees", 
          "201-500 employees", 
          "501-1000 employees", 
          "1000+ employees"
        ];
      }
    }
    
    // Check string labels
    if (labelStr.includes("Industry")) {
      return [
        "Technology", 
        "Healthcare", 
        "Education", 
        "Finance", 
        "Retail", 
        "Manufacturing",
        "Construction",
        "Entertainment"
      ];
    } 
    else if (labelStr.includes("Company Size")) {
      return [
        "1-10 employees", 
        "11-50 employees", 
        "51-200 employees", 
        "201-500 employees", 
        "501-1000 employees", 
        "1000+ employees"
      ];
    }
    else if (labelStr.includes("City")) {
      return [
        "New York", 
        "Los Angeles", 
        "Chicago", 
        "Houston", 
        "Phoenix", 
        "Philadelphia",
        "San Antonio",
        "San Diego",
        "Dallas",
        "Other"
      ];
    }
    else if (labelStr.includes("State")) {
      return [
        "Alabama", 
        "Alaska", 
        "Arizona", 
        "Arkansas", 
        "California", 
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Other"
      ];
    }
    return ["Option 1", "Option 2", "Option 3"];
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    
    // Call onChange if provided
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <div className={`flex flex-col rounded-none ${className}`}>
      <label className="self-start text-base text-zinc-800">
        {label} {isRequired && <span className="text-red-500">*</span>}
      </label>
      <div className="relative w-full">
        <div 
          className={`flex gap-5 justify-between px-4 py-3.5 mt-2 text-sm bg-white rounded-lg border border-solid ${error ? "border-red-500" : "border-stone-300"} cursor-pointer w-full`}
          onClick={toggleDropdown}
        >
          <div className={`my-auto ${selectedOption ? 'text-zinc-800' : 'text-zinc-400'}`}>
            {selectedOption || placeholder}
          </div>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
        
        {isOpen && (
          <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
            {fieldOptions.map((option, index) => (
              <div 
                key={index} 
                className="px-4 py-2 text-sm hover:bg-blue-50 cursor-pointer text-zinc-800"
                onClick={() => handleSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

export default SelectField;
