import { useState } from "react";
import PropsDaily from "./PropsDaily";

const FiveDay = ({isDarkMode,localTime,timeHours}) => {

    return ( 
        <section className={`hidden md:flex flex-col pl-6 shadow-2xl w-[26rem] rounded-3xl mt-8 pb-4 shadow-neutral-950 pt-4 h-[30rem] xl:w-[20rem] xl:h-[30rem] ${isDarkMode?"text-white bg-[#444444]":"text-black bg-[#D9D9D9]"}`}>
            <header>
                <h3 className="text-center text-3xl xl:text-4xl font-bold">5 Day Forecast:</h3>
            </header>
            <div className="pt-10 space-y-4">
                <PropsDaily localTime={localTime} timeHours={timeHours} />
            </div>
        </section>
     );
}
 
export default FiveDay;