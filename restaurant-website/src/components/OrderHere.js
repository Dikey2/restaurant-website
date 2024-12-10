import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderHere.css'; // Agrega tus estilos personalizados

const OrderHere = () => {
    const navigate = useNavigate();

    return (
        <div className="order-here-container">
            <h1 className="order-title">¿CÓMO QUIERES HACER TU PEDIDO?</h1>
            <p className="order-description">
                Elige la opción que prefieras y comienza tu experiencia gastronómica con nosotros.
            </p>

            <div className="order-options">
                <div
                    className="order-card"
                    onClick={() => navigate('/delivery')}
                >
                    <div className="order-card-content">
                        <h2>Delivery</h2>
                        <p>Recibe tu comida en la comodidad de tu hogar.</p>
                    </div>
                </div>

                <div
                    className="order-card"
                    onClick={() => navigate('/store-pickup')}
                >
                    <div className="order-card-content">
                        <h2>Retiro en Tienda</h2>
                        <p>Pasa por nuestro local y recoge tu pedido.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderHere;


