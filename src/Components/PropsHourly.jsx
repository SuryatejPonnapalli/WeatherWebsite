import Icon from "./Icon";

const PropsHourly = ({isDarkMode,time,temp,rotate,windSpeed,weather}) => {
    const hours= time.split(':')[0]
    const minutes= time.split(':')[1]
    let rotateArrow = '';
    let width = 0;
      // Ensure value is within the range of 0 to 360
      // Convert values in the upper half of the range to their equivalent negative ones
      if (rotate > 180) {
        rotate -= 360;
      }
      if(rotate>(-90) && rotate<(-60)){
        rotate = -90;
      }else if(rotate>(-60) && rotate<(-30)){
        rotate = -60;
      }else if(rotate>(-60) && rotate<(-30)){
        rotate = -30;
      }else if(rotate>(-30) && rotate<(0)){
        rotate = 0;
      }else if(rotate>(0) && rotate<(30)){
        rotate = 30;
      }else if(rotate>(30) && rotate<(60)){
        rotate = 60;
      }else if(rotate>(60) && rotate<(90)){
        rotate = 90;
      }else{
        rotate = -30;
      }

      rotateArrow= rotate.toString();
    console.log(rotateArrow)
    

  // Media query to check for small screens
  const smallScreenMediaQuery = window.matchMedia('(max-width:1023px)');
  if (smallScreenMediaQuery.matches) {
    width = 90; // Set a different with for small screens
  }

  // Media query to check for medium screens
  const mediumScreenMediaQuery = window.matchMedia('(min-width: 1024px) and (max-width: 1366px)');
  if (mediumScreenMediaQuery.matches) {
    width = 120; // Set a different width for medium screens
  }

  const largeScreenMediaQuery = window.matchMedia('(min-width: 1367px) and (max-width: 20000px)');
  if (largeScreenMediaQuery.matches) {
    width = 120; // Set a different width for medium screens
  }
    return ( 
            <aside className="md:h-[26rem]">
                <div className={`flex flex-col  py-4 px-4 w-24  rounded-2xl mt-10 justify-between items-center text-center md:w-[8rem] xl:w-[8rem] ${isDarkMode?"text-white bg-[#373636]":" bg-gradient-to-b from-[#F2A853] via-[#Ecc18b] to-amber-100"} `}>
                    <h4 className="text-2xl md:text-4xl xl:text-4xl font-bold">{hours}:{minutes}</h4>
                    <div className="pt-4">
                    <Icon weather={weather} width={width} className="pt-4"/>
                    </div>
                    <p className="text-lg font bold xl:text-2xl pt-4">{temp}°C</p>
                    <p className="text-lg font bold md:text-2xl pt-4 xl:text-2xl">{windSpeed}m/sec</p>
                </div>
            </aside>
     );
    
    }
export default PropsHourly;