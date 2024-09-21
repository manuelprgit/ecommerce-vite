import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '../../helpers/AppRoutes/AppRoutes';
import { Navbar } from '../../components/Navar/Navbar';
import { ShoppingCartProvider } from '../../context/ShoppingCartContext';
import { CheckoutSideMenu } from '../../components/CheckoutSideMenu/CheckoutSideMenu';
import '../../main.scss';

export default function App() {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}