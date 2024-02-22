const PropsHourly = ({isDarkMode,time,temp,rotate,windSpeed}) => {
    const hours= time.split(':')[0]
    const minutes= time.split(':')[1]
    let rotateArrow = '';
    if (rotate > 180 && rotate < 270){
        rotate = -(360-rotate)
    }
    rotateArrow = rotate.toString()
    return ( 
            <aside className="md:h-[26rem]">
                <div className={`flex flex-col  py-4 px-4 w-24  rounded-2xl mt-10 justify-between items-center text-center md:w-[8rem] ${isDarkMode?"text-white bg-[#373636]":" bg-gradient-to-b from-[#F2A853] via-[#Ecc18b] to-amber-100"} `}>
                    <h4 className="text-2xl md:text-4xl font-bold">{hours}:{minutes}</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[5rem] h-[5rem] md:pt-4 md:w-[8rem] md:h-[8rem]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                        </svg>
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