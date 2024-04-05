import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Products from './Products';
import About from './About';
import AddToCart from './AddToCart';
import Login from './Login';
import Register from './Register';

export default function Switch() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/AddTocart" element={<AddToCart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
}
