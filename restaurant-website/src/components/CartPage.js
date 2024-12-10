import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';

function CartPage() {
    const { cartItems, clearCart, removeFromCart } = useContext(CartContext);
    const navigate = useNavigate();

    // Calcular el número total de productos
    const totalItems = cartItems.length;

    // Calcular el precio total
    const totalPrice = cartItems
        .reduce((total, item) => total + parseFloat(item.price), 0)
        .toFixed(2);

    if (cartItems.length === 0) {
        return (
            <div className="cart-page">
                <h2>Carrito de Compras</h2>
                <p className="empty-cart">Tu carrito está vacío 😔</p>
                <button
                    className="back-button"
                    onClick={() => navigate('/menu')}
                >
                    Ir al Menú
                </button>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <h2>Carrito de Compras</h2>
            <div className="cart-items">
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="item-image"
                        />
                        <div className="item-details">
                            <h3>{item.name}</h3>
                            <p>${item.price}</p>
                        </div>
                        <button
                            className="remove-button"
                            onClick={() => removeFromCart(item.id)}
                        >
                            Eliminar
                        </button>
                    </div>
                ))}
            </div>
            <div className="cart-summary">
                <p>Total de Productos: {totalItems}</p>
                <p>Precio Total: ${totalPrice}</p>
                <div className="cart-actions">
                    <button className="clear-cart-button" onClick={clearCart}>
                        Vaciar Carrito
                    </button>
                    <button
                        className="checkout-button"
                        onClick={() =>
                            navigate('/payment-methods', { state: { totalPrice } })
                        }
                    >
                        Proceder al Pago
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartPage;




