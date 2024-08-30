import { NavLink } from 'react-router-dom';
import './Navar.scss';

const Navbar = () => {

    const activeStyle = 'bg-sky-400 transition'

    return (
        <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8'>
            <ul className='flex gap-4'>
                <li className='font-semibold text-lg'>
                    <NavLink
                        to='/'
                        className={` ${({ isActive }) => (isActive) ? activeStyle : undefined} `}
                    >
                        Logo
                    </NavLink>
                </li>
                <li className='font-semibold text-lg'>
                    <NavLink
                        className={({ isActive }) => (isActive) ? activeStyle : undefined}
                        to='/'
                    >
                        Home
                    </NavLink>
                </li>
                <li className='font-semibold text-lg'>
                    <NavLink
                        to='/electronics'
                        className={({ isActive }) => (isActive) ? activeStyle : undefined}
                    >
                        Electrónicos
                    </NavLink>
                </li>
                <li className='font-semibold text-lg'>
                    <NavLink
                        to='/furniture'
                        className={({ isActive }) => (isActive) ? activeStyle : undefined}
                    >
                        Furniture
                    </NavLink>
                </li>
                <li className='font-semibold text-lg'>
                    <NavLink 
                        className={({ isActive }) => (isActive) ? activeStyle : undefined}
                        to='/toys'
                    >
                        Toys
                    </NavLink>
                </li>
                <li
                    className='font-semibold text-lg'>
                    <NavLink
                        className={({ isActive }) => (isActive) ? activeStyle : undefined}
                        to='/others'
                    >
                        Others
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
                        to='my-orders'
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
            </ul>
        </nav>
    )
}

export { Navbar }