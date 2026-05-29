import ProductCard from "../components/ProductCard";
import fruits from "../data/fruits";

function CutFruits() {
  const cutFruits = fruits.filter(
    (fruit) => fruit.category === "Cut Fruits"
  );

  return (
    <>
      

      <section className="section">
        <div className="product-grid">
          {cutFruits.map((fruit) => (
            <ProductCard
              key={fruit.id}
              fruit={fruit}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default CutFruits;