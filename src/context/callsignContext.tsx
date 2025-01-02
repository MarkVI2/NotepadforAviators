import React, { createContext, useState, useContext } from "react";

interface CallsignContextProps {
  callsign: string;
  setCallsign: React.Dispatch<React.SetStateAction<string>>;
}

const CallsignContext = createContext<CallsignContextProps | undefined>(undefined);

export const CallsignProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [callsign, setCallsign] = useState<string>("");

  return (
    <CallsignContext.Provider value={{ callsign, setCallsign }}>
      {children}
    </CallsignContext.Provider>
  );
};

export const useCallsign = () => {
  const context = useContext(CallsignContext);
  if (!context) {
    throw new Error("useCallsign must be used within a CallsignProvider");
  }
  return context;
};
