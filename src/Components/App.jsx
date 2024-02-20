import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Home from './Home'

function App() {
    const [data, setData] = useState(null);
    const [click, setClick] = useState(false);
    const [search,setSearch] = useState("Hyderabad");
    const [ipAddress,setIpAddress] = useState(null);
    const [getCurrentLocation, setGetCurrentLocation] = useState(false);
    const [dailyData, setDailyData] = useState(null)
    const [lat, setLat] = useState(null)
    const [lon, setLon] = useState(null)
    const [localTime, setLocalTime] = useState(new Date())
    const date = new Date();
    
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

  // useEffect(() => {
  //   fetchDailyData();
  // },[click])

  // useEffect(() =>{
  //   fetchIpAddress();
  // },[getCurrentLocation])

  useEffect(() =>{
    currentLocation();
  },[getCurrentLocation])

  useEffect(() => {
    currentLocation();
  },[click])

  const fetchInitialData = async() => {
    try{
      const response1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=ec3042a3092a57e5850206a04c93630e&units=metric`);
      const data1 = await response1.json();
      setData(data1)
      setLat(data1.coord.lat)
      setLon(data1.coord.lon)
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

  // const fetchIpAddress = async() => {
  //   try{
  //     const response = await fetch('https://api.ipify.org');
  //     const data = await response.text();
  //     setIpAddress(data);
  //   }catch(error){
  //     console.log("Error detected",error);
  //   }
  //  }

   const currentLocation = async(data) => {
    if(data !== null){
        try {
            const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?key=6b7cec98711849d2866a0c6a1f12d433&q=${lat},${lon}&pretty=1`);
            const data1 = await response.json();
            const timezone = data1.results[0].annotations.timezone.name
            setLocalTime(date.toLocaleString("en-US", {
              timeZone: timezone
          }));
        } catch (error) {
            console.error("Error:", error);
        }
        
    }
};


  return (
   <div className={`pb-1 ${isDarkMode?"bg-gradient-to-r from-[#424242] to-[#1f1f1f]":"bg-gradient-to-r from-white to-[#424242]"}`}>
      <Navbar darkMode = {darkMode} isDarkMode={isDarkMode} search={Search} handleClickEvent={handleClickEvent} handleClickEvent2={handleClickEvent2} />
      <Home isDarkMode={isDarkMode} search={search} data={data} dailyData={dailyData} localTime={localTime}/>
   </div>
  )
}

export default App

