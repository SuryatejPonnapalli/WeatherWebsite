import PropsHourly from "./PropsHourly";
let time =''
let time1 = ''
let time2 = ''
let time3 = ''
let time4 = ''
let temp = 0
let temp1 = 0
let temp2 = 0
let temp3 = 0
let temp4 = 0
let rotate = 0
let rotate1 = 0
let rotate2 = 0
let rotate3 = 0
let rotate4 = 0
let windSpeed = 0
let windSpeed1 = 0
let windSpeed2 = 0
let windSpeed3 = 0
let windSpeed4 = 0
let weather ='';
let weather1 ='';
let weather2 ='';
let weather3 ='';
let weather4 ='';
const HourlyWeather = ({isDarkMode,compareHour,compareHour1,compareHour2,compareHour3,compareHour4}) => {
    if(compareHour && compareHour1 && compareHour2 !== null){
         time = compareHour.dt_txt.split(' ')[1]
         time1 = compareHour1.dt_txt.split(' ')[1]
         time2 = compareHour2.dt_txt.split(' ')[1]
         time3 = compareHour3.dt_txt.split(' ')[1]
         time4 = compareHour4.dt_txt.split(' ')[1]
         temp = Math.floor(compareHour.main.temp)
         temp1 = Math.floor(compareHour1.main.temp)
         temp2 = Math.floor(compareHour2.main.temp)
         temp3 = Math.floor(compareHour3.main.temp)
         temp4 = Math.floor(compareHour4.main.temp)
         windSpeed = compareHour.wind.speed
         windSpeed1 = compareHour1.wind.speed
         windSpeed2 = compareHour2.wind.speed
         windSpeed3 = compareHour3.wind.speed
         windSpeed4 = compareHour4.wind.speed
         weather = compareHour.weather[0].main
         weather1 = compareHour1.weather[0].main
         weather2 = compareHour2.weather[0].main
         weather3 = compareHour3.weather[0].main
         weather4 = compareHour4.weather[0].main
    }
    return ( 
        <section className={`flex flex-col shadow-2xl w-96 rounded-3xl mt-8 pb-4 shadow-neutral-950 pt-4 md:w-[28rem] xl:w-[60rem] xl:h-[30rem]  ${isDarkMode?"text-white bg-[#444444]":"text-black bg-[#D9D9D9]"}`}>
            <header>
                <h3 className="text-center text-3xl font-bold xl:text-4xl">Hourly Forecast:</h3>
            </header>
            <div className="flex flex-row justify-evenly items-center">
                <PropsHourly isDarkMode={isDarkMode} time={time} temp={temp} rotate={rotate} windSpeed={windSpeed} weather={weather}/>
                <PropsHourly isDarkMode={isDarkMode} time={time1} temp={temp1} rotate={rotate1} windSpeed={windSpeed1} weather={weather1}/>
                <PropsHourly isDarkMode={isDarkMode} time={time2} temp={temp2} rotate={rotate2} windSpeed={windSpeed2} weather={weather2}/>
                <div className="hidden xl:flex justify-evenly items-center">
                <PropsHourly isDarkMode={isDarkMode} time={time3} temp={temp3} rotate={rotate3} windSpeed={windSpeed3} weather={weather3}/>
                </div>
                <div className="hidden xl:flex justify-evenly items-center">
                <PropsHourly isDarkMode={isDarkMode} time={time4} temp={temp4} rotate={rotate4} windSpeed={windSpeed4} weather={weather4}/>
                </div>
            </div>
         </section>
     );
}
 
export default HourlyWeather;