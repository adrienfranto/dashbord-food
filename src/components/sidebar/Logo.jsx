import React from 'react'
import logoImage from '../../assets/Logo.jpg';
const Logo = ({isOpen}) => {
  return (
      <img 
          className={`${isOpen ? "w-10" : "w-10" } mt-4 transition-all duration-300 `}
          src={logoImage}>
        
    </img>
  )
}

export default Logo