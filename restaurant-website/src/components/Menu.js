import React, { useContext, useState } from "react";
import "./Menu.css"; // Archivo de estilos para el menú
import { CartContext } from "./CartContext";

// Importa las imágenes de los productos
import burgerImage from "../assets/images/burger.jpg";
import friesImage from "../assets/images/fries.jpg";
import pizzaImage from "../assets/images/pizza.jpg";
import saladImage from "../assets/images/salad.png";
import hotdogImage from "../assets/images/hotdog.png";
import tacoImage from "../assets/images/tacos.jpg";
import sodaImage from "../assets/images/soda.png";
import NachosImage from "../assets/images/nachos.png";
import dessertImage from "../assets/images/helados.jpg";
import burritoImage from "../assets/images/burrito.png";
import ArrozImage from "../assets/images/arroz.png";
import jugosImage from "../assets/images/jugos.jpg";
import milkshakeImage from "../assets/images/milkshake.jpg";
function Menu() {
  const { addToCart } = useContext(CartContext);
  const [category, setCategory] = useState("main");

  // Categorías y productos
  const products = {
    main: [
      {
        id: 1,
        name: "Hamburguesas",
        price: 15.9,
        image: burgerImage,
      },
      {
        id: 2,
        name: "Nachos",
        price: 12.9,
        image: NachosImage,
      },
      {
        id: 3,
        name: "Pizza",
        price: 9.0,
        image: pizzaImage,
      },
      {
        id: 4,
        name: "Burritos",
        price: 10.9,
        image: burritoImage,
      },
      {
        id: 5,
        name: "Hot Dogs",
        price: 10.9,
        image: hotdogImage,
      },
      {
        id: 6,
        name: "Tacos",
        price: 10.9,
        image: tacoImage,
      },
    ],
    sides: [
      {
        id: 7,
        name: "Ensalada",
        price: 7.9,
        image: saladImage,
      },
      {
        id: 8,
        name: "Papas Fritas",
        price: 8.9,
        image: friesImage
      },
      {
        id: 9,
        name: "Arroz",
        price: 6.0,
        image: ArrozImage,
      },
    ],
    drinks: [
      {
        id: 10,
        name: "Gaseosas",
        price: 5.5,
        image: sodaImage,
      },
      {
        id: 11,
        name: "Jugos",
        price: 6.5,
        image: jugosImage,
      },
    ],
    desserts: [
      {
        id: 12,
        name: "Helados",
        price: 5.0,
        image: dessertImage,
      },
      {
      id: 13,
        name: "Milshake",
        price: 9.5,
        image: milkshakeImage,
      },
    ],
  };

  return (
    <div className="menu">
      <h1>Nuestro Menú</h1>
      {/* Navegación entre categorías */}
      <div className="menu-tabs">
        <button
          className={category === "main" ? "active" : ""}
          onClick={() => setCategory("main")}
        >
          Principales
        </button>
        <button
          className={category === "sides" ? "active" : ""}
          onClick={() => setCategory("sides")}
        >
          Complementos
        </button>
        <button
          className={category === "drinks" ? "active" : ""}
          onClick={() => setCategory("drinks")}
        >
          Bebidas
        </button>
        <button
          className={category === "desserts" ? "active" : ""}
          onClick={() => setCategory("desserts")}
        >
          Postres
        </button>
      </div>

      {/* Mostrar productos de la categoría seleccionada */}
      <div className="menu-container">
        {products[category].map((product) => (
          <div key={product.id} className="menu-card">
            <img src={product.image} alt={product.name} className="menu-image" />
            <h2>{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
            <button
              className="add-to-cart-btn"
              onClick={() => addToCart(product)}
            >
              Añadir al Carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;













