import React from 'react'
import Button from '../components/button/Button'
import { IoMenuOutline } from 'react-icons/io5'

const ToggleMenuButtom = ({toggleSidebar}) => {
  return (
    <Button onClick={toggleSidebar}>
      <IoMenuOutline size={35}  className='bg-gray-900 p-1 border border-gray-300 rounded-md '/>
    </Button>
  )
}

export default ToggleMenuButtom