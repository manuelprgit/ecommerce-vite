import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { formatter } from "../../helpers/formatter";
import { CiCirclePlus } from "react-icons/ci";

const Cards = ({ data }) => {

    const {
        count,
        setCount,
        totalPrice,
        setTotalPrice,
        openProductDetail,
        setProductToShow,
        cartProducts,
        setCartProducts
    } = useContext(ShoppingCartContext);

    let { id, category, images, title, price } = data; 

    const showProductDetail = () => {
        setProductToShow(data);
        openProductDetail();
    }

    const addProductToCart = (product) => { 
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
    };

    let imageUrl = images[0].replace(/\[|\]|\\|\"|\'/g, '');
    let substringTitle = title.substring(0, 11);

    return (
        <div
            className="bg-white w-56 h-60 rounded-lg overflow-hidden shadow-md"
            onClick={showProductDetail}
        >
            <figure className="relative mb-4 w-full h-4/5 cursor-pointer">
                <span className="absolute bg-white/70 rounded-lg px-2 m-2 text-sm bottom-0">
                    {category.name}
                </span>
                <img
                    src={imageUrl}
                    alt={substringTitle}
                    className="w-full h-full object-cover"
                />
                <div
                    className="text-black absolute top-2 right-2 bg-white rounded-full flex justify-center items-center w-6 h-6"
                >
                    <CiCirclePlus
                        className="p-0 w-6 h-6 absolute bottom-0"
                        onClick={(e) => {
                            e.stopPropagation(); 
                            addProductToCart(data);
                        }}
                    />
                </div>
            </figure>
            <p className="flex justify-around">
                <span >{substringTitle}</span>
                <span className="font-bold">{formatter.format(price)}</span>
            </p>
        </div>
    )
}

export { Cards }