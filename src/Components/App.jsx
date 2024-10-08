import { useState, useEffect } from "react"
import Navbar from "./Navbar"
import Home from "./Home"

function App() {
  const [data, setData] = useState(null)
  const [click, setClick] = useState(false)
  const [search, setSearch] = useState("Hyderabad")
  const [dailyData, setDailyData] = useState(null)
  const [lat, setLat] = useState(null)
  const [lon, setLon] = useState(null)
  const [lat1, setLat1] = useState(null)
  const [lon1, setLon1] = useState(null)
  const [localTime, setLocalTime] = useState(new Date())
  const date = new Date()
  const [sunriseHour, setSunriseHour] = useState("")
  const [sunriseMinute, setSunriseMinute] = useState("")
  const [sunsetHour, setSunsetHour] = useState("")
  const [sunsetMinute, setSunsetMinute] = useState("")
  const [getCurrentLocation, setGetCurrentLocation] = useState(false)
  const [timeHours, setTimeHours] = useState(null)
  const [compareHour, setCompareHour] = useState(null)
  const [compareHour1, setCompareHour1] = useState(null)
  const [compareHour2, setCompareHour2] = useState(null)
  const [compareHour3, setCompareHour3] = useState(null)
  const [compareHour4, setCompareHour4] = useState(null)

  const [isDarkMode, useIsDarkMode] = useState(true)
  const darkMode = () => {
    useIsDarkMode((prev) => !prev)
  }
  const Search = (e) => {
    setSearch(e.target.value)
  }

  const handleClickEvent = () => {
    setClick((prev) => !prev)
    Search({ target: { value: search } })
  }

  const handleClickEvent2 = () => {
    setGetCurrentLocation((prev) => !prev)
  }

  useEffect(() => {
    fetchInitialData()
  }, [click])

  useEffect(() => {
    fetchDailyData()
  }, [click])

  useEffect(() => {
    fetchDailyData()
  }, [getCurrentLocation])

  useEffect(() => {
    currentLocation()
  }, [data])

  useEffect(() => {
    callbackFunc()
  }, [getCurrentLocation])

  useEffect(() => {
    fetchIpAddress()
  }, [getCurrentLocation])

  useEffect(() => {
    fetchInitialData()
  }, [getCurrentLocation])

  useEffect(() => {
    fetchDailyData()
  }, [click])

  useEffect(() => {
    // Check if localTime and timeHours are both available
    if (localTime && timeHours !== null) {
      compareHours(localTime, timeHours)
    }
  }, [localTime, timeHours, click])

  // useEffect(() =>{

  // },[getCurrentLocation])

  const callbackFunc = async () => {
    const successCallback = (position) => {
      setLat1(position.coords.latitude)
      setLon1(position.coords.longitude)
    }

    const errorCallback = (error) => {
      console.log(error)
    }

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
  }

  const fetchInitialData = async () => {
    try {
      const response1 = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${
          import.meta.env.VITE_OPENWEATHER
        }&units=metric`
      )
      const data1 = await response1.json()
      setData(data1)
      setLat(data1.coord.lat)
      setLon(data1.coord.lon)
      const milliseconds = data1.sys.sunrise * 1000
      const offsetSeconds = data1.timezone
      const dateObject = new Date(milliseconds)

      // Get the UTC hours and minutes components
      const hoursUTC = dateObject.getUTCHours()
      const minutesUTC = dateObject.getUTCMinutes()

      // Get the local hours and minutes components by applying the offset
      const totalSeconds = hoursUTC * 3600 + minutesUTC * 60 + offsetSeconds
      const hoursLocal = Math.floor(totalSeconds / 3600) % 24 // Ensure it stays within 24-hour format
      const minutesLocal = Math.floor((totalSeconds % 3600) / 60)
      if (hoursLocal < 10) {
        setSunriseHour("0" + hoursLocal.toString())
      } else {
        setSunriseHour(hoursLocal.toString())
      }
      if (minutesLocal < 10) {
        setSunriseMinute("0" + minutesLocal.toString())
      } else {
        setSunriseMinute(minutesLocal.toString())
      }
      const milliseconds1 = data1.sys.sunset * 1000
      const dateObject1 = new Date(milliseconds1)

      // Get the UTC hours and minutes components
      const hoursUTC1 = dateObject1.getUTCHours()
      const minutesUTC1 = dateObject1.getUTCMinutes()

      // Get the local hours and minutes components by applying the offset
      const totalSeconds1 = hoursUTC1 * 3600 + minutesUTC1 * 60 + offsetSeconds
      const hoursLocal1 = (Math.floor(totalSeconds1 / 3600) % 24) - 12 // Ensure it stays within 24-hour format
      const minutesLocal1 = Math.floor((totalSeconds1 % 3600) / 60)
      if (hoursLocal1 < 10) {
        setSunsetHour("0" + hoursLocal1.toString())
      } else {
        setSunsetHour(hoursLocal1.toString())
      }
      if (minutesLocal1 < 10) {
        setSunsetMinute("0" + minutesLocal1.toString())
      } else {
        setSunsetMinute(minutesLocal1.toString())
      }
    } catch (error) {
      console.log("Entered wrong")
    }
  }

  const fetchDailyData = async () => {
    try {
      const response1 = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${
          import.meta.env.VITE_OPENWEATHER
        }&units=metric`
      )
      const data1 = await response1.json()
      setTimeHours(data1.list)
    } catch (error) {
      console.log("Failed to fetch address:" + error)
    }
  }

  const fetchIpAddress = async () => {
    try {
      if (lat !== null && lon !== null) {
        const response = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?key=${
            import.meta.env.VITE_GEOCODE
          }&q=${lat1},${lon1}&pretty=1`
        )
        const data = await response.json()
        setSearch(data.results[0].components.suburb)
      }
    } catch (error) {
      console.log("Error detected", error)
    }
  }

  const currentLocation = async (data) => {
    if (data !== null) {
      try {
        const response = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?key=${
            import.meta.env.VITE_GEOCODE
          }&q=${lat},${lon}&pretty=1`
        )
        const data1 = await response.json()
        const timezone1 = data1.results[0].annotations.timezone.name
        setLocalTime(
          date.toLocaleString("en-US", {
            hour12: false,
            timeZone: timezone1,
          })
        )
      } catch (error) {
        console.error("Error:", error)
      }
    }
  }

  const compareHours = (localTime, timeHours) => {
    if (timeHours !== null) {
      // Check if localTime is a string
      if (typeof localTime === "string") {
        // Extract hours from localTime
        const timeComponents = localTime.split(", ")[1].split(":")
        const hours = parseInt(timeComponents[0])

        // Iterate through the first 40 elements of timeHours
        for (let i = 0; i < 40 && i < timeHours.length; i++) {
          // Extract hours from dt_txt of current element
          const timeParts = timeHours[i].dt_txt.split(" ")[1].split(":")
          const elementHours = parseInt(timeParts[0])

          // Compare the hours
          if (hours < elementHours) {
            // Set compareHour, compareHour1, and compareHour2 based on the comparison result
            setCompareHour(timeHours[i])
            setCompareHour1(timeHours[i + 1])
            setCompareHour2(timeHours[i + 2])
            setCompareHour3(timeHours[i + 3])
            setCompareHour4(timeHours[i + 4])
            break // Exit the loop once the comparison is done
          }
        }
      }
    }
  }
  return (
    <div
      className={`pb-1 h-max ${
        isDarkMode
          ? "bg-gradient-to-b from-[rgb(66,66,66)] to-[#1f1f1f]"
          : "bg-gradient-to-b from-white to-[#424242]"
      }`}
    >
      <Navbar
        darkMode={darkMode}
        isDarkMode={isDarkMode}
        search={Search}
        handleClickEvent={handleClickEvent}
        handleClickEvent2={handleClickEvent2}
      />
      <Home
        isDarkMode={isDarkMode}
        search={search}
        data={data}
        dailyData={dailyData}
        localTime={localTime}
        sunriseHour={sunriseHour}
        sunriseMinute={sunriseMinute}
        sunsetHour={sunsetHour}
        sunsetMinute={sunsetMinute}
        compareHour={compareHour}
        compareHour1={compareHour1}
        compareHour2={compareHour2}
        timeHours={timeHours}
        click={click}
        getCurrentLocation={getCurrentLocation}
        compareHour3={compareHour3}
        compareHour4={compareHour4}
      />
    </div>
  )
}

export default App
