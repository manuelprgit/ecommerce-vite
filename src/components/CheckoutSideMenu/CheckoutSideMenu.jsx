import { useContext } from 'react';
import { FaRegCircleXmark } from "react-icons/fa6";
import { ShoppingCartContext } from '../../context/ShoppingCartContext';

const CheckoutSideMenu = () => {

    const {
        count,
        setCount,
        totalPrice,
        setTotalPrice,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu
        // closeCheckoutDetail,
    } = useContext(ShoppingCartContext);
 

    return (
        <aside
            className={`${(isCheckoutSideMenuOpen) ? 'flex' : 'hidden'} pl-6 pr-6 product-detail flex-col fixed bg-white right-4 rounded-lg overflow-y-auto`}
        >
            <div className='flex justify-between items-center pt-4'>
                <h2 className='font-medium text-xl'>Checkout</h2>
                <FaRegCircleXmark
                    className='cursor-pointer text-2xl'
                    onClick={closeCheckoutSideMenu}
                />
            </div> 

            {/* //TODO: hacer las cartas */}
        </aside>
    )
}

export { CheckoutSideMenu }