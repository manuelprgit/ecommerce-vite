import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../context/ShoppingCartContext"

const CategoryItems = ({ category }) => {
 


    return (
        <li className='font-semibold text-lg whitespace-nowrap'>
            | <NavLink
                onClick={() => {
                    console.log(category.id)
                }}
            >
                {category.name}
            </NavLink>
        </li>
    )
}

export { CategoryItems }