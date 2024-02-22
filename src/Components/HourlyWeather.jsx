import PropsHourly from "./PropsHourly";
let time =''
let time1 = ''
let time2 = ''
let temp = 0
let temp1 = 0
let temp2 = 0
let rotate = 0
let rotate1 = 0
let rotate2 = 0
let windSpeed = 0
let windSpeed1 = 0
let windSpeed2 = 0
let weather ='';
let weather1 ='';
let weather2 ='';
const HourlyWeather = ({isDarkMode,compareHour,compareHour1,compareHour2}) => {
    if(compareHour && compareHour1 && compareHour2 !== null){
         time = compareHour.dt_txt.split(' ')[1]
         time1 = compareHour1.dt_txt.split(' ')[1]
         time2 = compareHour2.dt_txt.split(' ')[1]
         temp = Math.floor(compareHour.main.temp)
         temp1 = Math.floor(compareHour1.main.temp)
         temp2 = Math.floor(compareHour2.main.temp)
         rotate = Math.floor(compareHour.wind.deg)
         rotate1 = Math.floor(compareHour1.wind.deg)
         rotate2 = Math.floor(compareHour2.wind.deg)
         windSpeed = compareHour.wind.speed
         windSpeed1 = compareHour1.wind.speed
         windSpeed2 = compareHour2.wind.speed
         weather = compareHour.weather[0].main
         weather1 = compareHour1.weather[0].main
         weather2 = compareHour2.weather[0].main
    }
    return ( 
        <section className={`flex flex-col shadow-2xl w-96 rounded-3xl mt-8 pb-4 shadow-neutral-950 pt-4 md:w-[28rem] ${isDarkMode?"text-white bg-[#444444]":"text-black bg-[#D9D9D9]"}`}>
            <header>
                <h3 className="text-center text-3xl font-bold">Hourly Forecast:</h3>
            </header>
            <div className="flex flex-row justify-evenly items-center">
                <PropsHourly isDarkMode={isDarkMode} time={time} temp={temp} rotate={rotate} windSpeed={windSpeed} weather={weather}/>
                <PropsHourly isDarkMode={isDarkMode} time={time1} temp={temp1} rotate={rotate1} windSpeed={windSpeed1} weather={weather1}/>
                <PropsHourly isDarkMode={isDarkMode} time={time2} temp={temp2} rotate={rotate2} windSpeed={windSpeed2} weather={weather2}/>
            </div>
         </section>
     );
}
 
export default HourlyWeather;