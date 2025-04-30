import React, { useEffect } from 'react'
import TopButtons from './components/TopButtons'
import Inputs from './components/Inputs'
import TimeAndLocation from './components/TimeAndLocation'
import TempAndDetails from './components/TempAndDetails'
import Forecast from './components/Forecast'
import getFormattedWeatherData from '../services/weatherservice'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {

const [query, setQuery] = React.useState({q:"ahmedabad"})
const [units, setUnits] = React.useState("metric")
const [weather, setWeather] = React.useState(null)




  const getWeather=async()=>{ 
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const message= query.q ? query.q : "current location"
    toast.info("Fetching weather for " + message)
    await getFormattedWeatherData( {...query,units}).then((data)=>{
      if(data.message){
        toast.error("City not found")
      }
      else{
        toast.success(`Weather for ${capitalizeFirstLetter(data.name)}, ${data.country}`)
      }
   
  
  setWeather(data)
 })

 

}

useEffect(()=>{
  getWeather()
},[query,units])

const formatBackground=()=>{
  if(!weather) return "from-cyan-700 to-blue-700"
  const threshold=units==="metric"?20:60
  if(weather.temp<=threshold) return "from-cyan-700 to-blue-700"
  else if(weather.temp>threshold && weather.temp<30) return "from-orange-300 to-red-500"
  else if(weather.temp>=30 && weather.temp<40) return "from-yellow-700 to-orange-700"
  else  return "from-red-500 to-pink-700"
}

 



  return (<>
    <div className={`bg-gradient-to-br ${formatBackground()}backdrop-blur-md  bg-black/10 w-full h-full flex flex-col justify-center items-center`}>
    <div className={`mx-auto w-full sm:max-w-screen-md md:max-w-screen-lg px-4 sm:px-8 py-5 shadow-xl bg-gradient-to-br ${formatBackground()} rounded-lg`}>

              <TopButtons setQuery={setQuery}/>
            <Inputs setQuery={setQuery} setUnits={setUnits}/>
              {weather && <>  
              <TimeAndLocation weather={weather} h={weather.hourly}/>
                <TempAndDetails weather={weather} units={units}/>
 
                  <Forecast title="hourly forecast" data={weather.hourly}/>
                          <Forecast title="daily forecast" data={weather.daily}/>
  
      </>
      }


     <ToastContainer autoClose={2500} theme="colored"  pauseOnHover={false} draggable={false} />
     </div>
     </div>
   
    </>)
}

export default App