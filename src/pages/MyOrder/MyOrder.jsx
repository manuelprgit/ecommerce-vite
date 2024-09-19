import { useContext } from "react"
import { Layout } from "../../components/Layout/Layout"
import { ShoppingCartContext } from "../../context/ShoppingCartContext"
import { OrderCheckoutCards } from "../../components/OrderCheckOutCards/OrderCheckoutCards"
import { Link } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io";


const MyOrder = () => {

    const { order } = useContext(ShoppingCartContext);

    return (
        <Layout>
            <div className="flex items-center gap-6">

                <Link to={'/my-orders'}>
                    <IoIosArrowBack
                        className="text-3xl cursor-pointer transition-all hover:bg-black/20 rounded-full"
                        title="Volver atrás"
                    />
                </Link>
                <h1 className="text-4xl">Mi orden</h1>
            </div>

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