import React from "react";
import InputField from "./InputField";

interface LabelledInputProps {
  label: string;
  placeholder: string;
  maxLength?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LabelledInput: React.FC<LabelledInputProps> = ({
  label,
  placeholder,
  maxLength,
  value,
  onChange,
}) => {
  return (
    <div className="row-start-2 text-primary text-xl border-2 border-secondary border-t-0 uppercase font-semibold h-11 p-2">
      {label}
      <InputField placeholder={placeholder} maxLength={maxLength} value={value} onChange={onChange} />
    </div>
  );
};

export default LabelledInput;
