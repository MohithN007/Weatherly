import React from 'react'
import { BiCurrentLocation } from 'react-icons/bi'
import { BiSearch } from 'react-icons/bi'


const Inputs = ({setQuery,setUnits}) => {
const [city, setCity] = React.useState("")
const handleSearchClick=()=>{
    if(city!==""){
        setQuery({q:city})
    }
}
const handleLocationClick=()=>{
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            const lat=position.coords.latitude
            const lon=position.coords.longitude
            setQuery({lat,lon})
        })
    }
}
  return (
    <div className="flex items-center justify-center my-6 px-4">
    <div className="flex flex-col sm:flex-row items-center w-full sm:space-x-4 space-y-2 sm:space-y-0">
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        type="text"
        placeholder="search by city..."
        className="text-lg text-gray-500 font-light p-2 w-full sm:w-3/4 shadow-xl focus:outline-none placeholder:lowercase bg-white"
      />
      <div className="flex space-x-2">
        <BiSearch onClick={handleSearchClick} size={28} className="cursor-pointer hover:scale-110" />
        <BiCurrentLocation onClick={handleLocationClick} size={28} className="cursor-pointer hover:scale-110" />
      </div>
      <div className="flex flex-row items-center justify-center space-x-2">
        <button className="text-xl font-medium hover:scale-110" onClick={() => setUnits("metric")}>°C</button>
        <p className="text-xl font-medium">|</p>
        <button className="text-xl font-medium hover:scale-110" onClick={() => setUnits("imperial")}>°F</button>
      </div>
    </div>
  </div>
  
  )
}

export default Inputs