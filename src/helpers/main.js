const baseUrl = 'https://api.escuelajs.co/api/v1/';

const addProductToCart = (generalContext ,product) => { 

    const {
        cartProducts,
        setCartProducts,
        count,
        setCount,
        price,
        setTotalPrice,
        totalPrice,


    } = generalContext

    let productRepeated = cartProducts.find(item => item.id === product.id);
    if(!productRepeated) {
        product['quantity'] = 1
        setCartProducts([...cartProducts, product]);
    }
    else{
        const productIndex = cartProducts.findIndex( item => item.id === productRepeated.id);
        const newProductList = [...cartProducts];
        newProductList[productIndex]['quantity'] += 1;
        setCartProducts(newProductList);
    }
    setCount((count + 1));
    setTotalPrice((totalPrice + price));
}

export {
    baseUrl,
    addProductToCart
}