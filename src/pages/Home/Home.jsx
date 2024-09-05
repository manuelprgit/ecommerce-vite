import { useState, useEffect } from "react";

import { Cards } from "../../components/Cards/Cards"
import { Layout } from "../../components/Layout/Layout"
import { baseUrl } from "../../helpers/main";
import { ProductDetail } from "../../components/ProductDetail/ProductDetail";

const Home = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(baseUrl + 'products')
            .then(res => res.json())
            .then(res => setItems(res));
    }, [])

    return (
        <Layout>
            <h1 className="text-3xl pb-5">Home page</h1>
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