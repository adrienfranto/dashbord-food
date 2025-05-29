import React from 'react'
import { menuitems } from '../constants'
import MenuItem from './menuItem'

const Menu = () => {
  return (
    <div className='mt-7'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {menuitems.map((item) => (
          <MenuItem key={item.name} menuItem={item} />
        ))}
      </div>
    </div>
  )
}

export default Menu