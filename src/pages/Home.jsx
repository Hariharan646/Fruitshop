import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "../components/ProductCard";
import fruits from "../data/fruits";

function Home() {
  const [categories, setCategories] = useState([
    {
      id: 1,
      title: "Fresh Fruits",
      text: "Hand-picked seasonal fruits",
      image:
        "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=600",
      link: "/fresh-fruits",
    },
    {
      id: 2,
      title: "Fruit Boxes",
      text: "Curated gift boxes & bundles",
      image:
        "https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?w=600",
      link: "/fruit-boxes",
    },
    {
      id: 3,
      title: "Cut Fruits",
      text: "Ready-to-eat fresh cuts",
      image:
        "https://images.unsplash.com/photo-1564093497595-593b96d80180?w=600",
      link: "/cut-fruits",
    },
  ]);

  const nextSlide = () => {
    setCategories((prev) => [
      ...prev.slice(1),
      prev[0],
    ]);
  };

  const prevSlide = () => {
    setCategories((prev) => [
      prev[prev.length - 1],
      ...prev.slice(0, -1),
    ]);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Fresh Fruits Delivered
            <br />
            To Your Doorstep
          </h1>

          <p>
            Farm-fresh fruits, curated boxes & ready-to-eat cut fruits
            at the best prices
          </p>

          <Link to="/fresh-fruits" className="hero-btn">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Categories Slider */}
      <section
        className="section"
        style={{ background: "#f9fafb" }}
      >
        <h2 className="section-title">
          Shop By Category
        </h2>

        <p className="section-subtitle">
          Choose from our wide range of fresh products
        </p>

        <div className="category-slider">

          <button
            onClick={prevSlide}
            className="slider-btn"
          >
            ◀
          </button>

          <div className="slider-track">
            <AnimatePresence>
              {categories.map((category) => (
                <motion.div
                  key={category.id}
                  layout
                  transition={{
                    duration: 0.6,
                    type: "spring",
                  }}
                >
                  <Link
                    to={category.link}
                    className="slider-card"
                  >
                    <img
                      src={category.image}
                      alt={category.title}
                      className="slider-image"
                    />

                    <h3>{category.title}</h3>

                    <p>{category.text}</p>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <button
            onClick={nextSlide}
            className="slider-btn"
          >
            ▶
          </button>

        </div>
      </section>

      {/* Products */}
      <section className="section">
        <h2 className="section-title">
          Our Products
        </h2>

        <p className="section-subtitle">
          Browse all fresh fruits, fruit boxes and cut fruits
        </p>

        <div className="product-grid">
          {fruits.map((fruit) => (
            <ProductCard
              key={fruit.id}
              fruit={fruit}
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        className="section"
        style={{
          background: "#e8f5e9",
          textAlign: "center",
        }}
      >
        <h2 className="section-title">
          Why Choose FruitShop?
        </h2>

        <p className="section-subtitle">
          We take quality seriously
        </p>

        <div className="category-grid">

          <div className="category-card">
            <div className="cat-icon">🌿</div>
            <h3>100% Natural</h3>
            <p>No artificial ripening</p>
          </div>

          <div className="category-card">
            <div className="cat-icon">🚚</div>
            <h3>Same Day Delivery</h3>
            <p>Order by 10 AM, get by 6 PM</p>
          </div>

          <div className="category-card">
            <div className="cat-icon">💰</div>
            <h3>Best Prices</h3>
            <p>Direct from farms, no middlemen</p>
          </div>

          <div className="category-card">
            <div className="cat-icon">↩️</div>
            <h3>Easy Returns</h3>
            <p>Not happy? We'll make it right</p>
          </div>

        </div>
      </section>
    </>
  );
}

export default Home;