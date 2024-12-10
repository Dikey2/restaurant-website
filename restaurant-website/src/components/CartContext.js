import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
export const CartContext = createContext();

// Hook personalizado para usar el contexto del carrito
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser usado dentro de un CartProvider');
  }
  return context;
};

// Proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Función para añadir un producto al carrito
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
  };

  // Función para eliminar solo una instancia de un producto
  const removeFromCart = (id) => {
    setCartItems((prevItems) => {
      const index = prevItems.findIndex((item) => item.id === id);
      if (index !== -1) {
        const updatedItems = [...prevItems];
        updatedItems.splice(index, 1); // Eliminar solo una instancia
        return updatedItems;
      }
      return prevItems;
    });
  };

  // Función para vaciar el carrito
  const clearCart = () => {
    setCartItems([]);
  };

  // Calcular el número total de artículos en el carrito
  const totalItems = cartItems.length;

  // Calcular el precio total de los artículos en el carrito
  const totalPrice = cartItems
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};









