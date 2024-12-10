import React from 'react';
import './Contact.css'; // Importa el archivo de estilos

function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contáctanos</h2>

      {/* Mapa */}
      <div className="map-container">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.920574540566!2d-4.421398184692676!3d36.71962237996068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f76e5446dc1d%3A0x117d885f8a8ecfb0!2sCalle%20Alamos%2C%2022%2C%2029012%20M%C3%A1laga%2C%20Spain!5e0!3m2!1sen!2sus!4v1687468943710!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Información de contacto */}
      <div className="contact-info">
        <div className="info-section">
          <h3>Horarios</h3>
          <p>Jueves - Lunes</p>
          <p>13:00 - 16:00</p>
          <p>20:00 - 00:00</p>
        </div>
        <div className="info-section">
          <h3>Teléfono</h3>
          <p>+51 999 845 339</p>
        </div>
        <div className="info-section">
          <h3>Dirección</h3>
          <p>Calle Principal Nº 123</p>
          <p>Arequipa, Perú</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
