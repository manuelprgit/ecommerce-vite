import { formatter } from "../../helpers/formatter";

const OrderCheckoutCards = ({ product }) => {

    const { images, title, price, quantity } = product;

    return (
        <>
            <div className="border-2 max-w-96 border-black/20 rounded-lg pt-2 pb-2 pl-3 pr-3 w-full flex gap-2 justify-between items-center relative">
                <div className="flex items-center gap-2">
                    <figure className="w-20 h-20 min-w-20">
                        <img src={images[0].replace(/\[|\]|\\|\"|\'/g, '')} alt="" className="rounded-lg w-full h-full object-cover" />
                    </figure>
                    <p className="text-sm font-light">{title}</p>
                </div>
                <div className="flex flex-col items-end">
                    <p className="text-sm text-center">Cantidad</p>
                    <p className="text-l font-semibold text-center">{quantity}</p>
                    <p className="text-sm text-center">Precio</p>
                    <p className="text-l font-semibold text-center">${formatter.format(price * quantity)}</p>
                </div>
            </div>
        </>
    )
}

export { OrderCheckoutCards }