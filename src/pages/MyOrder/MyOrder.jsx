import { useContext } from "react"
import { Layout } from "../../components/Layout/Layout"
import { ShoppingCartContext } from "../../context/ShoppingCartContext"
import { OrderCheckoutCards } from "../../components/OrderCheckOutCards/OrderCheckoutCards"

const MyOrder = () => {

    const { order } = useContext(ShoppingCartContext); 
    
    return (
        <Layout>
            <h1 className="text-4xl">Mi orden</h1>

            <div className='flex justify-center p-2 mt-4 flex-col gap-2'>
                {
                    order?.slice(-1)[0].products.map(item => {
                        return <OrderCheckoutCards 
                            key={item.id}
                            product={item}
                        />
                    })
                }
            </div>
        </Layout>
    )
}

export { MyOrder }