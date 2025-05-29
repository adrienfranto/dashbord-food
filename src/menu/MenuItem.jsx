import React from 'react'
import Button from '../components/button/Button'
import { useCart } from '../contexts/CartContext';

const menuItem = ({  menuItem }) => {
  

  const { cartItems, addItemToCart } = useCart();
  
  const inCart = cartItems.find(item => item.name === menuItem.name);

  return (
    <div className='flex  cursor-pointer flex-col gap-6 rounded-lg bg-white text-gray-600
     p-5 transition-all  duration-300  ease-in-out hover:outline hover:outline-teal-200
      dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:outline'>
       <div className='overflow-hidden rounded-md '>
        <img
          src={menuItem.image}
          alt={menuItem.name}
          className='h-48 w-full object-cover transition duration-300 ease-in hover:scale-110 
          sm:h-52 md:h-60   '
        />        

      </div>
      <div className=''>
          <h3 className='text-xl font-bold'>{menuItem.name}</h3>
        <p className='font-semibold text-emerald-500 '>${ menuItem.amout}</p>
      </div>

      {/* in cart */}
      {inCart ?
        <div className='flex justify-between  items-center gap-5 rounded-lg bg-emerald-100 p-1 px-5 
        dark:bg-gray-500  dark:text-gray-200  '>
          <Button className="size-8 rounded-full bg-emerald-500 font-bold  text-white">-</Button>
          <span>{inCart.quantity < 10 ? `0${inCart.quantity}` : inCart.quantity}</span>
          <Button
            onClick={()=> addItemToCart(menuItem)}
            className="size-8 rounded-full bg-emerald-500 font-bold text-white">+</Button>
        </div> :
        <Button
          onClick={()=> addItemToCart(menuItem)}
          className="w-full bg-emerald-300 font-bold tracking-widest"
        >
          Add to Cart
        </Button>}
   </div>
  )
}

export default menuItem