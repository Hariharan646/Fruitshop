import { useState } from "react";
import fruits from "../data/fruits";
import { useCart } from "../context/CartContext";

export default function FruitBoxes() {
  const [boxItems, setBoxItems] = useState([]);

  const { addToCart } = useCart();

  const addToBox = (fruit) => {
    setBoxItems([...boxItems, fruit]);
  };

  const removeFruit = (index) => {
    setBoxItems(boxItems.filter((_, i) => i !== index));
  };

  const totalPrice = boxItems.reduce(
    (total, fruit) => total + fruit.price,
    0
  );

  const addBoxToCart = () => {
    if (boxItems.length === 0) {
      alert("Please add fruits to the box first!");
      return;
    }

    boxItems.forEach((fruit) => {
      addToCart(fruit);
    });

    alert("Fruit Box added to cart!");

    setBoxItems([]);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        padding: "20px",
        alignItems: "flex-start",
      }}
    >
      {/* LEFT SIDE */}
      <div style={{ flex: 3 }}>
        <h1>Available Fruits</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {fruits.map((fruit) => (
            <div
              key={fruit.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "12px",
                padding: "15px",
                textAlign: "center",
                background: "#fff",
              }}
            >
              <img
                src={fruit.image}
                alt={fruit.name}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />

              <h3>{fruit.name}</h3>

              <p>₹{fruit.price}</p>

              <button
                onClick={() => addToBox(fruit)}
                style={{
                  background: "#28a745",
                  color: "#fff",
                  border: "none",
                  padding: "10px 15px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Add To Box
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div
        style={{
          flex: 1,
          border: "1px solid #ddd",
          borderRadius: "12px",
          padding: "20px",
          background: "#fafafa",
          position: "sticky",
          top: "20px",
        }}
      >
        <h2>My Fruit Box</h2>

        {boxItems.length === 0 ? (
          <p>No fruits selected</p>
        ) : (
          <>
            {boxItems.map((fruit, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "10px",
                  borderBottom: "1px solid #ddd",
                  paddingBottom: "10px",
                }}
              >
                <div>
                  <strong>{fruit.name}</strong>
                  <p>₹{fruit.price}</p>
                </div>

                <button
                  onClick={() => removeFruit(index)}
                  style={{
                    background: "red",
                    color: "#fff",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  X
                </button>
              </div>
            ))}

            <h3>Total: ₹{totalPrice}</h3>

            <button
              onClick={addBoxToCart}
              style={{
                width: "100%",
                background: "green",
                color: "#fff",
                border: "none",
                padding: "12px",
                borderRadius: "8px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              Add Box To Cart
            </button>
          </>
        )}
      </div>
    </div>
  );
}