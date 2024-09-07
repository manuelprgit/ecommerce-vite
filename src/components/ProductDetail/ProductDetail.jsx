import { useContext } from 'react';
import './ProductDetail.scss';
import { FaRegCircleXmark } from "react-icons/fa6";
import { ShoppingCartContext } from '../../context/ShoppingCartContext';


const ProductDetail = () => {

    const {
        count,
        setCount,
        totalPrice,
        setTotalPrice,
        isProductDetailOpen,
        closeProductDetail,
        productToShow,
        cartProducts,
        setCartProducts,
    } = useContext(ShoppingCartContext);

    let {
        images = '',
        title = '',
        price = '',
        description
    } = productToShow;

    let imageUrl = (!!images[0]) ? images[0].replace(/\[|\]|\\|\"|\'/g, '') : ''

    const addProductToCart = (product) => {
        setCartProducts([...cartProducts, product]);
        console.log(cartProducts)
    }

    return (
        <aside
            className={` ${(isProductDetailOpen) ? 'flex' : 'hidden'} pl-6 pr-6 product-detail flex-col fixed bg-white right-4 rounded-lg overflow-y-auto`}
        >
            <div className='flex justify-between items-center pt-4'>
                <h2 className='font-medium text-xl'>Detalle</h2>
                <FaRegCircleXmark
                    className='cursor-pointer text-2xl'
                    onClick={closeProductDetail}
                />
            </div>
            <figure className='pb-4 pt-4'>
                <img
                    className='w-full h-full rounded-lg'
                    src={imageUrl}
                    alt={title}
                />
            </figure>
            <p className='flex flex-col'>
                <span className='font-medium text-2xl mb-1'>${price}</span>
                <span className='font-medium text-lg'>{title}</span>
                <span className='font-light'>{description}</span>
            </p>
            <button
                className='bg-blue-500 m-5 pt-2 pb-2 rounded-lg text-white shadow-xl font-bold hover:bg-blue-700 active:bg-blue-600 transition'
                onClick={(e) => {
                    e.stopPropagation();
                    setCount(count + 1);
                    setTotalPrice(totalPrice + price);
                    addProductToCart(productToShow);
                }}
            >
                Agregar al carrito
            </button>
        </aside>
    )
}

export { ProductDetail }


