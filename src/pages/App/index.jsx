import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '../../helpers/AppRoutes/AppRoutes';
import { Navbar } from '../../components/Navar/Navbar';
import '../../main.scss';


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='pt-16'>
          <AppRoutes />
        </div>
      </BrowserRouter>
    </>
  )
}