import React from "react";

interface InputFieldProps {
  placeholder: string;
  className?: string;
  maxLength?: number;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  className = "",
  maxLength,
  type = "text",
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      maxLength={maxLength}
      value={value}
      onChange={onChange}
      className={`w-full uppercase bg-background-dark text-center text-lg h-8 border-0 focus:ring-0 rounded ${className}`}
    />
  );
};

export default InputField;
