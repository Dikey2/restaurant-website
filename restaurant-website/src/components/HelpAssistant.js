import React from 'react';
import './HelpAssistant.css';

function HelpAssistant() {
  return (
    <div className="help-assistant">
      <h2>¿Cómo podemos ayudarte?</h2>
      <div className="help-options">
        <button className="help-button" onClick={() => alert('Redirigiendo para agendar una llamada...')}>
          📞 Agenda una llamada
        </button>
        <button className="help-button" onClick={() => window.open('https://wa.me/1234567890', '_blank')}>
          💬 WhatsApp
        </button>
        <button className="help-button" onClick={() => alert('Conectando con un asesor...')}>
          👩‍💻 Comunícate con un asesor
        </button>
      </div>
    </div>
  );
}

export default HelpAssistant;
