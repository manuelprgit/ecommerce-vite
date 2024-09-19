import { useContext } from "react"
import { Layout } from "../../components/Layout/Layout"
import { OrdersCards } from "../../components/OrdersCards/OrdersCards"
import { ShoppingCartContext } from "../../context/ShoppingCartContext"
import { Link } from "react-router-dom"

const MyOrders = () => {

    const {
        order: orders
    } = useContext(ShoppingCartContext);
    console.log(orders)
    return (
        <Layout>
            <h1 className="text-3xl">Mis ordenes</h1>
            <div className='flex justify-center p-2 mt-4 flex-col gap-2'>
                {
                    orders.map((order, index) => (
                        <Link key={index}>
                            <OrdersCards
                                key={order.total}
                                order={order}
                            />
                        </Link>
                    ))

                }
            </div>
        </Layout>
    )
}

export { MyOrders }