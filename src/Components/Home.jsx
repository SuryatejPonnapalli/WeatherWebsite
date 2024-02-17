import DateDiv from "./DateDiv";
import FiveDay from "./FiveDay";
import HourlyWeather from "./HourlyWeather";
import Weather from "./Weather";

const Home = ({isDarkMode,search,data}) => {


    return ( 
        <div className="flex flex-col items-center justify-center">
           <DateDiv isDarkMode={isDarkMode} search={search} data={data} /> 
           <Weather isDarkMode={isDarkMode} data={data} />
           <FiveDay isDarkMode={isDarkMode} data={data} />
           <HourlyWeather isDarkMode={isDarkMode} data={data} />
        </div>
     );
}
 
export default Home;