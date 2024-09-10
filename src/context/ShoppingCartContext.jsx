import { createContext, useState } from "react";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {

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