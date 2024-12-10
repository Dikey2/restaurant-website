import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./PaymentMethods.css";
import qrCodeImage from "../assets/images/yape.jpeg";
import tarjeta from "../assets/images/tarjeta.png";
import efectivo from "../assets/images/efectivo.png";
import yape from "../assets/images/yape.png";
function PaymentMethods() {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Obtener el precio total pasado desde el carrito
  const location = useLocation();
  const totalPrice = location.state?.totalPrice || "0.00";

  const handleSelectMethod = (method) => {
    setSelectedMethod(method);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedMethod(null);
  };

  return (
    <div className="payment-page">
      <h2>Métodos de Pago</h2>
      <p>Precio Total: ${totalPrice}</p>
      <p>Elige tu método de pago preferido:</p>
      <div className="payment-methods">
        <div
          className="payment-option"
          onClick={() => handleSelectMethod("Tarjeta de Crédito/Débito")}
        >
            <img src={tarjeta} alt="Tarjeta de Crédito/Débito" className="payment-icon" />
            <span>Tarjeta de Crédito/Débito</span>
        </div>
        <div
          className="payment-option"
          onClick={() => handleSelectMethod("Efectivo")}
        >
          <img src={efectivo} alt="Efectivo" className="payment-icon" />
          <span>Efectivo</span>
        </div>
        <div
          className="payment-option"
          onClick={() => handleSelectMethod("Yape")}
        >
          
          <img src={yape} alt="Yape" className="payment-icon" />
          <span>Yape</span>
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            {selectedMethod === "Tarjeta de Crédito/Débito" ? (
              <>
                <div className="Tarjeta de Crédito/Débito">
                  <h2>Tarjeta de Crédito/Débito</h2>
                </div>
                <form className="payment-form">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="ejemplo@correo.com"
                    required
                  />
                  <label htmlFor="card-details">Detalles de la tarjeta</label>
                  <div className="card-input-group">
                    <input
                      type="text"
                      id="card-details"
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                    <div className="card-extra-details">
                      <input type="text" placeholder="MM / YY" required />
                      <input type="password" placeholder="CVC" required />
                    </div>
                  </div>
                  <label>Monto Total</label>
                  <input type="text" value={`$${totalPrice}`} readOnly />
                  <button type="submit" className="pay-button">
                    Pagar ${totalPrice}
                  </button>
                </form>
              </>
            ) : selectedMethod === "Yape" ? (
              <div className="qr-payment">
                <p>Escanea el código QR con Yape para completar tu pago.</p>
                <img
                  src={qrCodeImage}
                  alt="Código QR de Yape"
                  className="qr-image"
                />
              </div>
           
            ) : selectedMethod === "Efectivo" ? (
              <p>Este método requiere que pagues al momento de la entrega.</p>
            ) : null}
            <button className="close-button" onClick={closeModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PaymentMethods;












