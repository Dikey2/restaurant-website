import React from "react";
import "./StorePickupPage.css"; // Archivo CSS para estilos

const StorePickupPage = () => {
  return (
    <div className="store-pickup-container">
      <h1 className="store-pickup-title">Retiro en Tienda</h1>
      <p className="store-pickup-description">
        Puedes recoger tu pedido en nuestra tienda en la siguiente dirección:
      </p>
      <div className="store-pickup-card">
        <h2 className="store-pickup-address-title">Dirección</h2>
        <p className="store-pickup-address">Calle Principal N° 123</p>
        <p className="store-pickup-city">Arequipa, Perú</p>
      </div>
      <div className="store-pickup-map">
        <iframe
          title="Mapa de ubicación"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.871510313199!2d-71.535924!3d-16.409047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91557bf2d0300a55%3A0x25d59bdb8c5a2a9f!2sCalle%20Principal%20N%C2%B0%20123%2C%20Arequipa%2C%20Per%C3%BA!5e0!3m2!1ses-419!2sus!4v1694100568123!5m2!1ses-419!2sus"
          width="100%"
          height="400"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default StorePickupPage;
