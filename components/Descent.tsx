
import React from "react";


const Descent = () => {
    const callsign = "";

    return (
        <div className="grid grid-cols-6 grid-rows-9 border-1 border-secondary">
            <div className="row-start-1 bg-background-sidebar text-primary border-secondary border-2 border-r-0 col-span-5 text-center text-5xl uppercase pl-28 pt-2">
                <h1>
                    descent / approach
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
                col-span-3
                text-primary
                text-xl
                border-2 
                border-secondary
                border-t-0
                uppercase
                font-semibold
                h-11
                p-2">
                top of descent
            </div>
            <div className="
                row-start-2
                col-span-3
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
                transition level
            </div>
            <div className="
                row-start-3
                col-span-3
                text-primary
                text-xl
                border-2 
                border-secondary
                border-t-0
                uppercase
                font-semibold
                h-11
                p-2">
                &gt;<input
                    type="text"
                    placeholder="WPT @ FLXXX"
                    className="
                    w-[97%]
                    text-xl
                    uppercase
                    bg-background-dark
                    items-center
                    text-left
                    h-8 border-0 focus:ring-0">
                </input>
            </div>
            <div className="
                row-end-4
                col-span-3
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
                &gt;<input
                    type="text"
                    placeholder="FLXXX"
                    className="
                    w-[97%]
                    text-xl
                    uppercase
                    bg-background-dark
                    items-center
                    text-left
                    h-8 border-0 focus:ring-0">
                </input>
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
                star
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
                    placeholder="STAR"
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
                field elevation
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
                    placeholder="FIELD ELEVATION"
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
                row-start-4
                col-span-2
                row-span-3
                text-primary
                text-xl
                border-2 
                border-secondary
                border-t-0
                border-l-0
                uppercase
                font-semibold
                h-full
                p-2">
                Remarks<br />
                <textarea placeholder="REMARKS" className=" bg-background-dark border-0 text-lg text-left h-4/5 w-full uppercase pl-0 focus:ring-0 resize-y"></textarea>
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
                qnh
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
                    placeholder="QNH"
                    maxLength={4}
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
                mag / wind
            </div>
           <div className="
                    row-start-5
                    text-primary 
                    border-2
                    border-secondary
                    border-t-0
                    border-l-0
                    text-center
                    h-11
                    p-1">
                <input
                    type="text"
                    placeholder="XXX"
                    maxLength={3}
                    className="
                    w-9
                    uppercase
                    bg-background-dark
                    items-center
                    text-center
                    text-lg
                    h-8
                    border-0
                    focus:ring-0 p-0">
                </input>°/<input
                    type="text"
                    placeholder="XX"
                    maxLength={2}
                    className="
                    w-7
                    uppercase
                    bg-background-dark
                    items-center
                    text-center
                    text-lg
                    h-8
                    border-0
                    focus:ring-0 p-0">
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
                atis
            </div>
            <div className="
                row-start-6
                col-span-3
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
                <input
                    type="text"
                    placeholder="ATIS"
                    maxLength={1}
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
                text-primary
                text-xl
                border-2 
                border-secondary
                border-t-0
                uppercase
                font-semibold
                h-11
                p-2">
                go around <sub>(alt / hdg / waypoint)</sub>
            </div>
            <div className="
                row-start-7
                col-span-4
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
                <input
                    type="text"
                    placeholder="FLXXX"
                    maxLength={5}
                    className="
                    w-16
                    uppercase
                    bg-background-dark
                    items-center
                    text-center
                    text-lg
                    h-8
                    border-0
                    focus:ring-0 p-0">
                </input> / <input
                    type="text"
                    placeholder="HDG"
                    maxLength={3}
                    className="
                    w-12
                    uppercase
                    bg-background-dark
                    items-center
                    text-center
                    text-lg
                    h-8
                    border-0
                    focus:ring-0 p-0">
                </input> / <input
                    type="text"
                    placeholder="WPT"
                    className="
                    w-20
                    uppercase
                    bg-background-dark
                    items-center
                    text-center
                    text-lg
                    h-8
                    border-0
                    focus:ring-0 p-0">
                </input>
            </div>
            <div className="
                row-start-8
                col-span-2
                text-primary
                text-xl
                border-2 
                border-secondary
                border-t-0
                uppercase
                font-semibold
                h-11
                p-2">
                rwy / gate
            </div>
            <div className="
                row-start-8
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
                <input
                    type="text"
                    placeholder="RWY"
                    maxLength={3}
                    className="
                    w-16
                    uppercase
                    bg-background-dark
                    items-center
                    text-center
                    text-lg
                    h-8
                    border-0
                    focus:ring-0 p-0">
                </input> / <input
                    type="text"
                    placeholder="gate"
                    maxLength={3}
                    className="
                    w-12
                    uppercase
                    bg-background-dark
                    items-center
                    text-center
                    text-lg
                    h-8
                    border-0
                    focus:ring-0 p-0">
                </input>
            </div>
            <div className="
                row-start-8
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
                v<sub>app <sub>(approach speed)</sub></sub>
            </div>
            <div className="
                row-start-8
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
                v<sub>ref <sub>(landing speed)</sub></sub>
            </div>
            <div className="
                row-start-9
                text-primary
                text-xl
                border-2 
                border-secondary
                border-t-0
                border-b-1
                uppercase
                font-semibold
                h-11
                p-2">
                taxi to gate
            </div>
            <div className="
                row-start-9
                col-span-3
                text-primary
                text-xl
                text-center
                border-2 
                border-secondary
                border-t-0
                border-l-0
                border-b-1
                uppercase
                font-semibold
                h-11
                p-2">
                <input
                    type="text"
                    placeholder="TAXI INSTRUCTIONS"
                    className="
                    w-full
                    uppercase
                    bg-background-dark
                    items-center
                    text-center
                    text-lg
                    h-8
                    border-0
                    focus:ring-0 p-0">
                </input>
            </div>
            <div className="
                row-start-9
                text-primary
                text-xl
                border-2 
                border-l-0
                border-secondary
                border-t-0
                border-b-1
                uppercase
                font-semibold
                h-11
                p-2">
                &gt;<input
                    type="text"
                    placeholder=""
                    className="
                    w-[95%]
                    text-xl
                    uppercase
                    bg-background-dark
                    items-center
                    text-left
                    h-7 border-0 focus:ring-0">
                </input>
            </div>
            <div className="
                row-start-9
                text-primary
                text-xl
                border-2 
                border-secondary
                border-t-0
                border-l-0
                border-b-1
                uppercase
                font-semibold
                h-11
                p-2">
                &gt;<input
                    type="text"
                    placeholder=""
                    className="
                    w-[95%]
                    text-xl
                    uppercase
                    bg-background-dark
                    items-center
                    text-left
                    h-7 border-0 focus:ring-0">
                </input>
            </div>
        </div>
    )
}

export default Descent;