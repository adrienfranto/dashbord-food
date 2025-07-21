import React from 'react'
import {  menuList } from '../../constants'

const NavLinks = ({isOpen}) => {
  return (
    <ul className='flex flex-col my-4 gap-1'>
        {menuList.map((item)=>(
            <a
                href={item.path}
                key={item.name}
                className='flex items-center gap-3 rounded-md  bg-gray-100  dark:bg-gray-600 dark:text-gray-400  p-2 px-3 uppercase text-gray-900 
                hover:bg-emerald-400 dark:hover:bg-gray-800 hover:text-white/50 dark:hover:text-gray-100 
                transition-all  duration-300 m-1
                '
            >
                <span className='text-lg'>{item.icon}</span>
                {isOpen && <span className='text-sm'>{item.name}</span>}
            </a>
        ))}
    </ul>
  )
}

export default NavLinks