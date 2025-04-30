import React from 'react'

const TimeAndLocation = ({weather:{formattedLocalTime,name,country},h}) => {

  console.log(h)
  return (
    <div className="text-center my-6">
  <p className="text-lg sm:text-xl font-light">{formattedLocalTime}</p>
  <p className="text-2xl sm:text-3xl font-medium mt-2">{name}, {country}</p>
</div>

  )
}

export default TimeAndLocation