import { Home } from '../Home/Home'
import { MyAccount } from '../MyAccount/MyAccount'
import { MyOrder } from '../MyOrder/MyOrder'
import { MyOrders } from '../MyOrders/MyOrders'
import { NotFound } from '../NotFound/NotFound'
import { SingIn } from '../SingIn/SingIn'

import '../../main.scss'

function App() {
  return (
    <div className='bg-red-500 font-medium'>
      <Home />
      <MyAccount />
      <MyOrder />
      <MyOrders />
      <NotFound />
      <SingIn />
    </div>
  )
}

export default App
