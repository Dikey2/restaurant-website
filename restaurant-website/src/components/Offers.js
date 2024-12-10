import React, { useContext } from 'react';
import Slider from 'react-slick';
import './Offers.css';
import { CartContext } from './CartContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import burgerImage from '../assets/images/2.png';
import pizzaImage from '../assets/images/pizza2.png';
import bbqImage from '../assets/images/alitas2.png';
import pro1 from '../assets/images/pro1.png';
import pro2 from '../assets/images/pro2.png';
import pro3 from '../assets/images/pro3.png';

const NextArrow = ({ onClick }) => (
  <div className="arrow next" onClick={onClick}>
    ❯
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="arrow prev" onClick={onClick}>
    ❮
  </div>
);

function Offers() {
  const { addToCart } = useContext(CartContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const offers = [
    {
      id: 1,
      name: 'Hamburguesa Doble',
      price: 25.9,
      description: 'Deliciosa hamburguesa doble con queso y papas.',
      image: burgerImage,
    },
    {
      id: 2,
      name: 'Pizza Familiar',
      price: 19.9,
      description: 'Pizza grande con 3 ingredientes a elegir.',
      image: pizzaImage,
    },
    {
      id: 3,
      name: 'Alitas BBQ',
      price: 15.0,
      description: 'Alitas bañadas en salsa BBQ, acompañadas de papas fritas.',
      image: bbqImage,
    },
    {
      id: 4,
      name: 'Inca kombo',
      price: 18.9,
      description: 'Cheesy burrito de carne molida, nachos, porción de Cinnamon Twist y bebida.',
      image: pro1,
    },
    {
      id: 5,
      name: 'Inca kombo 2',
      price: 19.9,
      description: 'Burrito Supreme de carne molida, nachos, porción de Cinnamon Twist y bebida.',
      image: pro2,
    },
    {
      id: 6,
      name: 'Tripack Doble sabor',
      price: 79.9,
      description: '2 Pizzas grandes mitad y mitad pepperoni/ americana, hawaiana o all the meats, con 1 pizza grande clásica y una gaseosa de 1.5LT',
      image: pro3,
    },
  ];

  return (
    <div className="offers">
      <h1>Ofertas Especiales</h1>
      <Slider {...settings} className="offers-slider">
        {offers.map((offer) => (
          <div key={offer.id} className="offer-card">
            <img src={offer.image} alt={offer.name} className="offer-image" />
            <div className="offer-details">
              <h2>{offer.name}</h2>
              <p>{offer.description}</p>
              <span className="offer-price">${offer.price.toFixed(2)}</span>
            </div>
            <div className="offer-actions">
              <button className="add-to-cart-btn" onClick={() => addToCart(offer)}>
                Añadir al Carrito
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Offers;








