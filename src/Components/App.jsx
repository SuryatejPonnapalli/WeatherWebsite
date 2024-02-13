import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Home from './Home'

function App() {
  useEffect(() => {
    fetchData();
 },[]);

 const fetchData = async () => {
     await fetch(`${api.base}=${search}&appid=${api.key}&units=metric`)
     .then((res)=>res.json())
     .then((data) => {
         setData(data)
     })
     setClick(prev => !prev)
 }
  const [isDarkMode,useIsDarkMode] = useState(true)
  const darkMode = () =>{
    useIsDarkMode(prev => !prev)
  }
    const [data, setData] = useState(null);
    const [click, setClick] = useState(false);

  const api ={
    key: "ec3042a3092a57e5850206a04c93630e",
    base: "https://api.openweathermap.org/data/2.5/weather?q",
}

  return (
   <div className={`pb-1 ${isDarkMode?"bg-gradient-to-r from-[#424242] to-[#1f1f1f]":"bg-gradient-to-r from-white to-[#424242]"}`}>
      <Navbar darkMode = {darkMode} isDarkMode={isDarkMode} fetchData={fetchData} setSearch={setSearch}/>
      <Home isDarkMode={isDarkMode} />
   </div>
  )
}

export default App
