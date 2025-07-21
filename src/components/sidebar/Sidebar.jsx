import React from 'react'
import Button from '../button/Button'
import Logo from './Logo'
import NavLinks from './NavLinks'
import { FaSignOutAlt } from 'react-icons/fa'

const Sidebar = ({isOpen }) => {
  return (
      <div className={`${isOpen ? "w-44" : "w-16"}  fixed left-0 top-0 h-full overflow-x-hidden text-gray-900  transition-all  duration-500 ease-in-out dark:text-white
     bg-gray-300 dark:bg-gray-950`}>
        <nav className='flex  flex-col items-center justify-between h-full p-3'>
            <div className=' flex flex-col items-center '>
                {/* LOGO */}
                <Logo
                        isOpen={isOpen}
                
                    />
                
                {/* Nav Links */}
                  <NavLinks isOpen={isOpen}/>
            </div>
            {/* Button */}
            <Button className="flex w-full items-center gap-2 ">
                <FaSignOutAlt className='text-lg text-red-600 '/>
                {isOpen  &&  <span>Logout</span>}
            </Button>
        </nav>
    </div>
  )
}

export default Sidebar