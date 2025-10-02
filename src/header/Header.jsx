import React from 'react'
import ToggleMenuButtom from './ToggleMenuButtom'
import { IoSearchOutline } from 'react-icons/io5'
import DarkModeButton from './DarkModeButton'
import CartButton from './CartButton'

const Header = ({darkMode,toggleDarkMode,toggleSidebar,isSiderOpen,isCartOpen,toggleCart}) => {
  return (
   <div className={`${open } fixed w-screen right-0 top-0 z-10 bg-gray-300 p-3 dark:bg-gray-950 `}>
        <div className='flex items-center justify-between'>
             <div className={`${isSiderOpen ? 'ml-52' : "ml-20 transition-all  duration-500 ease-in-out"}`}>
                <ToggleMenuButtom 
                  toggleSidebar={toggleSidebar}  />
             </div>
              
              <div className='flex items-center gap-5'>
                  <div className='hidden w-[400px] md:flex items-center gap-2 rounded-md bg-gray-100 p-2
                   dark:bg-gray-900  dark:text-gray-200'>
                      <IoSearchOutline />
                      <input type="text"
                          placeholder='Search Product here '
                          className=' w-full bg-transparent focus:outline-none'
                      />
                  </div>

                  {/* Dark Mode */}
                  <DarkModeButton
                      darkMode={darkMode}
                      toggleDarkMode={toggleDarkMode}
                  />
                  

                  {/* Cart Button  */}
                  <CartButton
                    isCartOpen={isCartOpen}
                    toggleCart={toggleCart}
                  />
              </div>
        </div>
   </div>
  )
}

export default Header