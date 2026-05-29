import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <p>🛒 Your cart is empty</p>
        <Link to="/">Browse Fruits</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.name} />
          <div className="cart-item-info">
            <h3>{item.name}</h3>
            <p>₹{item.price} each</p>
            <div className="qty-control">
              <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
              <span>{item.quantity}</span>
              <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
          </div>
          <div>
            <p style={{ fontWeight: 700, fontSize: 17, marginBottom: 10 }}>₹{item.price * item.quantity}</p>
            <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="cart-summary">
        <h2>Total: ₹{totalPrice}</h2>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Cart;