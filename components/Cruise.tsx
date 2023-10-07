
import React from "react";


const Cruise = () => {
    const callsign = "";

    return (
        <div className="grid grid-cols-6 grid-rows-9 border-1 border-secondary">
            <div className="row-start-1 bg-background-sidebar text-primary border-secondary border-2 border-r-0 col-span-5 text-center text-5xl uppercase pl-28 pt-2">
                <h1>
                    takeoff / climb / cruise
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
                col-span-4
                text-primary
                text-xl
                border-2 
                border-secondary
                border-t-0
                uppercase
                font-semibold
                h-11
                p-2">
                est. top of climb
            </div>
            <div className="
                row-start-2
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
                v<sub>speeds</sub>
            </div>
            <div className="
                row-start-3
                col-span-4
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
                row-start-3
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
                v<sub>1</sub>
            </div>
            <div className="
                row-end-4
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
                    placeholder="V1"
                    maxLength={3}
                    className="
                    w-[97%]
                    text-xl
                    uppercase
                    bg-background-dark
                    items-center
                    text-center
                    h-8 border-0 focus:ring-0">
                </input>
            </div>
            <div className="
                row-start-4
                col-span-4
                text-primary
                text-xl
                border-2 
                border-secondary
                border-t-0
                uppercase
                font-semibold
                h-11
                p-2">
                act. top of climb
            </div>
            <div className="
                row-start-4
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
                v<sub>R</sub>
            </div>
            <div className="
                row-end-5
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
                    placeholder="VR"
                    maxLength={3}
                    className="
                    w-[97%]
                    text-xl
                    uppercase
                    bg-background-dark
                    items-center
                    text-center
                    h-8 border-0 focus:ring-0">
                </input>
            </div>
            <div className="
                row-start-5
                col-span-4
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
                v<sub>2</sub>
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
                <input
                    type="text"
                    placeholder="V2"
                    maxLength={3}
                    className="
                    w-[97%]
                    text-xl
                    uppercase
                    bg-background-dark
                    items-center
                    text-center
                    h-8 border-0 focus:ring-0">
                </input>
            </div>
            <div className="
                row-start-6
                col-span-4
                text-primary
                text-xl
                border-2 
                border-secondary
                border-t-0
                uppercase
                font-semibold
                h-11
                p-2">
                est. cruise flight level
            </div>
            <div className="
                row-end-7
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
                atc instructions
            </div>
            <div className="
                row-start-7
                col-span-4
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
                    placeholder="FLXXX"
                    className="
                    w-[97%]
                    text-xl
                    uppercase
                    bg-background-dark
                    items-center
                    text-left
                    h-8 border-0 focus:ring-0"></input>
            </div>
            <div className="
                row-start-7
                col-span-2
                row-span-3
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
                h-full
                p-2">
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
                row-start-8
                col-span-4
                text-primary
                text-xl
                border-2 
                border-secondary
                border-t-0
                uppercase
                font-semibold
                h-11
                p-2">
                act. cruise flight level
            </div>
            <div className="
                row-start-9
                col-span-4
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
                    h-8 border-0 focus:ring-0"></input>
            </div>
        </div>
    )
}

export default Cruise;