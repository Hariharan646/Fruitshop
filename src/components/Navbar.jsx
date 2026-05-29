import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🍎 FruitShop
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/fresh-fruits">Fresh Fruits</Link></li>
        <li><Link to="/fruit-boxes">Fruit Boxes</Link></li>
        <li><Link to="/cut-fruits">Cut Fruits</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/cart">🛒 Cart</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;