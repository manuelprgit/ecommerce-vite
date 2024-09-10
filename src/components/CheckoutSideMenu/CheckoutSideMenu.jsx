import { useContext } from 'react';
import { FaRegCircleXmark } from "react-icons/fa6";
import { ShoppingCartContext } from '../../context/ShoppingCartContext';
import { OrderCards } from '../OrderCard/OrderCard';

const CheckoutSideMenu = () => {

    const {
        isCheckoutSideMenuOpen,
        closeCheckoutSideMenu,
        cartProducts
    } = useContext(ShoppingCartContext);
    
    return (
        <aside
            className={`${(isCheckoutSideMenuOpen) ? 'flex' : 'hidden'} pl-2 pr-2 product-detail flex-col fixed bg-white right-4 rounded-lg overflow-y-auto`}
        >
            <div className='flex justify-between items-center pt-4'>
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

        </aside>
    )
}

export { CheckoutSideMenu }