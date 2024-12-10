import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext'; // Hook personalizado para acceder al contexto
import './Navbar.css'; // Archivo de estilos
import logo from '../assets/images/logo.png'; // Logo del sitio
import cartIcon from '../assets/images/cart-icon.png'; // Ícono del carrito

function Navbar() {
  const { totalItems } = useCart(); // Acceder al total de productos en el carrito

  return (
    <nav className="navbar-custom">
      {/* Logo del sitio */}
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Inka Bocado" className="navbar-logo-image" />
      </Link>

      {/* Enlaces de navegación */}
      <ul className="navbar-links">
        <li>
          <Link to="/" className="navbar-link">HOME</Link>
        </li>
        <li>
          <Link to="/menu" className="navbar-link">MENÚ</Link>
        </li>
        <li>
          <Link to="/offers" className="navbar-link">OFERTAS</Link>
        </li>
        <li>
          <Link to="/order-here" className="navbar-link">ORDENA AQUÍ</Link>
        </li>
        <li>
          <Link to="/contact" className="navbar-link">CONTACTO</Link>
        </li>
      </ul>

      {/* Ícono del carrito */}
      <Link to="/cart" className="cart-icon">
        <img src={cartIcon} alt="Carrito" className="cart-icon-image" />
        {/* Mostrar la cantidad de productos en el carrito */}
        {totalItems > 0 && (
          <div className="cart-badge">{totalItems}</div>
        )}
      </Link>
    </nav>
  );
}

export default Navbar;











