import { useContext } from "react";

import { Cards } from "../../components/Cards/Cards"
import { Layout } from "../../components/Layout/Layout"
import { ProductDetail } from "../../components/ProductDetail/ProductDetail";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

// import { CheckoutSideMenu } from "../../components/CheckoutSideMenu/CheckoutSideMenu";

const Home = () => {

    const {
        items,
        setItems,
        textSearch,
        setTextSearch
    } = useContext(ShoppingCartContext);
    
    return (
        <Layout>
            <h1 className="text-3xl pb-5">Inicio</h1>
            <input
                type="text"
                placeholder="Buscar Productos"
                className="border-2 border-solid mb-6 w-80 h-10 p-4 rounded-lg text-xl"
                onChange={(e) => {
                    setTextSearch(e.target.value);
                }}
                value={textSearch}
            />
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
                {items?.map(item => (<Cards
                    key={item.id}
                    data={item}
                />))}
            </div>
            <ProductDetail />
        </Layout>
    )
}

export { Home }