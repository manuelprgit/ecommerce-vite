import { FaXmark } from "react-icons/fa6"
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { formatter } from "../../helpers/formatter";


const OrderCards = ({ product }) => {

    const {
        count,
        setCount,
        totalPrice,
        setTotalPrice,
        cartProducts,
        setCartProducts
    } = useContext(ShoppingCartContext)

    const getQuantityItem = () => cartProducts.find(item => item.id === product.id).quantity;

    const handleDelete = (id) => {
        let productFiltered = cartProducts.filter(product => product.id != id);
        setCartProducts(productFiltered);
    }

    const modifyQuantity = (isIncrementing) => {
        const index = cartProducts.findIndex(item => item.id === product.id);
        const newProductList = [...cartProducts];
        if (isIncrementing) {
            newProductList[index].quantity++
            setCount(count + 1)
            setTotalPrice(totalPrice + price);
        }
        else {
            if(newProductList[index].quantity == 1) {
                let productFiltered = cartProducts.filter(currentProduct => currentProduct.id != product.id);
                setCartProducts(productFiltered);
                return
            }
            newProductList[index].quantity--;
            setCount(count - 1)
            setTotalPrice(totalPrice - price);
        } 
        setCartProducts(newProductList);
    }

    const { id, images, price, title } = product;

    let imageUrl = (!!images[0]) ? images[0].replace(/\[|\]|\\|\"|\'/g, '') : '';

    return (
        <div className="border-2 border-black/20 rounded-lg pt-2 pb-2 pl-3 pr-3 w-full flex gap-2 justify-between items-center relative">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20 min-w-20">
                    <img src={imageUrl} alt="" className="rounded-lg w-full h-full object-cover" />
                </figure>
                <p className="text-sm font-light">{title}</p>
            </div>
            <div className="flex flex-col gap-2">
                <FaXmark
                    className='cursor-pointer text-2 text-red-600 absolute top-1 right-1'
                    onClick={() => {
                        handleDelete(id)
                    }}
                />
                <p className="text-lg font-semibold text-center">${formatter.format(price)}</p>
                <div className="flex items-center h-6 gap-1 justify-end">
                    <FaMinus
                        className="cursor-pointer text-sm"
                        onClick={() => { modifyQuantity(false) }}
                    />
                    <input
                        type="text"
                        value={getQuantityItem(product)}
                        onChange={(e) => {
                            getQuantityItem(product)
                        }}
                        className="w-8 bg-black/20 text-center text-m"
                    />
                    <FaPlus
                        className="cursor-pointer text-sm"
                        onClick={() => { modifyQuantity(true) }}
                    />
                </div>
            </div>
        </div>
    )
}

export { OrderCards }