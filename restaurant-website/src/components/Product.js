import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
    </div>
  );
};

export default Product;
