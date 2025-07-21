
import { twMerge } from "tailwind-merge"


const Button = ({ children, onClick, className }) => {
  const buttonVariant = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 7,
        
      }
    },
    tap: {
      scale: 0.9,

    }
  }
  return (
      <button
          onClick={onClick}
          variants={buttonVariant}
          whileHover="hover"
          whileTop="tap"
          
          className={
              twMerge("flex w-max items-center justify-center rounded-md bg-gray-100 p-2 text-gray-800 dark:bg-gray-800 dark:text-gray-200 ",
              className
          )}>
        {children}
    </button>
  )
}

export default Button