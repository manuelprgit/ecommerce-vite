import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../helpers/main";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {

    //Get Articles
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        fetch(baseUrl + 'products')
            .then(res => res.json())
            .then(res => setItems(res));
    }, [])

    //Search Article
    const [textSearch, setTextSearch] = useState('');

    //Shopping Cart - Increment quantity
    const [count, setCount] = useState(0);

    //Shopping Cart - Increment price
    const [totalPrice, setTotalPrice] = useState(0);

    //Shopping Cart - Add products to cart
    const [cartProducts, setCartProducts] = useState([]);

    //Product Detail - Open/Close Modal
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    //Product Detail - Show product
    const [productToShow, setProductToShow] = useState({});

    //Checkout Detail - Show product
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    //Shopping Cart - Order
    const [order, setOrder] = useState([]);


    return (
        <ShoppingCartContext.Provider
            value={
                {
                    textSearch,
                    setTextSearch,
                    filteredItems,
                    setFilteredItems,
                    items,
                    setItems,
                    count,
                    setCount,
                    totalPrice,
                    setTotalPrice,
                    isProductDetailOpen,
                    openProductDetail,
                    closeProductDetail,
                    productToShow,
                    setProductToShow,
                    isCheckoutSideMenuOpen,
                    setIsCheckoutSideMenuOpen,
                    openCheckoutSideMenu,
                    closeCheckoutSideMenu,
                    cartProducts,
                    setCartProducts,
                    order,
                    setOrder
                }
            }
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}

export {
    ShoppingCartProvider,
    ShoppingCartContext
}