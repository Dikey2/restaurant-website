import React from 'react';
import About from '../components/About';

function Home() {
  return (
    <div className="container text-center my-5">
      <h2 className="display-4">BIENVENIDO A INKA BOCADO</h2>
      <p className="lead">Enjoy our delicious fast food at amazing prices!</p>
      <About />
    </div>
  );
}

export default Home;
