import React, { useRef } from 'react';
import DroneNavbar from './Navbar/DroneNavbar'
import Render from './VideoSection/VideoSection'
import Header from './Header/Header'
import PixSection from './PixSection/PixSection'
import FlyArea from './FlyArea/FlyArea'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import ProductsArea from './ProductsArea/ProductsArea'
import OurProducts from './OurProducts/OurProducts'
import FlightSection from './FlightSection/FlightSection'
import VideoSection from './VideoSection/VideoSection'

const Home = () => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <DroneNavbar scrollToContact={scrollToContact} />
      <VideoSection />
      <Header />
      <PixSection />
      <OurProducts />
      <FlightSection />
      <ProductsArea />
      <FlyArea />
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Home;
