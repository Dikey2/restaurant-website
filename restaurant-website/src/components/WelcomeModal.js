import React, { useState } from "react";
import "./WelcomeModal.css"; // Crear un archivo CSS para estilos personalizados

function WelcomeModal() {
  const [isVisible, setIsVisible] = useState(true);

  const closeModal = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>¡Anímate a probarnos!</h2>
        <p>
          <strong>Sólo hasta HOY a las 11:59 pm</strong>
        </p>
        <p>
          Haz tu pedido HOY usando el cupón <strong>"HOLA15"</strong> y recibe un
          <strong> -15% dscto</strong> (Ingresa el cupón en el último paso antes
          de finalizar tu pedido).
        </p>
        <div className="modal-buttons">
          <button className="btn btn-primary">Quiero hacer mi 1er pedido</button>
          <button className="btn btn-secondary">Chatea con nosotras</button>
          <button className="btn btn-tertiary">Agenda llamada</button>
        </div>
        <button className="modal-close" onClick={closeModal}>
          ✖
        </button>
      </div>
    </div>
  );
}

export default WelcomeModal;
