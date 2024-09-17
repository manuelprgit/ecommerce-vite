import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FaRegCircleXmark } from "react-icons/fa6";
import { ShoppingCartContext } from '../../context/ShoppingCartContext';
import { OrderCards } from '../OrderCard/OrderCard';
import { formatter } from '../../helpers/formatter';

const CheckoutSideMenu = () => {

    const {
        totalPrice,
        setTotalPrice,
        count,
        setCount,
        isCheckoutSideMenuOpen,
        closeCheckoutSideMenu,
        cartProducts,
        order,
        setOrder,
        setCartProducts
    } = useContext(ShoppingCartContext);

    const handleCheckout = () => {
        const orderToAdd = {
            date: new Date(),
            products: cartProducts,
            totalProducts: count,
            totalPrice
        }
        setOrder([...order, orderToAdd]);
        setCartProducts([]);
        setTotalPrice(0);
        setCount(0);
        closeCheckoutSideMenu();
    }

    return (
        <aside
            className={`${(isCheckoutSideMenuOpen) ? 'flex' : 'hidden'} pb-28 pl-2 pr-2 product-detail flex-col fixed bg-white right-4 rounded-lg overflow-y-auto`}
        >
            <div className='flex justify-between items-center pt-4 '>
                <h2 className='font-medium text-xl'>Carrito</h2>
                <FaRegCircleXmark
                    className='cursor-pointer text-2xl'
                    onClick={closeCheckoutSideMenu}
                />
            </div>

            <div className='flex justify-center p-2 mt-4 flex-col gap-2'>
                {cartProducts.map(product => (<OrderCards
                    key={product.id}
                    product={product}
                />))}
            </div>
            <div className='flex justify-between gap-2 flex-col w-80 fixed items-center bottom-6 '>
                <div className='flex justify-between w-full p-2 bg-blue-200 shadow-lg border rounded-lg border-black/20'>
                    <span className='pl-4'>Total:</span>
                    <span className='font-semibold text-lg'>${formatter.format(totalPrice)}</span>
                </div>
                <NavLink to="/my-order/last">
                    <button
                        className='w-48 h-10 bg-blue-500 rounded-lg text-white font-semibold border-2 border-solid border-blue-900 transition active:bg-blue-500 hover:bg-blue-600'
                        onClick={() => {
                            handleCheckout();
                        }}
                    >
                        Procesar
                    </button>
                </NavLink>
            </div>


        </aside>
    )
}

export { CheckoutSideMenu }