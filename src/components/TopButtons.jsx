import React from 'react'

const TopButtons = (props) => {
    const Topbt=[
        {
            city: "London",
            id:1
        },
        {
            city: "Bengaluru",
            id:2
        },
        {
            city: "Sydney",
            id:3
        },
        {
            city: "Tokyo",
            id:4
        },{
        city: "Paris",
            id:5
}]
  return (<div className="flex flex-wrap justify-center sm:justify-around gap-2 my-6">
    {Topbt.map((b) => (
      <button
        key={b.id}
        className="text-base sm:text-lg hover:bg-gray-700/20 px-3 py-2 rounded-md transition"
        onClick={() => props.setQuery({ q: b.city })}
      >
        {b.city}
      </button>
    ))}
  </div>
  )
}

export default TopButtons