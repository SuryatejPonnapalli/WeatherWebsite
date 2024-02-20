import DateDiv from "./DateDiv";
import FiveDay from "./FiveDay";
import HourlyWeather from "./HourlyWeather";
import Weather from "./Weather";

const Home = ({isDarkMode,search,data,localTime,sunriseHour,sunriseMinute,sunsetHour,sunsetMinute}) => {


    return ( 
        <div className="flex flex-col items-center justify-center">
           <DateDiv isDarkMode={isDarkMode} search={search} data={data} localTime={localTime}  /> 
           <Weather isDarkMode={isDarkMode} data={data} sunriseMinute={sunriseMinute} sunriseHour={sunriseHour} sunsetHour={sunsetHour} sunsetMinute={sunsetMinute}/>
           <FiveDay isDarkMode={isDarkMode} data={data} />
           <HourlyWeather isDarkMode={isDarkMode} data={data} />
        </div>
     );
}
 
export default Home;