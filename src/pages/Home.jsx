export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Fresh Fruits Delivered To Your Doorstep</h1>
          <p>
            Enjoy farm-fresh fruits, fruit boxes, and ready-to-eat cut fruits
            at the best prices.
          </p>

          <button className="shop-btn">
            Shop Now
          </button>
        </div>
      </section>

      <section className="categories">
        <h2>Shop By Category</h2>

        <div className="category-grid">
          <div className="category-card">🍎 Fresh Fruits</div>
          <div className="category-card">🎁 Fruit Boxes</div>
          <div className="category-card">🍉 Cut Fruits</div>
        </div>
      </section>

      <section className="featured">
  <h2>Best Selling Fruits</h2>

  <div className="product-grid">

    <div className="product-card">
      <img
        src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"
        alt="Apple"
      />
      <h3>Apple</h3>
      <p>₹120 / kg</p>
      <button>Add to Cart</button>
    </div>

    <div className="product-card">
      <img
        src="https://images.unsplash.com/photo-1553279768-865429fa0078"
        alt="Mango"
      />
      <h3>Mango</h3>
      <p>₹150 / kg</p>
      <button>Add to Cart</button>
    </div>

    <div className="product-card">
      <img
        src="https://images.unsplash.com/photo-1582979512210-99b6a53386f9"
        alt="Orange"
      />
      <h3>Orange</h3>
      <p>₹100 / kg</p>
      <button>Add to Cart</button>
    </div>

    <div className="product-card">
      <img
        src="https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=600"
        alt="Banana"
      />
      <h3>Banana</h3>
      <p>₹60 / dozen</p>
      <button>Add to Cart</button>
    </div>

  </div>
</section>
    </>
  );
}