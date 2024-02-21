import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Home from './Home'

function App() {
    const [data, setData] = useState(null);
    const [click, setClick] = useState(false);
    const [search,setSearch] = useState("Hyderabad");
    const [dailyData, setDailyData] = useState(null);
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);
    const [localTime, setLocalTime] = useState(new Date());
    const date = new Date();
    const [sunriseHour, setSunriseHour] = useState('');
    const [sunriseMinute, setSunriseMinute] = useState('');
    const [sunsetHour, setSunsetHour] = useState('');
    const [sunsetMinute, setSunsetMinute] = useState('');
    const [getCurrentLocation, setGetCurrentLocation] = useState(false);
    
  const [isDarkMode,useIsDarkMode] = useState(true)
  const darkMode = () =>{
    useIsDarkMode(prev => !prev)
  }
  const Search = (e) =>{
    setSearch(e.target.value)
  }

  const handleClickEvent = () => {
    setClick(prev => !prev)
    Search();
  }

  const handleClickEvent2 = () => {
    setGetCurrentLocation(prev => !prev)
  }

  useEffect(() => {
    fetchInitialData();
  },[click])

  useEffect(() => {
        currentLocation();
    }, [data]);
  
  useEffect(() => {
      fetchIpAddress();
    },[getCurrentLocation])
    
  useEffect(() => {
      fetchInitialData();
    },[getCurrentLocation])

  // useEffect(() => {
  //   fetchDailyData();
  // },[click])

  // useEffect(() =>{
    
  // },[getCurrentLocation])


  const fetchInitialData = async() => {
    try{
      const response1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=ec3042a3092a57e5850206a04c93630e&units=metric`);
      const data1 = await response1.json();
      setData(data1)
      setLat(data1.coord.lat)
      setLon(data1.coord.lon)
      const milliseconds = data1.sys.sunrise * 1000;
      const offsetSeconds = data1.timezone;
      const dateObject = new Date(milliseconds);

      // Get the UTC hours and minutes components
      const hoursUTC = dateObject.getUTCHours();
      const minutesUTC = dateObject.getUTCMinutes();

      // Get the local hours and minutes components by applying the offset
      const totalSeconds = (hoursUTC * 3600) + (minutesUTC * 60) + offsetSeconds;
      const hoursLocal = Math.floor(totalSeconds / 3600) % 24; // Ensure it stays within 24-hour format
      const minutesLocal = Math.floor((totalSeconds % 3600) / 60);
      if(hoursLocal < 10){
        setSunriseHour('0'+hoursLocal.toString())
      }else{
        setSunriseHour(hoursLocal.toString())
      }
      if(minutesLocal < 10){
        setSunriseMinute('0'+minutesLocal.toString())
      }else{
        setSunriseMinute(minutesLocal.toString())
      }
      const milliseconds1 = data1.sys.sunset * 1000;
      const dateObject1 = new Date(milliseconds1);

      // Get the UTC hours and minutes components
      const hoursUTC1 = dateObject1.getUTCHours();
      const minutesUTC1 = dateObject1.getUTCMinutes();

      // Get the local hours and minutes components by applying the offset
      const totalSeconds1 = (hoursUTC1 * 3600) + (minutesUTC1 * 60) + offsetSeconds;
      const hoursLocal1 = (Math.floor(totalSeconds1 / 3600) % 24)-12; // Ensure it stays within 24-hour format
      const minutesLocal1 = Math.floor((totalSeconds1 % 3600) / 60);
      if(hoursLocal1 < 10){
        setSunsetHour('0'+hoursLocal1.toString())
      }else{
        setSunsetHour(hoursLocal1.toString())
      }
      if(minutesLocal1 < 10){
        setSunsetMinute('0'+minutesLocal1.toString())
      }else{
        setSunsetMinute(minutesLocal1.toString())
      }
    }catch(error){
      console.log("Failed to fetch address:"+error)
    }
  }

  // const fetchDailyData = async() => {
  //   try{
  //     const response1 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=ec3042a3092a57e5850206a04c93630e&units=metric`);
  //     const data1 = await response1.json();
  //     setDailyData(data1);
  //   }catch(error){
  //     console.log("Failed to fetch address:"+error)
  //   }
  // }

  const fetchIpAddress = async() => {
    try{
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      setSearch(data.city);
    }catch(error){
      console.log("Error detected",error);
    }
   }

   const currentLocation = async(data) => {
    if(data !== null){
        try {
            const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?key=6b7cec98711849d2866a0c6a1f12d433&q=${lat},${lon}&pretty=1`);
            const data1 = await response.json();
            const timezone1 = data1.results[0].annotations.timezone.name;
            setLocalTime(date.toLocaleString("en-US", {
              timeZone: timezone1
          }));
          console.log(data1.results[0].annotations.timezone.name)
        } catch (error) {
            console.error("Error:", error);
        }
        
    }
};
  // const locationFinder = async(ipAddress) =>{
  //   if(ipAddress !== null){
  //   try {
  //     const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?key=6b7cec98711849d2866a0c6a1f12d433&q=${ipAddress}&pretty=1`);
  //     const data = await response.json();
  //     const timezone = data.results[0].annotations.timezone.name;
  //     setLocalTime(date.toLocaleString("en-US", {
  //       timeZone: timezone
  //   }));
  //   console.log(data);
  // } catch (error) {
  //     console.error("Error:", error);
  // }
  //     }
  //   }

  return (
   <div className={`pb-1 ${isDarkMode?"bg-gradient-to-r from-[#424242] to-[#1f1f1f]":"bg-gradient-to-r from-white to-[#424242]"}`}>
      <Navbar darkMode = {darkMode} isDarkMode={isDarkMode} search={Search} handleClickEvent={handleClickEvent} handleClickEvent2={handleClickEvent2} />
      <Home isDarkMode={isDarkMode} search={search} data={data} dailyData={dailyData} localTime={localTime}
      sunriseHour={sunriseHour} sunriseMinute={sunriseMinute} sunsetHour={sunsetHour} sunsetMinute={sunsetMinute}/>
   </div>
  )
}

export default App

