import { NavLink } from "react-router-dom"

const CategoryItems = ({ name }) => {
    console.log(name)
    const activeStyle = 'underline underline-offset-4'

    return (
        <li className='font-semibold text-lg'>
            | <NavLink
                to={`/${name.split(' ').join('-').toLowerCase()}`}
                className={({ isActive }) => (isActive) ? activeStyle : undefined}
            >
                {name}
            </NavLink> 
        </li>
    )
}

export { CategoryItems }