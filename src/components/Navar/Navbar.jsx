import { useEffect, useState } from "react"
import { NavLink } from 'react-router-dom';
import { baseUrl } from "../../helpers/main";
import { CategoryItems } from "../CateoryItems/CategoryItems";

const Navbar = () => {

    const [categories, useCategories] = useState([]);

    useEffect(() => {
        fetch(baseUrl + 'categories')
            .then(res => res.json())
            .then(res => {

                useCategories(res);
            });
    }, [])

    const activeStyle = 'underline underline-offset-4';

    return (
        <>
            <nav className='flex justify-between items-center fixed top-0 z-20 w-full py-4 px-8 bg-white shadow-md'>
                <ul className='flex gap-4'>
                    <li className='font-semibold text-lg'>
                        <NavLink
                            to='/'
                            className={` ${({ isActive }) => (isActive) ? activeStyle : undefined} `}
                        >
                            <figure className='w-20 flex items-center'>
                                <img src="./src/logo.png" alt="" />
                            </figure>
                        </NavLink>
                    </li> 
                </ul>
                <ul className='flex gap-4'>
                    <li className='text-lg text-black/60'>
                        <NavLink
                            className={({ isActive }) => (isActive) ? activeStyle : undefined}
                            to='/email'
                        >
                            manuel@disacomp.com
                        </NavLink>
                    </li>
                    <li className='font-semibold text-lg'>
                        <NavLink
                            className={({ isActive }) => (isActive) ? activeStyle : undefined}
                            to='my-order'
                        >
                            My orders
                        </NavLink>
                    </li>
                    <li className='font-semibold text-lg'>
                        <NavLink
                            className={({ isActive }) => (isActive) ? activeStyle : undefined}
                            to='my-account'
                        >
                            My Account
                        </NavLink>
                    </li>
                    <li className='font-semibold text-lg'>
                        <NavLink
                            className={({ isActive }) => (isActive) ? activeStyle : undefined}
                            to='sing-in'
                        >
                            Sing-In
                        </NavLink>
                    </li>
                    <li className='font-semibold text-lg'>
                        <NavLink
                            className={({ isActive }) => (isActive) ? activeStyle : undefined}
                            to='cart'
                        >
                            🛒 Cart
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <nav className='flex justify-between items-center fixed top-14 z-10 w-full py-4 px-8 bg-white shadow-md'>
                <ul className='flex gap-1'>
                    <li className='font-semibold text-lg'>
                        <NavLink
                            to='/'
                            className={({ isActive }) => (isActive) ? activeStyle : undefined}
                        >
                            All
                        </NavLink>

                    </li>
                    {categories?.map(category => (<CategoryItems
                        key={category.id}
                        name={category.name}
                    />))}
                </ul>
            </nav>
        </>
    )
}

export { Navbar }