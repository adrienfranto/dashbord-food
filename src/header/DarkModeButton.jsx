import React from 'react'
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'

const DarkModeButton = ({darkMode,toggleDarkMode}) => {
  return (
   <div className=' text-2xl'>
        <button onClick={toggleDarkMode} className=''>
            {darkMode ? <IoSunnyOutline/> : <IoMoonOutline />}
        </button>
   </div>
  )
}

export default DarkModeButton