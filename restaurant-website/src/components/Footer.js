import React from 'react';
import whatsappIcon from "../assets/images/Whatsapp-icon (2).png";
import './Footer.css';

function Footer() {
  return (
    <section className="contact-section" data-aos="fade-up">
      <h2 className="contact-title">Contáctanos</h2>
      <p className="contact-info">
        Llama al: <strong>(+51) 999 845 339</strong> o visítanos en nuestra ubicación central.
      </p>
      <a
        href="https://wa.me/51999845339"
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
        Informes y pedidos
      </a>
    </section>
  );
}


export default Footer;


