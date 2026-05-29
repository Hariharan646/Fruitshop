import { useCart } from "../context/CartContext";

function ProductCard({ fruit }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={fruit.image} alt={fruit.name} />

      <div className="product-card-body">
        <h3>{fruit.name}</h3>

        <p className="price">₹{fruit.price} / kg</p>

        <button onClick={() => addToCart(fruit)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;