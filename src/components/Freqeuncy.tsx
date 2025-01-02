"use client";
const Frequencies = () => {
    const baseCellClass = "border-2 border-secondary bg-background-sidebar text-primary text-xl text-center uppercase py-1";
    const baseInputClass = "w-full bg-background-dark text-lg text-center uppercase h-8 border-0 rounded focus:ring-0";
    const colSpanClass = "col-span-2 py-2";
    const borderLeftClass = "border-l-3";

    return (
        <div className="grid grid-rows-9 grid-cols-6 max-w-full max-h-max min-h-fit">
            {/* Row 1 */}
            <div className={`${baseCellClass} text-2xl font-bold ${borderLeftClass} ${colSpanClass}`}>
                Departure
            </div>
            <div className={`${baseCellClass} text-2xl font-bold ${colSpanClass}`}>
                Notes
            </div>
            <div className={`${baseCellClass} text-2xl font-bold border-r-3 ${colSpanClass}`}>
                Arrival
            </div>

            {/* Row 2 */}
            <div className={`${baseCellClass} ${borderLeftClass}`}>
                Atis
            </div>
            <div className={`${baseCellClass}`}>
                <input type="text" placeholder="ATIS" className={baseInputClass} />
            </div>
            <div className={`${baseCellClass} row-span-7 col-span-2`}>
                <textarea placeholder="NOTES" className={`${baseInputClass} h-full resize-y`} />
            </div>
            <div className={`${baseCellClass}`}>
                Atis
            </div>
            <div className={`${baseCellClass} border-r-3`}>
                <input type="text" placeholder="ATIS" className={baseInputClass} />
            </div>

            {/* Row 3 */}
            <div className={`${baseCellClass} ${borderLeftClass}`}>
                Delivery
            </div>
            <div className={`${baseCellClass}`}>
                <input type="text" placeholder="DELIVERY" className={baseInputClass} />
            </div>
            <div className={`${baseCellClass}`}>
                Delivery
            </div>
            <div className={`${baseCellClass} border-r-3`}>
                <input type="text" placeholder="DELIVERY" className={baseInputClass} />
            </div>

            {/* Row 4 */}
            <div className={`${baseCellClass} ${borderLeftClass}`}>
                Ground
            </div>
            <div className={`${baseCellClass}`}>
                <input type="text" placeholder="GROUND" className={baseInputClass} />
            </div>
            <div className={`${baseCellClass}`}>
                Ground
            </div>
            <div className={`${baseCellClass} border-r-3`}>
                <input type="text" placeholder="GROUND" className={baseInputClass} />
            </div>

            {/* Row 5 */}
            <div className={`${baseCellClass} ${borderLeftClass}`}>
                Tower
            </div>
            <div className={`${baseCellClass}`}>
                <input type="text" placeholder="TOWER" className={baseInputClass} />
            </div>
            <div className={`${baseCellClass}`}>
                Tower
            </div>
            <div className={`${baseCellClass} border-r-3`}>
                <input type="text" placeholder="TOWER" className={baseInputClass} />
            </div>

            {/* Row 6 */}
            <div className={`${baseCellClass} ${borderLeftClass}`}>
                Departure
            </div>
            <div className={`${baseCellClass}`}>
                <input type="text" placeholder="DEPARTURE" className={baseInputClass} />
            </div>
            <div className={`${baseCellClass}`}>
                Departure
            </div>
            <div className={`${baseCellClass} border-r-3`}>
                <input type="text" placeholder="DEPARTURE" className={baseInputClass} />
            </div>

            {/* Row 7 */}
            <div className={`${baseCellClass} ${borderLeftClass}`}>
                Radar
            </div>
            <div className={`${baseCellClass}`}>
                <input type="text" placeholder="RADAR" className={baseInputClass} />
            </div>
            <div className={`${baseCellClass}`}>
                Radar
            </div>
            <div className={`${baseCellClass} border-r-3`}>
                <input type="text" placeholder="RADAR" className={baseInputClass} />
            </div>

            {/* Row 8 */}
            <div className={`${baseCellClass} ${borderLeftClass}`}>
                Enroute
            </div>
            <div className={`${baseCellClass}`}>
                <input type="text" placeholder="ENROUTE" className={baseInputClass} />
            </div>
            <div className={`${baseCellClass}`}>
                Enroute
            </div>
            <div className={`${baseCellClass} border-r-3`}>
                <input type="text" placeholder="ENROUTE" className={baseInputClass} />
            </div>

            {/* Row 9 */}
            <div className={`${baseCellClass} ${borderLeftClass} col-span-2`}>
                &nbsp;
            </div>
            <div className={`${baseCellClass} col-span-2`}>
                &nbsp;
            </div>
            <div className={`${baseCellClass} col-span-2 border-r-3`}>
                &nbsp;
            </div>
        </div>
    );
};

export default Frequencies;
