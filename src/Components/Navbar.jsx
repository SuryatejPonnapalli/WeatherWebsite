import { useEffect, useState } from "react";
import Home from "./Home"
import App from "./App";

const Navbar = ({darkMode,isDarkMode,search,handleClickEvent,handleClickEvent2}) => {
        function handleKeyDown(event) {
                if (event.key === "Enter") {
                  handleClickEvent();
                }
              }

              
    return ( 
        <nav className="flex flex-row justify-between items-center pt-4 px-4">
                <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" onClick={darkMode} class="sr-only peer" />
                <div class="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-slate-300"></div>
                </label>
        <span className="relative flex items-center">
                <input type="text" placeholder="Search your city....." className={`w-72 h-8 md:w-[40rem] md:h-12 rounded-full md:placeholder:text-xl md:text-xl border-2 border-black md:pb-1 md:pl-14  xl:w-[70rem] pl-10 ${isDarkMode ? "placeholder:text-white bg-[#424242] text-white" : "placeholder:text-black bg-white border border-black text-black"}`} onChange={search} onKeyDown={handleKeyDown} />
             <button onClick={handleClickEvent}> 
             <svg xmlns="http://www.w3.org/2000/svg" fill="none"  viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-6 h-6 md:size-8 md:pb-1        absolute left-3 top-1/2 transform -translate-y-1/2  ${isDarkMode ? "text-white" : "text-black"}`} >
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                </button> 
        </span>  
             <button onClick={handleClickEvent2}><span className="h-7 w-7 md:size-14 flex flex-row xl:w-[15rem] xl:h-12 rounded-full bg-[#4BBB17] text-center pt-[0.35rem] font-semibold text-white text-sm items-center justify-center pb-[0.35rem] xl:justify-start">
                <svg class="h-8 w-8 pl-2   text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r=".5" fill="currentColor" />  <circle cx="12" cy="12" r="7" />  <line x1="12" y1="3" x2="12" y2="5" />  <line x1="3" y1="12" x2="5" y2="12" />  <line x1="12" y1="19" x2="12" y2="21" />  <line x1="19" y1="12" x2="21" y2="12" /></svg>
                <p className="hidden xl:grid text-white text-xl xl:pl-2">Current Location</p>
                </span> </button>     
        </nav>
     );
    
}
 
export default Navbar;