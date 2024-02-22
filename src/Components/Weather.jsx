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
        <section className={`flex flex-row items-center pl-6 justify-around md:justify-between shadow-2xl w-96 rounded-3xl mt-8 pb-4 shadow-neutral-950 pt-4 md:h-72 md:w-[50rem] ${isDarkMode?"text-white bg-[#444444]":"text-black bg-[#D9D9D9]"}`}>
            <article>
                <div className="flex flex-col">
                {data !== null ? ( 
                    <h2 className={`font-bold ${isDarkMode ? "inline-block bg-gradient-to-r from-white to-[#747474] bg-clip-text text-6xl md:text-[5rem] text-transparent" : "inline-block bg-gradient-to-r from-[#323232] to-[#A2A2A2] bg-clip-text text-6xl md:text-[4.8rem] text-transparent"}`}>
                        {temp}°C
                    </h2>
                ) : null}
                  {data !== null ? (  <h4 className={`font-bold pl-2 md:pl-0  ${isDarkMode?"inline-block bg-gradient-to-r from-white to-[#747474] bg-clip-text text-xl text-transparent md:text-2xl ":"inline-block bg-gradient-to-r from-[#323232] to-[#A2A2A2] bg-clip-text text-xl text-transparent"}`}>
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
                        <h3 className="md:text-xl">Sunrise</h3>
                        <p className="md:text-xl">{sunriseHour}:{sunriseMinute}am</p>
                    </div>
                </div>
                <div className="flex flex-row items-center pt-2">
                    <div className="pl-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>
                    </div>
                    <div className="pl-6">
                        <h3 className="md:text-xl">Sunset</h3>
                        <p className="md:text-xl">{sunsetHour}:{sunsetMinute}pm</p>
                    </div>
                </div>
            </article>
            <aside>
                <div>
                <Icon weather={weather}/>
                </div>
                <div className="flex justify-center pt-4">
                {data !== null ? (  <h4 className="text-2xl font-bold md:text-4xl">{weather}</h4> ) : null}
                </div>
            </aside>
            <div className="hidden md:flex md:flex-col md:flex-wrap pr-4">
                <div>
                    40
                </div>
                <div>
                    40
                </div>
                <div>
                    40
                </div>
                <div>
                    40
                </div>
            </div>
        </section>
     );
}
 
export default Weather;