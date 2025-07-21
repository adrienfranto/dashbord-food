import { MdDeleteForever } from "react-icons/md";
import { useCart } from "../../contexts/CartContext"
import Button from "../button/Button";

const CartItem = ({ item }) => {
    
    const {  addItemToCart, removeItemFromCart, decreaseItemQuantity } = useCart();
  return (
    <div className="relative rounded-md border-2 border-gray-100 dark:border-gray-700 my-1">
        <div className="flex items-center gap-2 p-2">
            <div className="overflow-hidden rounded-md">
                  <img
                      src={item.image}
                      className="size-14 rounded-md object-cover transition duration-200
                      hover:scale-110"
                  />
            </div>
            <div>
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400">${ item.amout * item.quantity}</p>
            </div>
        </div>
        <div className="absolute bottom-1 right-1 flex items-center gap-2">
              <Button
                  onClick={()=> decreaseItemQuantity(item.name)}
                  className=""
              >-</Button>
              <span>{ item.quantity < 10 ? `0${item.quantity}`: `${item.quantity}`}</span>
              <Button
                  onClick={() => addItemToCart(item)}
                  className="h-7 font-bold"
              >+</Button>
        </div>
          <Button
              onClick={()=> removeItemFromCart(item)}
              className="absolute -right-2 -top-2 text-xl 
        hover:text-red-700 dark:text-red-400 dark:hover:text-red-500">
            <MdDeleteForever/>
        </Button>
    </div>
  )
}

export default CartItem