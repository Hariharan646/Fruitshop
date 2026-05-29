function AboutUs() {
  return (
    <>
      <div className="about-header">
        <h1>About FruitShop</h1>
        <p>Delivering fresh, healthy, and premium quality fruits directly from farms to your doorstep.</p>
      </div>

      <div className="about-body">
        <div className="about-row">
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>FruitShop is an online fruit store dedicated to providing customers with the freshest fruits, curated fruit boxes, and ready-to-eat cut fruits. We carefully source our products from trusted farms across India to ensure quality, nutrition, and freshness in every order.</p>
          </div>
          <div className="about-img">
            <img src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=700" alt="Fresh fruits" />
          </div>
        </div>

        <div className="about-row reverse">
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>Our mission is to make healthy eating easy, accessible, and affordable. We believe everyone deserves fresh, chemical-free fruits delivered quickly and conveniently. From farm to fork, we cut out the middlemen so you get better quality at lower prices.</p>
          </div>
          <div className="about-img">
            <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=700" alt="Our mission" />
          </div>
        </div>
      </div>

      <div className="feature-grid">
        {[
          { icon: "🌿", title: "100% Natural", desc: "No artificial ripening agents or preservatives" },
          { icon: "🚚", title: "Same Day Delivery", desc: "Order by 10 AM and receive by 6 PM" },
          { icon: "⭐", title: "Premium Quality", desc: "Handpicked from the best farms in India" },
          { icon: "💰", title: "Best Prices", desc: "Direct from farms, no middlemen" },
        ].map((f) => (
          <div className="feature-box" key={f.title}>
            <div className="feat-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default AboutUs;