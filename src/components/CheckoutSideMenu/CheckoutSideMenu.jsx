import { useContext } from 'react';
import { FaRegCircleXmark } from "react-icons/fa6";
import { ShoppingCartContext } from '../../context/ShoppingCartContext';

const CheckoutSideMenu = () => {

    const {
        count,
        setCount,
        totalPrice,
        setTotalPrice,
        isCheckoutDetailOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu
        // closeProductDetail,
    } = useContext(ShoppingCartContext);

    //todo: cambiar el estado isProductDetailOpen por isCheckoutDetailOpen
    //todo: cambiar el estado closeProductDetail por closeCheckoutDetail

    return (
        <aside
            className={`${(isCheckoutDetailOpen) ? 'flex' : 'hidden'} pl-6 pr-6 product-detail flex-col fixed bg-white right-4 rounded-lg overflow-y-auto`}
        >
            <div className='flex justify-between items-center pt-4'>
                <h2 className='font-medium text-xl'>Checkout</h2>
                <FaRegCircleXmark
                    className='cursor-pointer text-2xl'
                    onClick={closeCheckoutSideMenu}
                />
            </div> 
        </aside>
    )
}

export { CheckoutSideMenu }