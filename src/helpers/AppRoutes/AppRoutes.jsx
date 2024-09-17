
import { useRoutes } from "react-router-dom";

import { Home } from '../../pages/Home/Home'; 
import { MyAccount } from '../../pages/MyAccount/MyAccount';
import { MyOrder } from '../../pages/MyOrder/MyOrder'; 
import { MyOrders } from '../../pages/MyOrders/MyOrders'; 
import { SingIn } from '../../pages/SingIn/SingIn';
import { NotFound } from '../../pages/NotFound/NotFound';

const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/', element: <Home /> }, 
        { path: 'my-account', element: <MyAccount /> },
        { path: 'my-order', element: <MyOrder /> },
        { path: 'my-orders', element: <MyOrders /> },
        { path: 'my-order/last', element: <MyOrder /> },
        { path: 'sing-in', element: <SingIn /> },
        { path: '/*', element: <NotFound /> },
    ])
    
    return routes;

}

export { AppRoutes }