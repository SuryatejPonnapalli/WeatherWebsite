import { useState } from "react";

const DateDiv = ({isDarkMode,data,localTime}) => {
    let name = null;
    let hours = '';
    let minutes = '';
    let num = 0;
    let month ='';
    let day='';
    let dayName = '';
    if(data !== null){
        name = data.name
        
    }
    if(typeof localTime === 'string'){
    const timeComponents = localTime.split(", ")[1].split(":");
    hours = timeComponents[0];
    minutes = timeComponents[1];
    const timeComponents1 = localTime.split(", ")[0].split("/");
    num = parseInt(timeComponents1[0]);
    day = timeComponents1[1];
    const days = parseInt(timeComponents1[1]);
    const months = parseInt(timeComponents1[0]);
    const years = parseInt(timeComponents1[2]);
    const date = new Date(days, months, years); // Note: Month in JavaScript's Date object is zero-based, so we subtract 1 from the provided month
    const dayIndex = date.getDay();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    dayName = daysOfWeek[dayIndex+1];
    }

    switch(num)
      {
        case 1:
          month="Jan";
          break;
        case 2:
          month="Feb";
          break;
        case 3:
          month="Mar";
          break;
        case 4:
          month="Apr";
          break;
        case 5:
          month="May";
          break;
        case 5+1:
          month="Jun";
          break;
        case 6+1:
          month="Jul";
          break;
        case 7+1:
          month="Aug";
          break;
        case 8+1:
          month="Sept";
          break;
        case 9+1:
          month="Oct";
          break;
        case 10+1:
          month="Nov";
          break;
        case 11+1:
          month="Dec";
          break;
        default:
          month="Invalid month";
      }
    return ( 
        <section className={`flex flex-col items-center justify-center shadow-xl shadow-black  pt-4 w-96 md:w-[50rem] rounded-3xl mt-8 pb-4 md:h-[22rem] ${isDarkMode?"text-white bg-[#444444]":"text-black bg-[#D9D9D9]"}`}>
            <header className="font-bold text-3xl md:text-5xl">
               {name}
            </header>
            <h1 className="font-bold text-6xl pt-12 md:pt-24 md:text-8xl">
             {hours}:{minutes}
            </h1>
            <p className="md:text-xl">
                {dayName}, {day} {month}
            </p>
        </section>

     );
}
 
export default DateDiv;