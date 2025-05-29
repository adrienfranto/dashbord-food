import React from 'react'
import Button from '../components/button/Button'
import { IoCartOutline } from 'react-icons/io5'
import { useCart } from '../contexts/CartContext'

const CartButton = ({ toggleCart }) => {
  const { cartItems } = useCart();
  const cartItemCount = cartItems.reduce((total,item)=>total + item.quantity,0)
  return (
    <Button
      onClick={toggleCart}
      className="relative">
          <div className='absolute -right-3 -top-2 flex size-5 items-center justify-center rounded-full
         bg-gray-300 text-[12px] font-bold text-gray-900 '>
           {cartItemCount}
        </div>
        <IoCartOutline className='bg-gray-400 text-2xl rounded-md'/>
    </Button>
  )
}

export default CartButton