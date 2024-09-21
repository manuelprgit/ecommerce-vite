import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../helpers/main";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {

    //Get Articles
    const [items, setItems] = useState([]);

    //Filter Articles
    const [filteredItems, setFilteredItems] = useState([]);

    //Search Articles
    const [searchByTitle, setSearchByTitle] = useState('');

    //Filter Articles by Categories
    const [filteredItemsByCategory, setFilteredItemsByCategory] = useState([]);

    //Filter Articles by Categories
    const [searchByCategory, setSearchByCategory] = useState('');

    useEffect(() => {
        fetch(baseUrl + 'products')
            .then(res => res.json())
            .then(res => setItems(res));
    }, []);

    //Filter By Title    
    const filterProducts = (items, searchedValue, categoryId) =>{
        console.log(items)
        console.log(searchByCategory)
        return items?.filter(item => {

            if(!!categoryId){
                if (item.title.toLowerCase().includes(searchedValue.toLowerCase()) && item.category.id == categoryId) {
                    console.log(item);
                    return item;
                }
            }else{
                item.title.toLowerCase().includes(searchedValue.toLowerCase())
            }

        });

    }

    useEffect(() => {
        if (searchByTitle) setFilteredItems(filterProducts(items, searchByTitle, searchByCategory));
    }, [items, searchByTitle]);

    //Filter By Categories
    const filteredItemsByCategories = (items, categoryId) =>
        items?.filter(item => item.category.id === categoryId);

    useEffect(() => {
        if (searchByCategory) setFilteredItems(filterProducts(items, searchByTitle, searchByCategory));
    }, [items, searchByCategory]);

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
                    searchByTitle,
                    setSearchByTitle,
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
                    setOrder,
                    filteredItemsByCategory,
                    setFilteredItemsByCategory,
                    searchByCategory,
                    setSearchByCategory
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