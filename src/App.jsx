import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import FreshFruits from "./pages/FreshFruits";
import FruitBoxes from "./pages/FruitBoxes";
import CutFruits from "./pages/CutFruits";
import FruitDetails from "./pages/FruitDetails";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fresh-fruits" element={<FreshFruits />} />
        <Route path="/fruit-boxes" element={<FruitBoxes />} />
        <Route path="/cut-fruits" element={<CutFruits />} />
        <Route path="/fruit/:id" element={<FruitDetails />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;