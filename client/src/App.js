import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import American from "./pages/American";
import Baseball from "./pages/Baseball";
import BasketBall from "./pages/BasketBall";
import Hoodies from "./pages/Hoodies";
import Tracksuits from "./pages/Tracksuits";
import Products from "./pages/Products";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="american" element={<American />} />
          <Route path="baseball" element={<Baseball />} />
          <Route path="basketball" element={<BasketBall />} />
          <Route path="hoodies" element={<Hoodies />} />
          <Route path="tracksuits" element={<Tracksuits />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
