
import React from "react";


const Departure = () => {
    const callsign = "";

    return (
        <div className="grid grid-cols-6 grid-rows-9 border-1 border-secondary">
            <div className="row-start-1 bg-background-sidebar text-primary border-secondary border-2 border-r-0 col-span-5 text-center text-5xl uppercase pl-28 pt-2">
                <h1>
                    Departure
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
                    callsign:
                    <input type="text"
                        placeholder="CALLSIGN"
                        defaultValue={callsign}
                        className="
                        bg-background-sidebar
                        text-right
                        underline border-0 rounded h-7">
                    </input>
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
                gate / runway
            </div>
            <div className="
                    row-start-2
                    text-primary 
                    text-center
                    items-center
                    border-2
                    border-secondary
                    border-t-0
                    border-l-0
                    h-11
                    p-1">
                <input
                    type="text"
                    placeholder="XX"
                    maxLength={2}
                    className="
                    w-14
                    text-lg
                    uppercase
                    bg-background-dark
                    items-center
                    text-center
                    h-8 border-0 rounded">
                </input>
                /
                <input
                    type="text"
                    placeholder="XX"
                    maxLength={2}
                    className="
                    w-14
                    text-lg
                    uppercase
                    bg-background-dark
                    items-center
                    text-center
                    h-8 border-0 rounded">
                </input>
            </div>
            <div className="
                row-start-2
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
                payload
            </div>
            <div className="
                    row-start-2
                    text-primary 
                    text-center
                    items-center
                    border-2
                    border-secondary
                    border-t-0
                    border-l-0
                    h-11
                    p-1">
                <input
                    type="text"
                    placeholder="PAYLOAD"
                    className="
                    w-full
                    text-lg
                    uppercase
                    bg-background-dark
                    items-center
                    text-center
                    h-8 border-0 rounded">
                </input>
            </div>
            <div className="
                row-end-3
                col-span-2
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
                ATC instructions
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
                t/o fuel
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
                    placeholder="T/O FUEL"
                    className="
                    w-full
                    uppercase
                    bg-background-dark
                    items-center
                    text-center
                    text-lg
                    h-8
                    border-0 focus:ring-0">
                </input>
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
                reserve fuel
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
                    placeholder="RESERVE FUEL"
                    className="
                    w-full
                    uppercase
                    bg-background-dark
                    items-center
                    text-center
                    text-lg
                    h-8
                    border-0
                    focus:ring-0">
                </input>
            </div>
            <div className="
            row-start-3
            items-center 
            row-span-7
            col-span-2
            text-center
            w-full 
            border-2
            border-secondary
            border-t-0
            border-l-0 border-b-1
            h-full p-2">
                <textarea
                    className="
                    w-full
                    h-full resize-y
                    text-primary
                    bg-background-dark
                    rounded uppercase focus:ring-0 border-0 text-lg
                    "></textarea>
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
                elevation
            </div>
            <div className="
                    row-start-4
                    text-primary 
                    border-2
                    border-secondary
                    border-t-0
                    border-l-0
                    h-11
                    p-1 pl-8 text-lg text-center">
                <input
                    type="text"
                    placeholder="ELEVATION"
                    className="
                    w-3/5
                    uppercase
                    bg-background-dark
                    items-center
                    text-center
                    text-lg
                    h-8
                    border-0
                    rounded focus:ring-0 pl-6">
                </input> <strong>ft</strong>
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
                qnh
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
                    placeholder="QNH"
                    maxLength={4}
                    className="
                    w-full
                    uppercase
                    bg-background-dark
                    items-center
                    text-center
                    text-lg
                    border-0
                    h-8
                    rounded focus:ring-0">
                </input>
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
                trans alt
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
                    type="text"
                    placeholder="TRANS ALT"
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
                    pl-5 focus:ring-0">
                </input>
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
                sid
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
                    type="text"
                    placeholder="SID"
                    className="
                    w-full
                    uppercase
                    bg-background-dark
                    items-center
                    text-center
                    text-lg
                    h-8
                    border-0
                    focus:ring-0">
                </input>
            </div>
            <div className=" 
                row-start-6
                text-primary
                text-xl
                border-2 
                border-secondary
                border-t-0
                uppercase
                font-semibold
                h-11
                p-2">
                ZFW<sub>(zero fuel weight)</sub>
            </div>
            <div className="
                    row-start-6
                    text-primary 
                    border-2
                    border-secondary
                    border-t-0
                    border-l-0
                    h-11
                    p-1">
                <input
                    type="text"
                    placeholder="ZFW"
                    className="
                    w-full
                    uppercase
                    bg-background-dark
                    items-center
                    text-center
                    text-lg
                    h-8
                    border-0
                    focus:ring-0">
                </input>
            </div>
            <div className=" 
                row-start-6
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
                squawk
            </div>
            <div className="
                    row-start-6
                    text-primary 
                    border-2
                    border-secondary
                    border-t-0
                    border-l-0
                    h-11
                    p-1">
                <input
                    type="text"
                    placeholder="SQUAWK"
                    className="
                    w-full
                    uppercase
                    bg-background-dark
                    items-center
                    text-center
                    text-lg
                    h-8
                    border-0
                    focus:ring-0">
                </input>
            </div>
            <div className=" 
                row-start-7
                text-primary
                text-xl
                border-2 
                border-secondary
                border-t-0
                uppercase
                font-semibold
                h-11
                p-2">
                TOW<sub>(takeoff weight)</sub>
            </div>
            <div className="
                    row-start-7
                    text-primary 
                    border-2
                    border-secondary
                    border-t-0
                    border-l-0
                    h-11
                    p-1">
                <input
                    type="text"
                    placeholder="TOW"
                    className="
                    w-full
                    uppercase
                    bg-background-dark
                    items-center
                    text-center
                    text-lg
                    h-8
                    border-0
                    focus:ring-0">
                </input>
            </div>
            <div className=" 
                row-start-7
                col-span-2
                row-span-2
                text-primary
                text-xl
                text-center
                items-center
                border-2 
                border-secondary
                border-t-0
                border-l-0
                uppercase
                font-semibold
                h-auto p-2
                ">
                atis info<br />
                <input
                    type="text"
                    placeholder="X"
                    maxLength={1}
                    className="
                    w-10
                    uppercase
                    bg-background-dark
                    items-center
                    text-center
                    text-xl
                    h-8
                    border-0 rounded
                    ">
                </input>
            </div>
            <div className=" 
                row-start-8
                text-primary
                text-xl
                border-2 
                border-secondary
                border-t-0
                uppercase
                font-semibold
                h-11
                p-2">
                initial climb
            </div>
            <div className="
                    row-start-8
                    text-primary 
                    border-2
                    border-secondary
                    border-t-0
                    border-l-0
                    h-11
                    p-1">
                <input
                    type="text"
                    placeholder="INITIAL CLIMB"
                    className="
                    w-full
                    uppercase
                    bg-background-dark
                    items-center
                    text-center
                    text-lg
                    h-8
                    border-0
                    focus:ring-0">
                </input>
            </div>
            <div className=" 
                row-start-9
                col-span-4
                text-primary
                text-xl
                border-2 
                border-secondary
                border-t-0 border-b-1
                uppercase
                font-semibold
                h-11
                p-2">
                taxi instructions:<input
                    type="text"
                    placeholder="TAXI"
                    className="
                    w-8/12
                    uppercase
                    bg-background-dark
                    items-center
                    text-center
                    text-xl
                    h-full
                    border-0
                    ">
                </input>
            </div>
        </div>
    )
}

export default Departure;