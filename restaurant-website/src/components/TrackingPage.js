import React from "react";
import "./TrackingPage.css";

const TrackingPage = () => {
  const steps = [
    { icon: "📦", label: "Pedido recibido" },
    { icon: "👨‍🍳", label: "Preparando tu comida" },
    { icon: "🚚", label: "Tu pedido está en camino" },
    { icon: "📍", label: "Entrega cerca" },
    { icon: "✅", label: "¡Pedido entregado!" },
  ];

  return (
    <div className="tracking-container">
      <h1 className="tracking-title">Seguimiento en Tiempo Real</h1>
      <div className="progress-bar-container">
        {steps.map((step, index) => (
          <div key={index} className="progress-step">
            <div className={`step-icon ${index === 2 ? "active" : ""}`}>
              {step.icon}
            </div>
            <p className="step-label">{step.label}</p>
          </div>
        ))}
        <div className="progress-line">
          <div className="progress-fill" style={{ width: "60%" }}></div>
        </div>
      </div>
    </div>
  );
};

export default TrackingPage;

