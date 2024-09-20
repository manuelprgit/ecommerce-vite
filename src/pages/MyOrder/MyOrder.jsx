import { useContext } from "react"
import { Layout } from "../../components/Layout/Layout"
import { ShoppingCartContext } from "../../context/ShoppingCartContext"
import { OrderCheckoutCards } from "../../components/OrderCheckOutCards/OrderCheckoutCards"
import { Link } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io";
import { sendCarByWhatsApp } from "../../helpers/main"


const MyOrder = () => {

    const { order } = useContext(ShoppingCartContext);
    const currentPath = window.location.pathname;
    let index = currentPath.split('/').pop(); 
    if(index === 'last') index = order?.length - 1;

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

            <div className='grid grid-cols-3 justify-center p-2 mt-4 flex-col gap-2'>
                {
                    order?.[index]?.products.map(item => {
                        return <OrderCheckoutCards
                            key={item.id}
                            product={item}
                        />
                    })
                }
            </div>
            <button 
                className="bg-blue-500 w-80 h-10 rounded-lg text-lg mt-4 text-white border-2 border-black hover:bg-blue-600 transition active:bg-blue-500"
                onClick={() => {
                    sendCarByWhatsApp(order?.[index]?.products);
                }}
            >
                Procesar orden
            </button>
        </Layout>
    )
}

export { MyOrder }