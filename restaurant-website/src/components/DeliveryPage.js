import React from "react";
import { useNavigate } from "react-router-dom";
import "./DeliveryPage.css";

const DeliveryPage = () => {
  const navigate = useNavigate();

  return (
    <div className="delivery-page">
      <h1 className="delivery-title">¡Bienvenido a la página de Delivery!</h1>
      <p className="delivery-subtitle">
        Gestiona tus pedidos de manera rápida y sencilla.
      </p>
      <div className="delivery-options">
        {/* Opción 1: Explorar Menú */}
        <div className="delivery-option">
          <h2 className="option-title">🍔 Realiza tu pedido</h2>
          <p className="option-description">
            Selecciona tus productos favoritos y recíbelos en la puerta de tu
            casa.
          </p>
          <button
            className="delivery-button"
            onClick={() => navigate("/menu")}
          >
            Explorar Menú
          </button>
        </div>

        {/* Opción 2: Ver mi pedido */}
        <div className="delivery-option">
          <h2 className="option-title">📦 Seguimiento en tiempo real</h2>
          <p className="option-description">
            Rastrea tu pedido desde que lo realizas hasta que llega a tu hogar.
          </p>
          <button
            className="delivery-button"
            onClick={() => navigate("/tracking-page")}
          >
            Ver mi pedido
          </button>
        </div>

        {/* Opción 3: Contactar */}
        <div className="delivery-option">
          <h2 className="option-title">📞 Servicio al cliente</h2>
          <p className="option-description">
            ¿Tienes dudas? Contáctanos para obtener asistencia personalizada.
          </p>
          <button
            className="delivery-button"
            onClick={() => navigate("/contact")}
          >
            Contactar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;




