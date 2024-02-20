import Icon from "./Icon";

const Weather = ({isDarkMode,data,sunriseHour,sunriseMinute,sunsetHour,sunsetMinute}) => {
    let temp = null;
    let feelsTemp = null;
    let weather = null;

    if (data !== null) {
        temp = Math.floor(data.main.temp);
        feelsTemp = Math.floor(data.main.feels_like);
        weather = data.weather[0].main;
    }

    return ( 
        <section className={`flex flex-row pl-6 justify-between shadow-2xl w-96 rounded-3xl mt-8 pb-4 shadow-neutral-950 pt-4 ${isDarkMode?"text-white bg-[#444444]":"text-black bg-[#D9D9D9]"}`}>
            <article>
                <div className="flex flex-col">
                {data !== null ? ( 
                    <h2 className={`font-bold ${isDarkMode ? "inline-block bg-gradient-to-r from-white to-[#747474] bg-clip-text text-6xl text-transparent" : "inline-block bg-gradient-to-r from-[#323232] to-[#A2A2A2] bg-clip-text text-6xl text-transparent"}`}>
                        {temp}°C
                    </h2>
                ) : null}
                  {data !== null ? (  <h4 className={`font-bold pl-2  ${isDarkMode?"inline-block bg-gradient-to-r from-white to-[#747474] bg-clip-text text-xl text-transparent  ":"inline-block bg-gradient-to-r from-[#323232] to-[#A2A2A2] bg-clip-text text-xl text-transparent"}`}>
                        Feels like: {feelsTemp}°C
                    </h4> ) : null}
                </div>
                <div className="flex flex-row pt-6 items-center">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                        </svg>

                    </div>
                    <div className="pl-4">
                        <h3>Sunrise</h3>
                        <p>{sunriseHour}:{sunriseMinute}am</p>
                    </div>
                </div>
                <div className="flex flex-row items-center pt-2">
                    <div className="pl-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>
                    </div>
                    <div className="pl-6">
                        <h3>Sunset</h3>
                        <p>{sunsetHour}:{sunsetMinute}pm</p>
                    </div>
                </div>
            </article>
            <aside className="pr-4">
                <div>
                {/* <svg width="150" height="150" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15 5V2H17V5H15ZM20.634 5.97381L22.134 3.37573L23.8661 4.37573L22.3661 6.97381L20.634 5.97381ZM16 23C19.866 23 23 19.866 23 16C23 12.134 19.866 9 16 9C12.134 9 9 12.134 9 16C9 19.866 12.134 23 16 23ZM16 25C20.9706 25 25 20.9706 25 16C25 11.0294 20.9706 7 16 7C11.0294 7 7 11.0294 7 16C7 20.9706 11.0294 25 16 25ZM27 15H30V17H27V15ZM27.6243 8.13397L25.0263 9.63397L26.0263 11.366L28.6243 9.86603L27.6243 8.13397ZM8.13397 4.37573L9.63397 6.97381L11.366 5.97381L9.86603 3.37573L8.13397 4.37573ZM5.97375 11.366L3.37567 9.86603L4.37567 8.13397L6.97375 9.63397L5.97375 11.366ZM15 27V30H17V27H15ZM5 15H2V17H5V15ZM3.37562 22.134L5.97369 20.634L6.97369 22.366L4.37562 23.866L3.37562 22.134ZM9.63404 25.0264L8.13404 27.6244L9.86609 28.6244L11.3661 26.0264L9.63404 25.0264ZM22.134 28.6244L20.634 26.0264L22.366 25.0264L23.866 27.6244L22.134 28.6244ZM25.0263 22.366L27.6244 23.866L28.6244 22.134L26.0263 20.634L25.0263 22.366Z" fill="url(#paint0_linear_9_803)"/>
                <defs>
                <linearGradient id="paint0_linear_9_803" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
                <stop stop-color="#EFC977"/>
                <stop offset="1" stop-color="#E07256"/>
                </linearGradient>
                </defs>
                </svg> */}
                <Icon weather={weather}/>
                </div>
                <div className="flex justify-center pt-4">
                {data !== null ? (  <h4 className="text-2xl font-bold">{weather}</h4> ) : null}
                </div>
            </aside>
        </section>
     );
}
 
export default Weather;