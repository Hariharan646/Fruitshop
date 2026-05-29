import fruits from "../data/fruits";
import ProductCard from "../components/ProductCard";

function FreshFruits() {
  return (
    <div className="page-container">
      <h1 className="page-title">
        Fresh Fruits
      </h1>

      <div className="product-grid">
        {fruits.map((fruit) => (
          <ProductCard
            key={fruit.id}
            fruit={fruit}
          />
        ))}
      </div>
    </div>
  );
}

export default FreshFruits;