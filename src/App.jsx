import React, { useState } from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Header from './header/Header';
import CartSidebar from './components/cart/CartSidebar';
import Main from './main/Main';
import CartProdiver from './contexts/CartContext';

const App = () =>   {
  

  const [darkMode, setDarkMode] = useState(true);
  const [isSiderOpen, setIsSiderOpen] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const toggleSidebar = () => {
    setIsSiderOpen(!isSiderOpen);
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  };
 
  return (
    <CartProdiver>
      <div className={`${darkMode ? "dark" : ""}`}>
      <div className='flex bg-white transition-all duration-300 ease-in-out dark:bg-gray-950'>
        {/* SIDEBAR */}
        <Sidebar
          isOpen={isSiderOpen}
        />

        {/* Content */}
        <div className={`${isSiderOpen ? "ml-44" : "ml-16"} flex-1 duration-500 ease-in-out  dark:text-white  `}>
          
          {/* HEADER */}
          <Header
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            toggleSidebar={toggleSidebar}
            isCartOpen={isCartOpen}
            toggleCart={toggleCart}
          />
          
          {/* MAIN */}
          <Main/>

          {/* CARTSIDEBAR */}
          <CartSidebar
            isCartOpen={isCartOpen}
            toggleCart={toggleCart}
          />
       </div>
      </div>
    </div>
    </CartProdiver>
  )
}

export default App