import DateDiv from "./DateDiv";
import FiveDay from "./FiveDay";
import HourlyWeather from "./HourlyWeather";
import Weather from "./Weather";

const Home = ({isDarkMode,api}) => {
    

    return ( 
        <div className="flex flex-col items-center justify-center">
           <DateDiv isDarkMode={isDarkMode} api={api}/> 
           <Weather isDarkMode={isDarkMode} api={api}/>
           <FiveDay isDarkMode={isDarkMode} api={api}/>
           <HourlyWeather isDarkMode={isDarkMode} api={api}/>
        </div>
     );
}
 
export default Home;