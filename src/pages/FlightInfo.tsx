import { IconButton, Tooltip } from "@mui/material";
import { styled} from '@mui/material/styles';
import Image from "next/image";
import React, { useContext, useState } from "react";
import { FlightInfoContext } from "../context/flightInfoContext";

// Helper to get today's date
const getDate = () => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
};

const CustomIconButton = styled(IconButton)(({ theme }) => ({
    color: "#bbadcd",
    paddingLeft: "1rem",
    "&:hover": {
        color: "",
    },
    "&.MuiIconButton-sizeLarge": {
        "&.MuiIconButton-label": {
        fontSize: "1rem",
        },
        textAlign: "center",
        paddingLeft: "1rem",
    },
})) as typeof IconButton;

const FlightInfo = () => {
    const { flightInfo, setFlightInfo } = useContext(FlightInfoContext);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFlightInfo({ ...flightInfo, [name]: value});
    };
    const today = getDate();
    
  return (
    <div className="grid grid-cols-6 grid-rows-6 border-2 border-secondary">
      {/* Flight Information Header */}
      <div className="col-span-5 row-start-1 bg-background-sidebar text-primary border-secondary border-r-0 text-5xl uppercase text-center p-2">
        Flight Information
      </div>

      {/* Date of Flight */}
      <div className="col-span-1 text-right border-2 border-secondary p-2 uppercase">
        DOF <sub>(Date of Flight)</sub>
        <input
          type="date"
          name="date"
          defaultValue={today}
          className="w-full bg-background-sidebar text-right underline border-0 rounded h-7"
          onChange={handleInputChange}
        />
      </div>

      {/* Callsign */}
      <div className="col-span-1 row-start-2 font-semibold text-right">Callsign</div>
      <div className="col-span-3">
        <input
          type="text"
          name="callsign"
          maxLength={7}
          placeholder="CALLSIGN"
          value={flightInfo.callsign || ""}
          onChange={handleInputChange}
          className="w-full text-lg uppercase text-center bg-background-dark h-8 border-0 focus:ring-0"
        />
      </div>

      {/* VFR & IFR Checkboxes */}
      <div className="col-span-1 text-center font-semibold">VFR</div>
      <div className="col-span-1 text-center font-semibold">IFR</div>
      <div className="col-span-1 text-center">
        <input
          type="checkbox"
          name="vfr"
          checked={flightInfo.vfr || false}
          onChange={handleInputChange}
          className="h-11 w-12 bg-background-dark rounded-lg"
        />
      </div>
      <div className="col-span-1 text-center">
        <input
          type="checkbox"
          name="ifr"
          checked={flightInfo.ifr || false}
          onChange={handleInputChange}
          className="h-11 w-12 bg-background-dark rounded-lg"
        />
      </div>

      {/* From, To, Aircraft Type, Tail Number, ETE, Departure Time */}
      {[
        { label: "From", name: "from", maxLength: 4 },
        { label: "To", name: "to", maxLength: 4 },
        { label: "Aircraft Type", name: "type", maxLength: 4 },
        { label: "Tail Number", name: "tail", maxLength: 6 },
      ].map((input) => (
        <React.Fragment key={input.name}>
          <div className="col-span-1 font-semibold uppercase">{input.label}</div>
          <div className="col-span-2">
            <input
              type="text"
              name={input.name}
              maxLength={input.maxLength}
              placeholder={input.label.toUpperCase()}
              value={flightInfo[input.name] || ""}
              onChange={handleInputChange}
              className="w-full text-lg uppercase bg-background-dark text-center h-8 border-0 focus:ring-0"
            />
          </div>
        </React.Fragment>
      ))}

      {/* Estimated Time Enroute (ETE) */}
      <div className="col-span-1 text-primary text-xl font-semibold uppercase">
        ETE <sub>(Est. Time enroute)</sub>
      </div>
      <div className="col-span-2">
        <input
          type="time"
          name="ete"
          value={flightInfo.ete || ""}
          onChange={handleInputChange}
          className="w-full bg-background-dark text-center h-8 border-0 focus:ring-0"
        />
      </div>

      {/* Route / Waypoints */}
      <div className="col-span-4 row-start-6 border-2 border-secondary text-xl font-semibold uppercase p-2 h-[11rem]">
        Route / Waypoints
        <textarea
          name="route"
          value={flightInfo.route || ""}
          onChange={handleInputChange}
          className="w-full h-[80%] bg-background-dark text-lg uppercase border-0 focus:ring-0 resize-y"
          placeholder="ROUTE / WAYPOINTS"
        />
      </div>

      {/* Weather Icons */}
      <div className="col-span-2 row-start-7 text-center text-xl font-semibold border-2 border-secondary py-4">
        <input
          type="text"
          name="wind"
          maxLength={3}
          pattern="\d+"
          className="text-4xl bg-background-dark w-16 border-0 text-center"
          placeholder="000"
          onChange={handleInputChange}
        />
        °/
        <input
          type="text"
          name="wx"
          maxLength={2}
          pattern="\d+"
          className="text-4xl bg-background-dark w-12 border-0 text-center"
          placeholder="00"
          onChange={handleInputChange}
        />
      </div>

      {/* Weather Conditions Icons */}
      <div className="col-span-2 grid grid-cols-2 items-center text-center invert">
        {["Clear", "Haze", "Thunderstorm", "Cloudy", "Rain"].map((condition) => (
          <Tooltip title={condition} key={condition} placement="bottom">
            <div className="col-span-1">
              <Image src={`/assets/${condition.toLowerCase()}.svg`} alt={condition} width={100} height={100} />
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default FlightInfo;
