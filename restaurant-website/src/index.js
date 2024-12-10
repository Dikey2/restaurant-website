import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CartProvider } from './components/CartContext'; // Asegúrate de que esta ruta sea correcta
import './index.css'; // Archivo de estilos globales, si corresponde

// Crea el root para renderizar la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza la aplicación envuelta en CartProvider y BrowserRouter
root.render(
  <React.StrictMode>
    <CartProvider> {/* Contexto del carrito */}
      <BrowserRouter> {/* Enrutamiento */}
        <App />
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);

