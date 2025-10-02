import React from 'react'
import Category from '../category/Category'
import Menu from '../menu/Menu'

const Main = () => {
  return (
      <div className='relative overflow-hidden rounded-3xl bg-gray-200 p-5  
            dark:bg-gray-800 dark:text-gray-200 mt-16'>
        {/* Categories */}
        <Category/>
          
        {/* Menu Items */}
        <Menu/>
    </div>
  )
}

export default Main