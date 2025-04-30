import React from 'react'
import img from './assets/img.jpg'
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/app'); // This routes to the working weather page
  };




  return (
    <div  style={{ backgroundImage: `url(${img})` }} 
    className='w-full h-screen bg-cover bg-center 
    flex flex-col justify-center items-center '>


      <div className='backdrop-blur-sm bg-black/10 w-full h-full flex flex-col justify-center items-center'>
    
    <h1 className='text-9xl font-bold text-gray-800 blur-none'>
      
      WEATHERLY</h1>
    
    <h2 className='text-2xl font-bold text-gray-800 blur-none mb-30 mt-7'>
      
      Your WEATHER Companion</h2>
   
   
   
   <button onClick={handleStart} >
    <a href="#_" class="relative inline-block text-lg group">
    <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
        <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
        <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
        <span class="relative text-xl">Get Started</span>
    </span>
    <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-2000 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</a>  
</button>



</div>
    
    
    </div>
  )
}

export default Hero