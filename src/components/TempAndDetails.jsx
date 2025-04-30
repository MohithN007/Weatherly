import React from 'react'
import { BiSolidDropletHalf } from 'react-icons/bi'
import { FaThermometerEmpty } from 'react-icons/fa'
import { FiWind } from 'react-icons/fi'
import { GiSunrise, GiSunset } from 'react-icons/gi'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

const TempAndDetails = ({
    weather:{
        details,
        icon,
       feels_like,
       temp_min,
    temp_max,
        humidity,
        speed,
        temp,
        sunrise,
        sunset
    },units}) => {

        
let verticalDetails = [{
    id:1,
    Icon:FaThermometerEmpty,
    title:"Real Feel",
    value:feels_like.toFixed()+"°"
},
{
    id:2,
    Icon:BiSolidDropletHalf,
    title:"Humidity",
    value:humidity.toFixed()+"%"
},
{
    id:3,
    Icon:FiWind,
    title:"Wind",
    value:`${speed.toFixed()} ${units==="metric" ? "km/h" : "m/s"}`
}

]
let horizontalDetails = [{
    id:1,
    Icon:GiSunrise,
    title:"Sunrise",
    value:sunrise
},
{
    id:2,
    Icon:GiSunset,
    title:"Sunset",
    value:sunset
},
{
    id:3,
    Icon:MdKeyboardArrowUp,
    title:"High",
    value:temp_max.toFixed()+"°"
}
,
{
    id:4,
    Icon:MdKeyboardArrowDown,
    title:"Low",
    value:temp_min.toFixed()+"°"
}
]



  return (<div>
     <div className='flex items-center justify-center py-6 text-2xl text-cyan-300'>
        <p>{details}</p>
        
    </div>
  <div className="flex flex-col sm:flex-row items-center justify-between py-3 gap-4">
    <img src={icon} alt="weather-icon" className="w-16 sm:w-20" />
    <p className="text-4xl sm:text-5xl">{temp.toFixed()}°</p>
    <div className="flex flex-col space-y-2 items-start text-sm">
      {verticalDetails.map((d) => (
        <div key={d.id} className="flex items-center">
          <d.Icon size={18} className="mr-1" /> {d.title}: <span className="font-medium ml-1">{d.value}</span>
        </div>
      ))}
    </div>
  </div>
  
  <div className="flex flex-wrap items-center justify-center gap-6 text-sm py-3">
    {horizontalDetails.map((d) => (
      <div key={d.id} className="flex items-center">
        <d.Icon size={24} />
        <p className="ml-1">{d.title}: <span className="font-medium ml-1">{d.value}</span></p>
      </div>
    ))}
  </div>
  </div>
  
  )
}

export default TempAndDetails