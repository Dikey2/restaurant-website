import React from "react";
import { useNavigate } from "react-router-dom";
import "./DeliverySteps.css";

const DeliverySteps = () => {
  const navigate = useNavigate();

  const products = [
    { id: 1, name: "Hamburguesa", price: 5.99, image: "/images/hamburguesa.jpg" },
    { id: 2, name: "Pizza", price: 8.99, image: "/images/pizza.jpg" },
    { id: 3, name: "Papas Fritas", price: 2.99, image: "/images/papas-fritas.jpg" },
    { id: 4, name: "Ensalada César", price: 4.99, image: "/images/ensalada-cesar.jpg" },
  ];

  const handleStepClick = (step) => {
    switch (step) {
      case 1:
        navigate("/products");
        break;
      case 2:
        navigate("/address");
        break;
      case 3:
        navigate("/payment-methods");
        break;
      default:
        break;
    }
  };

  const handleProductClick = (productId) => {
    navigate(`/product-details/${productId}`);
  };

  return (
    <div className="delivery-steps">
      <h1>¡Pide tu Delivery!</h1>
      <p>Sigue los pasos para completar tu pedido</p>
      <div className="steps">
        <div className="step" onClick={() => handleStepClick(1)}>
          <h2>1</h2>
          <p>Selecciona tus productos</p>
        </div>
        <div className="step" onClick={() => handleStepClick(2)}>
          <h2>2</h2>
          <p>Confirma tu dirección</p>
        </div>
        <div className="step" onClick={() => handleStepClick(3)}>
          <h2>3</h2>
          <p>Realiza el pago</p>
        </div>
      </div>

      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              onClick={() => handleProductClick(product.id)}
            />
            <h3 onClick={() => handleProductClick(product.id)}>{product.name}</h3>
            <p>Precio: ${product.price}</p>
            <button>Añadir al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliverySteps;
