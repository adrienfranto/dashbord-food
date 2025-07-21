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
    const removeItemFromCart = ({itemName}) => {
        setCartItems(prevItems =>
            prevItems.filter((item) => item.name !== itemName));
        
        
    }
    

    //decrease the item quantity it remove item 
    const decreaseItemQuantity = (itemName)=>{
        setCartItems(prevItems => {
            return prevItems.map(item => {
                if (item.name == itemName) {
                    if (item.quantity > 1) {
                        //decrease the quality if greater than 1
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        //if quantity is 1,remove the item from cart
                        removeItemFromCart(itemName);
                        return null
                    }
                }
                return item;
            }).filter(item => item !== null);

        })
    }

    //calculate the total  amount
    const totalAmount = cartItems.reduce((total, item) => 
        total + item.amout * item.quantity,0
    );

  return (
      <CartContext.Provider
          value={{ cartItems, addItemToCart,removeItemFromCart,decreaseItemQuantity,totalAmount }}
      >
        {children}
    </CartContext.Provider>
  )
}

export default CartProdiver