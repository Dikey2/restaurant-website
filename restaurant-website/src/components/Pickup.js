import React from 'react';
import './Pickup.css';

const Pickup = () => {
  const products = [
    { id: 1, name: 'Hamburguesa', price: 5.99 },
    { id: 2, name: 'Pizza', price: 8.99 },
    { id: 3, name: 'Papas Fritas', price: 2.99 },
    { id: 4, name: 'Ensalada César', price: 4.99 },
  ];

  const handleConfirm = () => {
    alert('¡Pedido confirmado! Por favor, acércate al local para recoger tu pedido.');
  };

  return (
    <div className="pickup-container">
      <h2>Para Retirar</h2>
      <p>Haz tu pedido y ven a recogerlo a nuestro local.</p>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>Precio: ${product.price.toFixed(2)}</p>
            <button>Añadir al carrito</button>
          </div>
        ))}
      </div>
      <div className="pickup-form">
        <h3>Confirmar Pedido</h3>
        <input type="text" placeholder="Nombre" required />
        <input type="tel" placeholder="Teléfono" required />
        <input type="email" placeholder="Correo electrónico" required />
        <button onClick={handleConfirm}>Confirmar</button>
      </div>
    </div>
  );
};

export default Pickup;

