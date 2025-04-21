import React from "react";

function FormField({ 
  label, 
  placeholder, 
  className = "", 
  type = "text", 
  value = "", 
  onChange = () => {}, 
  error = "", 
  accept = "",
  inputRef = null,
  isRequired = false
}) {
  return (
    <div className={`flex flex-col rounded-lg ${className}`}>
      <label className="self-start text-base text-zinc-800">
        {label} {isRequired && <span className="text-red-500">*</span>}
      </label>
      <input
        ref={inputRef}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        accept={accept}
        className={`px-4 py-4 mt-2 text-sm bg-white rounded-lg border border-solid ${error ? "border-red-500" : "border-stone-300"} ${value ? "text-zinc-800" : "text-zinc-400"} max-md:pr-5 w-full`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

export default FormField;
