import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './FeaturedMenu.css';

import hambur2 from '../assets/images/hambur2.png';
import burger from '../assets/images/burger.jpg';
import alitas2 from '../assets/images/alitas2.png';
import pizza2 from '../assets/images/pizza2.png';
import nachos from '../assets/images/nachos.png';

const FeaturedMenu = () => {
  const menuItems = [
    {
      title: 'Hamburguesas',
      description: ' jugosa hamburguesa de 225 gr, sazonada con nuestra mezcla de especias y servida con lechuga',
      price: '$15.90',
      image: burger,
    },
    {
      title: 'Alitas BBQ',
      description: 'Porcion de 6 alitas acompañadas con su Gaseosa pepsi 500ml y una guarnicion de papas fritas.',
      price: '$15.00',
      image: alitas2,
    },
    {
      title: 'PIZZA FAMILIAR',
      description: 'Pizza grande con 3 ingredientes a elegir.',
      price: '$19.90',
      image: pizza2,
    },
    {
        title: 'Hamburguesa Doble',
        description: 'Deliciosa hamburguesa doble con queso y papas.',
        price: '$25.90',
        image: hambur2,
      },
      {
        title: 'Nachos',
        description: ' Deliciosos pedazos de tortilla de maíz fritos y cubiertos con queso.',
        price: '$12.90',
        image: nachos,
    },
  ];

  return (
    <section className="featured-menu">
      <h2>Nuestro Menú Destacado</h2>
      <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={5} // Espacio entre los elementos
  slidesPerView={3} // Muestra 3 elementos por vez
  navigation
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000 }} // Tiempo entre transiciones automáticas
>
  {menuItems.map((item, index) => (
    <SwiperSlide key={index}>
      <div className="menu-card">
  <img src={item.image} alt={item.title} />
  <h3>{item.title}</h3>
  <p>{item.description}</p>
  <p>{item.price}</p>
</div>

    </SwiperSlide>
  ))}
</Swiper>


    </section>
  );
};

export default FeaturedMenu;
