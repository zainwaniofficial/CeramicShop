import react from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/home/Home";
import About from "./components/about/About";
import Shop from "./components/shop/Shop";
import Contact from "./components/contact/Contact";
const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
