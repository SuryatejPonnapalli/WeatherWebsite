import DateDiv from "./DateDiv";
import FiveDay from "./FiveDay";
import HourlyWeather from "./HourlyWeather";
import Weather from "./Weather";

const Home = ({isDarkMode,search}) => {
    

    return ( 
        <div className="flex flex-col items-center justify-center">
           <DateDiv isDarkMode={isDarkMode} search={search}/> 
           <Weather isDarkMode={isDarkMode} />
           <FiveDay isDarkMode={isDarkMode} />
           <HourlyWeather isDarkMode={isDarkMode} />
        </div>
     );
}
 
export default Home;