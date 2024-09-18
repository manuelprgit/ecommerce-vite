

const OrdersCards = ( { order } ) => {

    return (
        <div className="border-2 min-w-96 border-black/20 rounded-lg pt-2 pb-2 pl-3 pr-3 w-full flex gap-2 justify-center items-center relative">
            <div className="flex items-center gap-2">
                <p className="text-sm font-light flex flex-col items-center">
                    <span className="text-lg"><b className="font-bold">Fecha:</b> 01/02/2023</span>
                    <span className="text-lg"><b className="font-bold">Cant.:</b> 150</span>
                    <span className="text-lg"><b className="font-bold">Total:</b> $6,240.50</span>
                </p>
            </div>
            <div className="flex flex-col items-end">
                <p className="text-sm text-center"></p>
                <p className="text-l font-semibold text-center"></p>
            </div>
        </div>
    )
}


export { OrdersCards }