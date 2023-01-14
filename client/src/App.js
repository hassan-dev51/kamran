import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import American from "./pages/American";
import Baseball from "./pages/Baseball";
import BasketBall from "./pages/BasketBall";
import Hoodies from "./pages/Hoodies";
import Tracksuits from "./pages/Tracksuits";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Custom from "./pages/Custom";
import Jackets from "./pages/Jackets";
import Shirts from "./pages/Shirts";
import Gloves from "./pages/Gloves";
import CustomRouter from "./router/CustomRouter";
import AmericanDynamicCard from "./components/AmericanDynamicCard";
import BaseballDynamicCard from "./components/BaseballDynamicCard";
import BasketballDynamicCard from "./components/BasketballDynamicCard";
import GlovesDynamicCard from "./components/GlovesDynamicCard";
import HoodiesDynamicCard from "./components/HoodiesDynamicCard";
import JacketDynamicCard from "./components/JacketDynamicCard";
import ShirtDynamicCard from "./components/ShirtDynamicCard";
import TracksuitDynamicCard from "./components/TracksuitDynamicCard";
import ProductDetails from "./components/ProductDetails";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <CustomRouter>
          <Route exact path="/" element={<Home />} />
          <Route exact path="products" element={<Products />} />
          <Route exact path="products/:_id" element={<ProductDetails />} />
          <Route exact path="american" element={<American />} />
          <Route exact path="american/:_id" element={<AmericanDynamicCard />} />
          <Route exact path="baseball" element={<Baseball />} />
          <Route exact path="baseball/:_id" element={<BaseballDynamicCard />} />
          <Route exact path="basketball" element={<BasketBall />} />
          <Route
            exact
            path="basketball/:_id"
            element={<BasketballDynamicCard />}
          />
          <Route exact path="hoodies" element={<Hoodies />} />
          <Route exact path="hoodies/:_id" element={<HoodiesDynamicCard />} />
          <Route exact path="tracksuits" element={<Tracksuits />} />
          <Route
            exact
            path="tracksuits/:_id"
            element={<TracksuitDynamicCard />}
          />
          <Route exact path="custom" element={<Custom />} />
          <Route exact path="jacket" element={<Jackets />} />
          <Route exact path="jacket/:_id" element={<JacketDynamicCard />} />
          <Route exact path="shirts" element={<Shirts />} />
          <Route exact path="shirts/:_id" element={<ShirtDynamicCard />} />
          <Route exact path="gloves" element={<Gloves />} />
          <Route exact path="gloves/:_id" element={<GlovesDynamicCard />} />
          <Route exact path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </CustomRouter>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
