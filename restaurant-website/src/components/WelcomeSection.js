import React from 'react';
import './WelcomeSection.css';
import backgroundImage from '../assets/images/background.jpg'; // Ruta válida

const WelcomeSection = () => {
  return (
    <div
      className="welcome-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="welcome-overlay">
        <div className="welcome-content">
          <h1>BIENVENIDO A INKABOCADO</h1>
          <p>Sabores que conquistan en cada mordisco</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
