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
    fetchDailyData();
  },[click])

  const fetchInitialData = async() => {
    try{
      const response1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=ec3042a3092a57e5850206a04c93630e&units=metric`);
      const data1 = await response1.json();
      setData(data1)
      setUnixDate(data1.dt)
      setOffset(data1.timezone)
    }catch(error){
      console.log("Failed to fetch address:"+error)
    }
  }

  const fetchDailyData = async() => {
    try{
      const response1 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=ec3042a3092a57e5850206a04c93630e&units=metric`);
      const data1 = await response1.json();
      setDailyData(data1);
    }catch(error){
      console.log("Failed to fetch address:"+error)
    }
  }

  useEffect(() =>{
    fetchIpAddress();
  },[getCurrentLocation])

  const fetchIpAddress = async() => {
    try{
      const response = await fetch('https://api.ipify.org');
      const data = await response.text();
      setIpAddress(data);
    }catch(error){
      console.log("Error detected",error);
    }
   }
   
//    const getTime = async (data) => {
//     if (data !== null) {
//         try {
//             const response = await fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${data.coord.lat}&lon=${data.coord.lon}&format=json&apiKey=3d277e9fca534ada94f6f529b3b10205`);
//             const data1 = await response.json();
//             setTimeZone(data1.timeZone.name);
            
//         } catch (error) {
//             console.log(error);
//         }
//     }
// };


   //   const cityName = async() => {
//     try{
//       const response = await fetch(`https://ip.city/api.php?ip=${ipAddress}&key=d369ea74d69dbfa506c11a0f91b67164`);
//       const data = await response.json();
//       setSearch(data.city);
//     }catch(error){
//       console.log("Error detected",error);
//     }
//  }


  return (
   <div className={`pb-1 ${isDarkMode?"bg-gradient-to-r from-[#424242] to-[#1f1f1f]":"bg-gradient-to-r from-white to-[#424242]"}`}>
      <Navbar darkMode = {darkMode} isDarkMode={isDarkMode} search={Search} handleClickEvent={handleClickEvent} handleClickEvent2={handleClickEvent2} />
      <Home isDarkMode={isDarkMode} search={search} data={data} dailyData={dailyData}/>
   </div>
  )
}

export default App
