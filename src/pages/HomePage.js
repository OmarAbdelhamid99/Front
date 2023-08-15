import React from 'react'
import Home from '../components/Home/Home'
import Services from '../components/Services/Services';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';

const HomePage = () => {
  return (
    <>
      <Home />
      <Services />
      <About />
      <Footer />
    </>
  );
}

export default HomePage