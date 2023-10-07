import { IconButton, Tooltip } from "@mui/material";
import { styled} from '@mui/material/styles';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

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

// Date extracter
function date() {
    var today:any = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
}

const FlightInfo = () => {
    const today = date();

    const [flightData, setFlightData] = useState({
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

    useEffect(() => {
        fetch('./flightData.json')
        .then((res) => res.json())
        .then((data) => {
            setFlightData(data);
            console.log("JSON Data: ", data)
        })
        .catch((error) => {
            console.error('Error fetching JSON data:', error);
        });
    }, []);

    useEffect(() => {
        const abortController = new AbortController();

        const updateData = async () => {
            try {
                const response = await axios.post('/api/saveData', flightData, {
                    signal: abortController.signal,
                });

                if (response.status ===200) {
                    console.log('Data updated successfully');
                } else {
                    console.error('Failed to update data');
                }
            } catch (error) {
                console.error('Error updating data:', error);
            }
        };
        updateData();

        return () => {
            abortController.abort();
        };
    }, [flightData]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        let inputValue = type === 'checkbox' ? checked : value;

        // Convert specific fields to uppercase
        if (['callsign', 'from', 'to', 'type', 'tail', 'route'].includes(name)) {
        inputValue = inputValue.toUpperCase();
        }

        setFlightData((prevData) => ({
        ...prevData,
        [name]: inputValue,
        }));
    };

    const handleInputBlur = () => {
        axios
        .post('/api/saveData', flightData)
        .then((response) => {
            console.log('Data updated successfully');
        })
        .catch((error) => {
            console.error('Failed to update data:', error);
        });
    };

    return (
        <div className="grid grid-cols-6 grid-rows-6 border-1 border-secondary">
            <div className="row-start-1 bg-background-sidebar text-primary border-secondary border-2 border-r-0 col-span-5 text-center text-5xl uppercase pl-20 pt-2">
                <h1>
                    Flight Information
                </h1>
            </div>
            <div className="bg-background-sidebar">
                <div className="
                    column-end-6
                    text-primary 
                    border-2 
                    border-secondary
                    border-l-0
                    uppercase
                    text-right
                    p-1 
                    w-full
                    pr-2">
                    DOF<sub><i>(Date of Flight)</i></sub>
                    <input type="date"
                        placeholder="Date of flight"
                        defaultValue={today}
                        className="
                        bg-background-sidebar
                        text-right
                        underline
                        border-0
                        rounded
                        h-7" />
                </div>
            </div>
            <div className="
                row-start-2
                text-primary
                text-xl
                border-2 
                border-secondary
                border-t-0
                uppercase
                font-semibold
                h-11
                p-2">
                Callsign
            </div>
            <div className="
                    row-start-2
                    text-primary 
                    border-2
                    border-secondary
                    border-t-0
                    border-l-0
                    col-span-3
                    h-11
                    p-1">
                <input
                    type="text"
                    placeholder="CALLSIGN"
                    name="callsign"
                    maxLength={7}
                    defaultValue={flightData.callsign}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    className="
                    w-full
                    text-lg
                    uppercase
                    bg-background-dark
                    items-center
                    text-center
                    h-8 border-0 focus:ring-0" />
            </div>
            <div className="
                row-start-2
                border-2
                border-secondary
                border-t-0
                border-l-0
                text-primary 
                text-xl
                uppercase 
                text-center
                font-semibold
                h-11
                w-full
                p-2">
                VFR 
            </div>
            <div className="
                row-end-3
                border-2
                border-secondary
                border-t-0
                border-l-0
                text-primary 
                uppercase 
                text-center
                font-semibold
                text-xl
                h-11
                w-full
                p-2
                ">
                IFR 
            </div>
            <div className=" 
                row-start-3
                text-primary
                text-xl
                border-2 
                border-secondary
                border-t-0
                uppercase
                font-semibold
                h-11
                p-2">
                from
            </div>
            <div className="
            row-start-3
                    text-primary 
                    border-2
                    border-secondary
                    border-t-0
                    border-l-0
                    h-11
                    p-1">
                <input
                    type="text"
                    placeholder="FROM"
                    name="from"
                    maxLength={4}
                    onBlur={handleInputChange}
                    className="
                    w-full
                    uppercase
                    bg-background-dark
                    items-center
                    text-center
                    text-lg
                    h-8
                    border-0 focus:ring-0" />
            </div>
            <div className=" 
            row-start-3
                text-primary
                text-xl
                border-2 
                border-secondary
                border-t-0
                border-l-0
                uppercase
                font-semibold
                h-11
                p-2">
                to
            </div>
            <div className="
            row-start-3
                    text-primary 
                    border-2
                    border-secondary
                    border-t-0
                    border-l-0
                    h-11
                    p-1">
                <input
                    type="text"
                    placeholder="TO"
                    name="to"
                    maxLength={4}
                    onBlur={handleInputChange}
                    className="
                    w-full
                    uppercase
                    bg-background-dark
                    items-center
                    text-center
                    text-lg
                    h-8
                    border-0
                    focus:ring-0" />
            </div>
            <div className="row-start-3 items-center row-span-2 text-center w-full border-2 border-secondary border-t-0 border-l-0 h-full p-4">
                <input type="checkbox" name="vfr" onChange={handleInputChange} className="h-11 w-12 text-primary bg-background-dark rounded-lg focus:ring-0 focus:ring-offset-0" />
            </div>
            <div className="row-end-5 row-span-2 items-center text-center w-full border-2 border-secondary border-t-0 border-l-0 h-full p-4">
                <input type="checkbox" name="ifr" onChange={handleInputChange} className="h-11 w-12 text-primary bg-background-dark rounded-lg focus:ring-0 focus:ring-offset-0" />
            </div>
            <div className=" 
                row-start-4
                text-primary
                text-xl
                border-2 
                border-secondary
                border-t-0
                uppercase
                font-semibold
                h-11
                p-2">
                Aircraft type
            </div>
            <div className="
                    row-start-4
                    text-primary 
                    border-2
                    border-secondary
                    border-t-0
                    border-l-0
                    h-11
                    p-1">
                <input
                    type="text"
                    placeholder="ACFT TYPE"
                    maxLength={4}
                    name="type"
                    onBlur={handleInputChange}
                    className="
                    w-full
                    uppercase
                    bg-background-dark
                    items-center
                    text-center
                    text-lg
                    h-8
                    border-0
                    rounded focus:ring-0" />
            </div>
            <div className=" 
                row-start-4
                text-primary
                text-xl
                border-2 
                border-secondary
                border-t-0
                border-l-0
                uppercase
                font-semibold
                h-11
                p-2">
                Tail number
            </div>
            <div className="
                    row-end-5
                    text-primary 
                    border-2
                    border-secondary
                    border-t-0
                    border-l-0
                    h-11
                    p-1">
                <input
                    type="text"
                    placeholder="TAIL NUMBER"
                    name="tail"
                    onBlur={handleInputChange}
                    maxLength={6}
                    className="
                    w-full
                    uppercase
                    bg-background-dark
                    items-center
                    text-center
                    text-lg
                    border-0
                    h-8
                    rounded focus:ring-0" />
            </div>
            <div className=" 
                row-start-5
                text-primary
                text-xl
                border-2 
                border-secondary
                border-t-0
                uppercase
                font-semibold
                h-11
                p-2">
                ETE<sub>(Estimated Time enroute)</sub>
            </div>
            <div className="
                    row-start-5
                    text-primary 
                    border-2
                    border-secondary
                    border-t-0
                    border-l-0
                    h-11
                    p-1">
                <input
                    type="time" 
                    id="ete"
                    name="ete"
                    onChange={handleInputChange}
                    className="
                    w-full
                    uppercase
                    bg-background-dark
                    items-center
                    text-center
                    text-lg
                    h-8
                    border-0
                    rounded
                    pl-5 focus:ring-0" />
            </div>
            <div className=" 
                row-start-5
                text-primary
                text-xl
                border-2 
                border-secondary
                border-t-0
                border-l-0
                uppercase
                font-semibold
                h-11
                p-2">
                Departure Time
            </div>
            <div className="
                    row-end-6
                    text-primary 
                    border-2
                    border-secondary
                    border-t-0
                    border-l-0
                    h-11
                    p-1">
                <input
                    type="time"
                    onChange={handleInputChange}
                    name="deptime"
                    className="
                    w-10/12
                    uppercase
                    bg-background-dark
                    items-center
                    text-center
                    text-lg
                    h-8
                    border-0
                    pl-[4.25rem] focus:ring-0" /><small>UTC</small>
            </div>
            <div className=" 
                row-start-5
                text-primary
                text-xl
                text-center
                border-2 
                border-secondary
                border-t-0
                border-l-0
                uppercase
                font-semibold
                h-11
                p-2">
                Wind
            </div>
            <div className=" 
                row-end-6
                text-primary
                text-xl
                text-center
                border-2 
                border-secondary
                border-t-0
                border-l-0
                uppercase
                font-semibold
                h-11
                p-2">
                WX
            </div>
            <div className=" 
                row-start-6
                col-span-4
                text-primary
                text-xl
                border-2 
                border-secondary
                border-t-0
                border-b-1
                uppercase
                font-semibold
                h-[11rem]
                p-2">
                Route / waypoints<br />
                <textarea placeholder="ROUTE / WAYPOINTS" name="route" onChange={handleInputChange} className=" bg-background-dark border-0 text-lg text-left h-[80%] w-full uppercase pl-0 focus:ring-0 resize-y"></textarea>
            </div>
            <div className="row-start-6 border-secondary border-2 border-l-0 border-t-0 border-b-1 items-center text-center h-full text-4xl text-primary py-16">
                <input type="text" pattern="\d+" maxLength={3} className=" p-0 text-primary text-4xl bg-background-dark text-center border-0 w-16 rounded"></input>
                °/
                <input type="text" pattern="\d+" maxLength={2} className=" p-0 text-primary text-4xl bg-background-dark text-center border-0 w-12 rounded"></input>
            </div>
            <div className=" row-end-7  border-secondary border-2 text-base border-l-0 border-t-0 border-b-1 items-center text-primary w-full">
                <div className="grid grid-cols-3 items-center text-center pt-0 invert">
                    <div>
                        <Tooltip
                            title="Clear"
                            placement="bottom"
                            enterDelay={0}
                            leaveDelay={0}
                            arrow>
                        <CustomIconButton
                            size="large"
                            color="primary">
                            <Image src="/assets/clear.svg" alt="Clear" width={100} height={100}/>
                        </CustomIconButton>
                        </Tooltip>
                    </div>
                    <div>
                        <Tooltip
                            title="Haze"
                            placement="bottom"
                            enterDelay={0}
                            leaveDelay={0}
                            arrow>
                        <CustomIconButton
                            size="large"
                            color="primary">
                            <Image src="/assets/hz.svg" alt="Haze" width={100} height={100}/>
                        </CustomIconButton>
                        </Tooltip>
                    </div>
                    <div>
                        <Tooltip
                            title="Thunderstorm"
                            placement="bottom"
                            enterDelay={0}
                            leaveDelay={0}
                            arrow>
                        <CustomIconButton
                            size="large"
                            color="primary">
                            <Image src="/assets/HeavyRain.svg" alt="Heavy Rain" width={100} height={100}/>
                        </CustomIconButton>
                        </Tooltip>
                    </div>
                </div>
                <div className="grid grid-cols-2 items-center text-center text-sm px-16 py-0 invert">
                    <div className="text-right">
                        <Tooltip
                            title="Cloudy"
                            placement="bottom"
                            enterDelay={0}
                            leaveDelay={0}
                            arrow>
                        <CustomIconButton
                            size="large"
                            color="primary">
                            <Image src="/assets/cloudy.svg" alt="Cloudy" width={100} height={100}/>
                        </CustomIconButton>
                        </Tooltip>
                    </div>
                    <div className="text-right">
                        <Tooltip
                            title="Rain"
                            placement="bottom"
                            enterDelay={0}
                            leaveDelay={0}
                            arrow>
                        <CustomIconButton
                            size="large"
                            color="primary">
                            <Image src="/assets/rain.svg" alt="Rain" width={100} height={100}/>
                        </CustomIconButton>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FlightInfo;