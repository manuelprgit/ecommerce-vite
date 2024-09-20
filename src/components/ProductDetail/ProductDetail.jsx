import { useContext } from 'react';
import './ProductDetail.scss';
import { FaRegCircleXmark } from "react-icons/fa6";
import { ShoppingCartContext } from '../../context/ShoppingCartContext';
import { formatter } from '../../helpers/formatter.js'
import { getImage } from '../../helpers/main.js';


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

    const addProductToCart = (product) => {
        // setCartProducts([...cartProducts, product]); 
        let productRepeated = cartProducts.find(item => item.id === product.id);
        if(!productRepeated) {
            product['quantity'] = 1
            setCartProducts([...cartProducts, product]);
        }
        else{
            const productIndex = cartProducts.findIndex( item => item.id === productRepeated.id);
            const newProductList = [...cartProducts];
            newProductList[productIndex]['quantity'] += 1;
            setCartProducts(newProductList);
        }
        setCount((count + 1));
        setTotalPrice((totalPrice + price));
    }

    return (
        <aside
            className={` ${(isProductDetailOpen) ? 'flex' : 'hidden'} pl-2 pr-2 product-detail flex-col fixed bg-white right-4 rounded-lg overflow-y-auto`}
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
                    src={getImage(images)}
                    alt={title}
                />
            </figure>
            <p className='flex flex-col '>
                <span className='font-medium text-2xl mb-1'>${formatter.format(price)}</span>
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


