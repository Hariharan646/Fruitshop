import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import fruits from "../data/fruits";

function Home() {
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

      {/* Categories */}
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

        <div className="category-grid">
          <Link
            to="/fresh-fruits"
            className="category-card"
          >
            <div className="cat-icon">🍎</div>
            <h3>Fresh Fruits</h3>
            <p>Hand-picked seasonal fruits</p>
          </Link>

          <Link
            to="/fruit-boxes"
            className="category-card"
          >
            <div className="cat-icon">🎁</div>
            <h3>Fruit Boxes</h3>
            <p>Curated gift boxes & bundles</p>
          </Link>

          <Link
            to="/cut-fruits"
            className="category-card"
          >
            <div className="cat-icon">🍉</div>
            <h3>Cut Fruits</h3>
            <p>Ready-to-eat fresh cuts</p>
          </Link>
        </div>
      </section>

      {/* All Products */}
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