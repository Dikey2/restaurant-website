import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos'; // Para animaciones
import 'aos/dist/aos.css'; // Estilos de AOS

// Importación de componentes
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import WelcomeSection from './components/WelcomeSection';
import FeaturedMenu from './components/FeaturedMenu';
import Menu from './components/Menu';
import Offers from './components/Offers';
import Contact from './components/Contact';
import CartPage from './components/CartPage';
import PaymentMethods from './components/PaymentMethods';
import Delivery from './components/Delivery';
import Pickup from './components/Pickup';
import SpecialOffers from "./components/SpecialOffers"; 
import  OrderHere from "./components/OrderHere";
import OrderPage from "./components/OrderPage";
import DeliveryPage from "./components/DeliveryPage";
import StorePickupPage from "./components/StorePickupPage";
import PickupPage from './components/PickupPage';
import TrackingPage from "./components/TrackingPage";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Evita reactivar animaciones al desplazarse
    });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        {/* Ruta principal */}
        <Route
          path="/"
          element={
            <>
              <WelcomeSection />
              <FeaturedMenu />
            </>
          }
        />
        {/* Otras rutas */}
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/offers" element={<SpecialOffers />} />
        <Route path="/order-here" element={<OrderHere />} />
        <Route path="/delivery" element={<DeliveryPage />} />
        <Route path="/order-here" element={<OrderPage />} />
        <Route path="/store-pickup" element={<StorePickupPage />} />
        <Route path="/pickup" element={<PickupPage />} />

        {/* Ruta para métodos de pago */}
        <Route path="/payment-methods" element={<PaymentMethods />} />

        {/* Nuevas rutas para Delivery y Pickup */}
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/pickup" element={<Pickup />} />
        <Route path="/pickup" element={<PickupPage />} />
        <Route path="/tracking-page" element={<TrackingPage />} />

        {/* Ruta para páginas no encontradas */}
        <Route path="*" element={<div>Página no encontrada</div>} />
      </Routes>

      
      <Footer />
    </>
  );
}

export default App;
