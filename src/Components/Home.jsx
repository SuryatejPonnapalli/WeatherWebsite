import DateDiv from "./DateDiv";
import FiveDay from "./FiveDay";
import HourlyWeather from "./HourlyWeather";
import Weather from "./Weather";

const Home = ({isDarkMode,search,data,localTime,sunriseHour,sunriseMinute,sunsetHour,sunsetMinute,compareHour,compareHour1,compareHour2,timeHours,click,getCurrentLocation}) => {


    return ( 
        <div className="flex flex-col items-center justify-center md:flex-row md:flex-wrap md:justify-evenly h-max">
           <DateDiv isDarkMode={isDarkMode} search={search} data={data} localTime={localTime}  /> 
           <Weather isDarkMode={isDarkMode} data={data} sunriseMinute={sunriseMinute} sunriseHour={sunriseHour} sunsetHour={sunsetHour} sunsetMinute={sunsetMinute}/>
           <FiveDay isDarkMode={isDarkMode} data={data} localTime={localTime} timeHours={timeHours}/>
           <HourlyWeather isDarkMode={isDarkMode} data={data} compareHour={compareHour} compareHour1={compareHour1} compareHour2 = {compareHour2} click={click} getCurrentLocation={getCurrentLocation}/>
        </div>
     );
}
 
export default Home;