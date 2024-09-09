import { FaXmark } from "react-icons/fa6"
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";


const OrderCards = ({ product }) => {
 
    const { 
        cartProducts,
        setCartProducts
    } = useContext(ShoppingCartContext) 

    const getQuantityItem = (product) => {
        
        return cartProducts.find(item => item.id === product.id).quantity;

    }

    const { images, price, title } = product;

    let imageUrl = (!!images[0]) ? images[0].replace(/\[|\]|\\|\"|\'/g, '') : '';

    return (
        <div className="border-2 border-black/20 rounded-lg pt-4 pb-4 pl-3 pr-3 w-full flex gap-2 justify-between items-center relative">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img src={imageUrl} alt="" className="rounded-lg w-full h-full object-cover" />
                </figure>
                <p className="text-sm font-light">{title}</p>
            </div>
            <div className="">
                <FaXmark
                    className='cursor-pointer text-2 text-red-600 absolute top-1 right-1'
                    onClick={() => {

                    }}
                />
                <p className="text-lg font-semibold text-center">${price}</p>
                <div className="flex items-center h-6 gap-1">
                    <FaMinus className="cursor-pointer text-sm" />
                    {/* <input
                        type="text" 
                        value={getQuantityItem(product)}
                        className="w-10 bg-black/20 text-center text-m"
                    /> */}
                    <div
                        className="w-8 bg-black/20 text-center text-m"
                    >
                        {getQuantityItem(product)}
                    </div>
                    <FaPlus className="cursor-pointer text-sm" />
                </div>
            </div>
        </div>
    )
}

export { OrderCards }