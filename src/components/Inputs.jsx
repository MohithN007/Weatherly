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
    <div className='flex items-center justify-center  my-6'>
    <div className='flex flex-row items-center justify-center  w-full space-x-4'>
        <input 
        value={city}
        onChange={(e)=>setCity(e.target.value)}
        type="text"
        placeholder='search by city...' 
    className='capitalize text-xl text-gray-500 font-light p-2 w-3/4 shadow-xl focus:outline-none 
    placeholder:lowercase bg-white'>
        </input>
        <BiSearch onClick={handleSearchClick} size={30} className='cursor-pointer transition ease-out hover:scale-125'/>
        <BiCurrentLocation onClick={handleLocationClick} size={30} className='cursor-pointer transition ease-out hover:scale-125'/>
<div className='flex flex-row items-center justify-center w-1/4'>
    
    
    <button className='text-2xl font-medium transition ease-out hover:scale-125' onClick={()=>setUnits("metric")}>°C</button>
    <p className='text-2xl font-medium mx-1'>|</p>
    <button className='text-2xl font-medium transition ease-out hover:scale-125'
     onClick={()=>setUnits("imperial")
     }>°F</button>
    </div>
    </div>

        </div>
  )
}

export default Inputs