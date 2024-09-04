import { createContext, useState } from "react";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {

    const [count, setCount] = useState(0);

    const [totalPrice, setTotalPrice] = useState(0);
    
    return (
        <ShoppingCartContext.Provider
            value={
                {
                    count,
                    setCount,
                    totalPrice,
                    setTotalPrice
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