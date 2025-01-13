// src/pages/Departure.tsx
import React from "react";
import { useCallsign } from "../context/callsignContext";
import LabelledInput from "../components/LabelledInput";

const Departure: React.FC = () => {
  const { callsign, setCallsign } = useCallsign();

  return (
    <div className="grid grid-cols-6 grid-rows-9 border-1 border-secondary gap-4 p-4">
      {/* Page Title */}
      <div className="row-start-1 col-span-6 bg-background-sidebar text-primary border-secondary border-2 border-r-0 text-center text-5xl uppercase py-4">
        <h1>Departure</h1>
      </div>

      {/* Callsign Input */}
      <div className="col-span-6 text-primary border-2 border-secondary border-l-0 uppercase text-right p-1 w-full pr-2">
        Callsign:
        <input
          value={callsign}
          onChange={(e) => setCallsign(e.target.value)}
          placeholder="CALLSIGN"
          className="w-full uppercase bg-background-dark text-center text-lg h-8 border-0 focus:ring-0 rounded"
        />
      </div>

      {/* Gate / Runway Input */}
      <LabelledInput
        label="Gate / Runway"
        placeholder="XX"
        maxLength={2}
      />

      {/* Payload Input */}
      <LabelledInput
        label="Payload"
        placeholder="PAYLOAD"
      />

      {/* Fuel Input */}
      <LabelledInput
        label="Fuel"
        placeholder="FUEL"
      />

      {/* Takeoff Weight */}
      <LabelledInput
        label="Takeoff Weight"
        placeholder="WEIGHT"
      />

      {/* Flight Level */}
      <LabelledInput
        label="Flight Level"
        placeholder="FLIGHT LVL"
        maxLength={3}
      />

      {/* Cruise Speed */}
      <LabelledInput
        label="Cruise Speed"
        placeholder="SPD"
        maxLength={4}
      />

      {/* Wind Input */}
      <LabelledInput
        label="Wind"
        placeholder="WIND DIR/SPD"
      />

      {/* Temperature Input */}
      <LabelledInput
        label="Temperature"
        placeholder="TEMP"
      />

      {/* Departure Time Input */}
      <LabelledInput
        label="Departure Time"
        placeholder="HH:MM"
        maxLength={5}
      />

      {/* Aircraft Type Input */}
      <LabelledInput
        label="Aircraft Type"
        placeholder="TYPE"
      />

      {/* Departure Airport */}
      <LabelledInput
        label="Departure Airport"
        placeholder="APT"
        maxLength={3}
      />

      {/* Destination Airport */}
      <LabelledInput
        label="Destination Airport"
        placeholder="DEST"
        maxLength={3}
      />
    </div>
  );
};

export default Departure;
