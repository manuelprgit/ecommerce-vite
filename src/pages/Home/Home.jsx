import { useContext } from "react";

import { Cards } from "../../components/Cards/Cards"
import { Layout } from "../../components/Layout/Layout"
import { ProductDetail } from "../../components/ProductDetail/ProductDetail";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

// import { CheckoutSideMenu } from "../../components/CheckoutSideMenu/CheckoutSideMenu";

const Home = () => {

    const {
        items,
        filteredItems,
        filteredItemsByCategory,
        searchByTitle,
        setSearchByTitle,
    } = useContext(ShoppingCartContext);

    const renderView = () => {
        if(searchByTitle?.length > 0){
            if(filteredItems?.length > 0){
                return (filteredItems?.map(item => (<Cards
                    key={item.id}
                    data={item}
                />)))
            }else{
                return (
                    <h1>No hay articles con esta descripción!</h1>
                )
            }
        }
        else{
            return (items?.map(item => (<Cards
                key={item.id}
                data={item}
            />)))
        }
    }

    return (
        <Layout>
            <h1 className="text-3xl pb-5">Inicio</h1>
            <input
                type="text"
                placeholder="Buscar Productos"
                className="border-2 border-solid mb-6 w-80 h-10 p-4 rounded-lg text-xl"
                onChange={(e) => {

                    setSearchByTitle(e.target.value);
                }}
                value={searchByTitle}
            />
            <div className="grid gap-4 justify-items-center grid-cols-auto-fill w-full max-w-screen-lg">
                {renderView()}
            </div>
            <ProductDetail />
        </Layout>
    )
}

export { Home }