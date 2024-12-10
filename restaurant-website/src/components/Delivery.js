import React from 'react';
import './Delivery.css';

const Delivery = () => {
  const products = [
    { id: 1, name: 'Hamburguesa', price: 5.99 },
    { id: 2, name: 'Pizza', price: 8.99 },
    { id: 3, name: 'Papas Fritas', price: 2.99 },
    { id: 4, name: 'Ensalada César', price: 4.99 },
  ];

  return (
    <div className="delivery-container">
      <h2>¡Pide tu Delivery!</h2>
      <p>Sigue los pasos para completar tu pedido</p>
      <div className="delivery-steps">
        <div className="step">
          <span>1</span>
          <p>Selecciona tus productos</p>
        </div>
        <div className="step">
          <span>2</span>
          <p>Confirma tu dirección</p>
        </div>
        <div className="step">
          <span>3</span>
          <p>Realiza el pago</p>
        </div>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>Precio: ${product.price.toFixed(2)}</p>
            <button>Añadir al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Delivery;
