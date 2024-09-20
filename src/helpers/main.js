import { formatter } from "./formatter";

const baseUrl = 'https://api.escuelajs.co/api/v1/';

const addProductToCart = (generalContext, product) => {

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
    if (!productRepeated) {
        product['quantity'] = 1
        setCartProducts([...cartProducts, product]);
    }
    else {
        const productIndex = cartProducts.findIndex(item => item.id === productRepeated.id);
        const newProductList = [...cartProducts];
        newProductList[productIndex]['quantity'] += 1;
        setCartProducts(newProductList);
    }
    setCount((count + 1));
    setTotalPrice((totalPrice + price));
}

const getImage = (image) => {
    let imageResult = '';
    try {
        imageResult = image[0].replace(/\[|\]|\\|\"|\'/g, ''); 
    } catch (error) {
        imageResult = ''
    }
    return imageResult;
}

const totalPriceResult = (products) => products.reduce((acum, product) => (product.price * product.quantity) + acum, 0);

const totalArticles = (products) => products.reduce((acum, product) => product.quantity + acum, 0);
 
// Función para generar el mensaje de carrito
const generateCarMessage = (cart) => {
    let message = 'Hola, me gustaría comprar los siguientes artículos:\n\n';
    cart.forEach(item => {
        message += `- ${item.title} (x${item.quantity}): $${formatter.format(item.price * item.quantity)}\n`;
    });
    message += `\nTotal: $${formatter.format(cart.reduce((total, item) => total + item.price * item.quantity, 0))}`;
    return message;
} 

const sendCarByWhatsApp = (cart) => { 
    // const phone = '8498625730'; // Reemplazar con el número de teléfono de la tienda
    const phone = '8492463509'; // Reemplazar con el número de teléfono de la tienda
    const message = generateCarMessage(cart);
    const URImessage = encodeURIComponent(message);
    const urlWhatsApp = `https://wa.me/${phone}?text=${URImessage}`;
    
    window.open(urlWhatsApp, '_blank'); // Abre WhatsApp en una nueva pestaña
}

export {
    baseUrl,
    addProductToCart,
    totalPriceResult,
    totalArticles,
    getImage,
    sendCarByWhatsApp
}