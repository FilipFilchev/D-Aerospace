import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import ProductPage from './Components/ProductPage';
import Sectors from './Components/Sectors';
import Services from './Components/Services'

function App() {
  return (
    
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/services" element={<Services />} />
       </Routes>
       </div>
    
  );
}

export default App;

