import Icon from "./Icon";

const PropsHourly = ({isDarkMode,time,temp,rotate,windSpeed,weather}) => {
    const hours= time.split(':')[0]
    const minutes= time.split(':')[1]
    let rotateArrow = '';
    if (rotate > 180 && rotate < 270){
        rotate = -(360-rotate)
    }
    rotateArrow = rotate.toString()
    let width = 0;

  // Media query to check for small screens
  const smallScreenMediaQuery = window.matchMedia('(max-width: 932px)');
  if (smallScreenMediaQuery.matches) {
    width =80; // Set a different width for small screens
  }

  // Media query to check for medium screens
  const mediumScreenMediaQuery = window.matchMedia('(min-width: 933px) and (max-width: 1366px)');
  if (mediumScreenMediaQuery.matches) {
    width = 120; // Set a different width for medium screens
  }
    return ( 
            <aside className="md:h-[26rem]">
                <div className={`flex flex-col  py-4 px-4 w-24  rounded-2xl mt-10 justify-between items-center text-center md:w-[8rem] ${isDarkMode?"text-white bg-[#373636]":" bg-gradient-to-b from-[#F2A853] via-[#Ecc18b] to-amber-100"} `}>
                    <h4 className="text-2xl md:text-4xl font-bold">{hours}:{minutes}</h4>
                    <div className="md:pt-4">
                    <Icon weather={weather} width={width} className="pt-4"/>
                    </div>
                    <p className="text-lg font bold md:text-2xl md:pt-4">{temp}°C</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-[1.77rem] h-[1.77rem] md:w-[3.77rem] md:pt-4 md:h-[3.77rem] transform rotate-[${rotateArrow}deg]`}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                    </svg>
                    <p className="text-lg font bold md:text-2xl md:pt-4">{windSpeed}m/sec</p>
                </div>
            </aside>
     );
}
 
export default PropsHourly;