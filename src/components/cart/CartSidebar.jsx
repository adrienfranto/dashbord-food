import React from 'react'
import { FaTimes } from 'react-icons/fa'
import Button from '../button/Button'
import { useCart } from '../../contexts/CartContext'
import CartItem from './CartItem'

const CartSidebar = ({ isCartOpen, toggleCart }) => {
  
  const { cartItems,totalAmount } = useCart();

  return (
    <div className={` fixed right-0 top-0 z-20 h-screen w-[400px] 
    transform transition-transform duration-300 ease-in-out ${isCartOpen ? "translate-x-0" : "translate-x-full"} `}>
      <div className='flex  h-screen flex-col bg-white shadow-lg dark:bg-gray-800 dark:text-gray-200 
      rounded-bl-3xl rounded-tl-3xl'>
        {/* Cart Header */}
        <div className='flex items-center justify-between border-b border-gray-700'>
          <h2 className='px-3'>You Cart</h2>
          <Button onClick={toggleCart}>
            <FaTimes size={20}/>
          </Button>
        </div>

        

        <div className='flex-1  p-3 '>
        {cartItems.length === 0 ? (
          <p className='text-center text-gray-600 dark:text-gray-400'>
            You cart is empty
          </p>
          ) : (
              <div className=''>
                {cartItems.map((item) => (
                  <CartItem key={item.name} item={item} />
                ))}
              </div>
          )}
        </div>
          <div className='overflow-hidden border-t  border-gray-200 p-4 dark:border-gray-700 '> 
            
              <p className=' text-lg font-semibold flex  items-center justify-between'>
                Total Amount: 
            <span className='font-normal text-xl'> ${ totalAmount }</span>
              </p>
              <button
                className='mt-5 w-full bg-gray-200 p-2 border border-gray-300 dark:bg-gray-800 rounded-md'
              >
                Checkout
              </button>
          </div>
        
      </div>
    </div>
  )
}

export default CartSidebar