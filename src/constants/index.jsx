import { FaBox, FaChartBar, FaList, FaShoppingCart, FaTachometerAlt, FaTruck, FaUsers } from "react-icons/fa";

import Tompo from "../assets/Jesoa.jpg";
import BreackFast from "../assets/BreackFast.jpg"
import Lunch from "../assets/Lunch.jpg"
import Dinner from "../assets/Dinner.jpg";
import Dessert from "../assets/Dessert.jpg"
import Drink from "../assets/Drink.jpg"
import Snake from "../assets/Snake.jpg"
import Appert from "../assets/Apperti.jpg"
import MixPlatter from "../assets/MixPlatter.jpg"
import Pancakes from "../assets/Pancakes.jpg"
import GrilledChicken from "../assets/GrilledChicken.jpg"
import Steak from "../assets/Steak.jpg"
import ChocolateCake from "../assets/ChocolateCake.jpg"
import Lemonade from "../assets/Lemonade.jpg"
import Nachos from "../assets/Nachos.jpg"
import GarlicBread from "../assets/GarlicBread.jpg"

export const menuList = [
    {
        name: "Dashboard",
        path: "/dashboard",
        icon: <FaTachometerAlt />
    },
    {
        name: "Customers",
        path: "/customers",
        icon: <FaUsers />
    },
    {
        name: "Delivery",
        path: "/delivery",
        icon: <FaTruck />
    },
    {
        name: "Orders",
        path: "/orders",
        icon: <FaShoppingCart />
    },
    {
        name: "Menu",
        path: "/menu",
        icon: <FaList />
    },
    {
        name: "Inventory",
        path: "/inventory",
        icon: <FaBox />
    },
    {
        name: "Reports",
        path: "/reports",
        icon: <FaChartBar />
    }
];


export const categories = [
    {
        name: "All",
        quantities: 200,
        image: Tompo
    },
    {
        name: "Breakfast",
        quantities: 50,
        image: BreackFast
    },
    {
        name: "Lunch",
        quantities: 50,
        image: Lunch
    },
    {
        name: "Dinner",
        quantities: 50,
        image: Dinner
    },
    {
        name: "Dessert",
        quantities: 50,
        image: Dessert
    },
    {
        name: "Drinks",
        quantities: 50,
        image: Drink
    },
    {
        name: "Snacks",
        quantities: 50,
        image: Snake

    },
    {
        name: "Appetizers",
        quantities: 50,
        image: Appert
    }
];

export const menuitems = [
    {
        name: "Mixed Platter",
        amout: 50,
        image: MixPlatter
    },
    {
        name: "Pancakes",
        amout: 30,
        image: Pancakes
    },
    {
        name: "Grilled Chicken",
        amout: 40,
        image: GrilledChicken
    },
    {
        name: "Steak",
        amout: 1000,
        image: Steak
    },
    {
        name: "Chocolate Cake",
        amout: 100,
        image: ChocolateCake
    },
    {
        name: "Lemonade",
        amout: 20,
        image: Lemonade
    },
    {
        name: "Nachos",
        amout: 10,
        image: Nachos
    },
    {
        name: "Garlic Bread",
        amout: 10,
        image : GarlicBread
    }
]