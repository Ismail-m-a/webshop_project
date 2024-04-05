import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from 'react-use-cart';
import Navigation from './components/Navigation';
import Switch from "./components/Switch";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from "./components/AuthContext";
import 'react-toastify/dist/ReactToastify.css';
import Footer  from "./components/Footer";
import SubFooter from "./components/SubFooter";

function App() {
  return (
    <Router>
      <CartProvider> 
        <AuthProvider>
          
          <div>
            <Navigation />
            <Switch />
          </div>
          </AuthProvider>
      </CartProvider>
      <Footer />
      <SubFooter />
    </Router>
  );
}

export default App;
