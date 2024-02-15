import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Home from './Home'

function App() {
    const [data, setData] = useState(null);
    const [click, setClick] = useState(false);
    const [search,setSearch] = useState("Hyderabad")
    
    const api ={
      key: "ec3042a3092a57e5850206a04c93630e",
      base: "https://api.openweathermap.org/data/2.5/weather?q",
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
      const response = await fetch(`${api.base}=${search}&appid=${api.key}&units=metric`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  
  useEffect(() => {
    fetchData(search);
    console.log(data)
  }, [click]);

 
  return (
   <div className={`pb-1 ${isDarkMode?"bg-gradient-to-r from-[#424242] to-[#1f1f1f]":"bg-gradient-to-r from-white to-[#424242]"}`}>
      <Navbar darkMode = {darkMode} isDarkMode={isDarkMode} fetchData={fetchData} search={Search} handleClickEvent={handleClickEvent}/>
      <Home isDarkMode={isDarkMode} search={search} />
   </div>
  )
}

export default App
