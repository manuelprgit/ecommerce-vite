import { Layout } from "../../components/Layout/Layout"

import { OrdersCards } from "../../components/OrdersCards/OrdersCards"

const MyOrders = () => {
    return (
        <Layout>
            <h1 className="text-4xl">Mis ordenes</h1>
            <div className='flex justify-center p-2 mt-4 flex-col gap-2'> 
                <OrdersCards />
            </div>
        </Layout>
    )
}

export { MyOrders }