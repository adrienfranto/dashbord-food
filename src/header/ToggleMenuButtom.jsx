import React from 'react'
import Button from '../components/button/Button'
import { IoMenuOutline } from 'react-icons/io5'

const ToggleMenuButtom = ({toggleSidebar}) => {
  return (
    <Button onClick={toggleSidebar}>
      <IoMenuOutline size={35} />
    </Button>
  )
}

export default ToggleMenuButtom