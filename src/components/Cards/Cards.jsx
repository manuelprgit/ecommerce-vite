import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { formatter } from "../../helpers/formatter";

const Cards = ({ data }) => {

    const { 
        count, 
        setCount,
        totalPrice,
        setTotalPrice,
    } = useContext(ShoppingCartContext);

    let { category, images, title, price } = data;

    let imageUrl = images[0]//.split('https://')[1]

    return (
        <div className="bg-white w-56 h-60 rounded-lg overflow-hidden shadow-md">
            <figure className="relative mb-4 w-full h-4/5 cursor-pointer">
                <span className="absolute bg-white/70 rounded-lg px-2 m-2 text-sm">
                    {category.name}
                </span>
                <img
                    src={`https://${imageUrl}`}
                    alt={title.substring(0, 9)}
                    className="w-full h-full object-cover"
                />
                <div
                    className="text-black absolute top-2 right-2 bg-white rounded-full flex justify-center items-center w-6 h-6"
                >
                    <p
                        className="p-0 text-xl absolute bottom-0"
                        onClick={() => {
                            setCount(count + 1)
                            setTotalPrice(totalPrice + price)
                        }}
                    >
                        +
                    </p>
                </div>
            </figure>
            <p className="flex justify-around">
                <span >{title.substring(0, 9)}</span>
                <span className="font-bold">{formatter.format(price)}</span>
            </p>
        </div>
    )
}

export { Cards }