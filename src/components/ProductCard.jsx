function ProductCard({ fruit }) {
  return (
    <div className="product-card">
      <img src={fruit.image} alt={fruit.name} />

      <h3>{fruit.name}</h3>

      <p>₹{fruit.price} / kg</p>

      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;