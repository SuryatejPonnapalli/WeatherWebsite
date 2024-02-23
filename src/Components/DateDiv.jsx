import { useState } from "react";

const DateDiv = ({isDarkMode,data,localTime}) => {
    let name = null;
    let hours = '';
    let minutes = '';
    let month ='';
    let day='';
    let dayName = '';
    
    if (data !== null) {
        name = data.name;
    }
    
    if (typeof localTime === 'string') {
        const [datePart, timePart] = localTime.split(", ");
        const [monthStr, dayStr, yearStr] = datePart.split("/");
        const dateObj = new Date(parseInt(yearStr), parseInt(monthStr) - 1, parseInt(dayStr));
    
        hours = timePart.split(":")[0];
        minutes = timePart.split(":")[1];
        dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dateObj.getDay()];
        month = dateObj.toLocaleString('default', { month: 'short' });
    }
    return ( 
        <section className={`flex flex-col items-center justify-center shadow-xl shadow-black  pt-4 w-96 md:w-[50rem] rounded-3xl mt-8 pb-4 md:h-[22rem] 2xl:w-[60rem] 2xl:h-[30rem] ${isDarkMode?"text-white bg-[#444444]":"text-black bg-[#D9D9D9]"}`}>
            <header className="font-bold text-3xl md:text-5xl 2xl:text-7xl">
               {name}
            </header>
            <h1 className="font-bold text-6xl pt-12 md:pt-24 md:text-8xl 2xl:text-[10rem] 2xl:pt-[10rem]">
             {hours}:{minutes}
            </h1>
            <p className="md:text-xl 2xl:text-2xl">
                {dayName}, {day} {month}
            </p>
        </section>

     );
}
 
export default DateDiv;