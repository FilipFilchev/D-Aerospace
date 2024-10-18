import DroneNavbar from './Navbar/DroneNavbar'
import Header from "./Services/src/components/Header";
import ConceptDev from "./Services/src/components/ConceptDev";
import SystemDesign from "./Services/src/components/SystemDesign";
import Prototypes from "./Services/src/components/Prototypes";
import DetailedDesign from "./Services/src/components/DetailedDesign";
import Commissioning from "./Services/src/components/Commissioning";
import FAQ from "./Services/src/components/FAQ";
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import "./Services.css";

const Services = () => {
  return (
    <div className="servicesnew">
      <DroneNavbar />
      <Header />
      <ConceptDev />
      <SystemDesign />
      <Prototypes />
      <DetailedDesign />
      <Commissioning />
      <FAQ />
      <Contact />
      <Footer />
      <div className="footer1">
        <div className="divsite-below-footer-wrap1">
          <div className="copyright-20241">
            Copyright © 2024 D Aerospace | Powered by D Aerospace
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
