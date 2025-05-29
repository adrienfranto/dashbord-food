import { createContext, useContext, useState } from "react"

//create context
const CartContext = createContext();

//custom heek to use the cart context 
export const useCart = () => useContext(CartContext);

const CartProdiver = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    

    //add item to cart
    const addItemToCart = (item) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find((i) => i.name === item.name);
            if (existingItem) {
                return prevItems.map((i) => 
                i.name === item.name ? { ...i,quantity: i.quantity + 1} : i
                )
            }
            else {
                return [...prevItems,{...item ,quantity : 1}]
            }
        })
    }

    //remove item from the cart
    

    //decrease the item quantity it remove item 

    //calculate the total  amount
  return (
    <CartContext.Provider value={{cartItems,addItemToCart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProdiver