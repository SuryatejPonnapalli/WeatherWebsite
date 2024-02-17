import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Home from './Home'

function App() {
    const [data, setData] = useState(null);
    const [click, setClick] = useState(false);
    const [search,setSearch] = useState("Hyderabad")
    
    const api ={
      key: "ec3042a3092a57e5850206a04c93630e",
      base: "https://api.openweathermap.org/data/2.5/weather?",
      main:"https://api.openweathermap.org/data/2.5/weather?lat=17.40756&lon=78.4772&appid=ec3042a3092a57e5850206a04c93630e",
  }
  const [isDarkMode,useIsDarkMode] = useState(true)
  const darkMode = () =>{
    useIsDarkMode(prev => !prev)
  }
  const Search = (e) =>{
    setSearch(e.target.value)
  }
  const handleClickEvent = () => {
    setClick(prev => !prev)
  }
  const fetchData = async (search) => {
    try {
      const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=17.40756&lon=78.4772&appid=ec3042a3092a57e5850206a04c93630e');
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  console.log(data)

  useEffect(() => {
    if(click){
      fetchData(search)
    }
  }, [click]);

 
  return (
   <div className={`pb-1 ${isDarkMode?"bg-gradient-to-r from-[#424242] to-[#1f1f1f]":"bg-gradient-to-r from-white to-[#424242]"}`}>
      <Navbar darkMode = {darkMode} isDarkMode={isDarkMode} search={Search} handleClickEvent={handleClickEvent}/>
      <Home isDarkMode={isDarkMode} search={search} data={data}/>
   </div>
  )
}

export default App
