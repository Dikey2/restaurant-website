import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./OrderPage.css";

const OrderPage = () => {
  const navigate = useNavigate();

  return (
    <div className="order-page">
      <h1 className="order-title">¿CÓMO QUIERES HACER TU PEDIDO?</h1>
      <p className="order-subtitle">
        Elige la opción que prefieras y comienza tu experiencia gastronómica con nosotros.
      </p>
      <div className="order-options">
        <div className="order-option" onClick={() => navigate("/delivery")}>
          <div className="option-icon">🚚</div>
          <h2 className="option-title">Delivery</h2>
          <p className="option-description">
            Recibe tu comida en la comodidad de tu hogar.
          </p>
          <button className="order-button">Elegir Delivery</button>
        </div>
        <div className="order-option" onClick={() => navigate("/pickup")}>
          <div className="option-icon">🏪</div>
          <h2 className="option-title">Retiro en Tienda</h2>
          <p className="option-description">
            Pasa por nuestro local y recoge tu pedido.
          </p>
          <button className="order-button">Elegir Retiro</button>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;





