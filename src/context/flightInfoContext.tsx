import React, { createContext, useState, ReactNode } from 'react';

// Define the shape of the flight info data
interface FlightInfo {
  callsign: string;
  from: string;
  to: string;
  vfr: boolean;
  ifr: boolean;
  type: string;
  tail: string;
  ete: string;
  deptime: string;
  route: string;
}

// Create the context
interface FlightInfoContextProps {
  flightInfo: FlightInfo;
  setFlightInfo: (info: FlightInfo) => void;
}

export const FlightInfoContext = createContext<FlightInfoContextProps | undefined>(undefined);

// Create a provider component
export const FlightInfoProvider = ({ children }: { children: ReactNode }) => {
  const [flightInfo, setFlightInfo] = useState<FlightInfo>({
    callsign: '',
    from: '',
    to: '',
    vfr: false,
    ifr: false,
    type: '',
    tail: '',
    ete: '',
    deptime: '',
    route: '',
  });

  return (
    <FlightInfoContext.Provider value={{ flightInfo, setFlightInfo }}>
      {children}
    </FlightInfoContext.Provider>
  );
};
