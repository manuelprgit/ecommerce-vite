import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../context/ShoppingCartContext"

const CategoryItems = ({ category }) => {

    const { 
        setSearchByCategory
    } = useContext(ShoppingCartContext);


    return (
        <li className='font-semibold text-lg whitespace-nowrap'>
            | <NavLink
                onClick={() => {
                    setSearchByCategory(category.id)
                }}
            >
                {category.name}
            </NavLink>
        </li>
    )
}

export { CategoryItems }