function Cart() {
  return (
    <div className="cart-container">

      <h1 className="cart-title">
        Shopping Cart
      </h1>

      <div className="cart-item">

        <img
          src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400"
          alt="Apple"
        />

        <div className="cart-details">
          <h3>Apple</h3>
          <p>₹120 / kg</p>
          <p>Quantity: 1</p>
        </div>

        <button className="remove-btn">
          Remove
        </button>

      </div>

      <div className="cart-summary">
        <h2>Total: ₹120</h2>

        <button className="checkout-btn">
          Proceed to Checkout
        </button>
      </div>

    </div>
  );
}

export default Cart;