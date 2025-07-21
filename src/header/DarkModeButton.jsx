import React from 'react'
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'

const DarkModeButton = ({darkMode,toggleDarkMode}) => {
  return (
   <div className='flex items-center text-2xl border p-2 bg-gray-100 dark:bg-gray-800 rounded-md'>
        <button onClick={toggleDarkMode} className=''>
            {darkMode ? <IoSunnyOutline/> : <IoMoonOutline />}
        </button>
   </div>
  )
}

export default DarkModeButton