import { useContext, useEffect, useState } from "react"
import { NavLink } from 'react-router-dom';
import { baseUrl } from "../../helpers/main";
import { CategoryItems } from "../CategoryItems/CategoryItems";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { formatter } from "../../helpers/formatter"; 
import { FaBagShopping } from "react-icons/fa6";


const Navbar = () => {

    const {
        count,
        totalPrice
    } = useContext(ShoppingCartContext);

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
                <ul className='flex gap-4 items-center'>
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
                        <div
                            className="flex items-center text-gray-500 gap-2 cursor-pointer hover:bg-slate-200 transition-all p-1 rounded-lg active:bg-slate-300"
                            to='cart'
                            onClick={() => {
                                //TODO: Funcion para abrir el modal del checkout
                            }}
                        >
                            <FaBagShopping 
                                className="text-xl"
                            />
                            {count} | $ {formatter.format(totalPrice)}
                        </div>
                    </li>
                </ul>
            </nav>
            <nav className='flex justify-between items-center fixed top-14 z-10 w-full py-4 px-8 bg-white shadow-md'>
                <ul className='flex gap-1 overflow-x-auto'>
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