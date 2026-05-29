import { useState } from "react";

const categories = [
  {
    image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=600",
    title: "Fresh Fruits",
    text: "Hand-picked seasonal fruits",
  },
  {
    image: "https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?w=600",
    title: "Fruit Boxes",
    text: "Curated gift boxes & bundles",
  },
  {
    image: "https://images.unsplash.com/photo-1564093497595-593b96d80180?w=600",
    title: "Cut Fruits",
    text: "Ready-to-eat fresh cuts",
  },
];

export default function CategorySlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % categories.length);
  };

  const prevSlide = () => {
    setCurrent(
      (current - 1 + categories.length) %
        categories.length
    );
  };

  return (
    <div className="slider-container">

      <button onClick={prevSlide}>
        ◀
      </button>

      <div className="slider-card">
        <img
          src={categories[current].image}
          alt={categories[current].title}
        />

        <h3>{categories[current].title}</h3>

        <p>{categories[current].text}</p>
      </div>

      <button onClick={nextSlide}>
        ▶
      </button>

    </div>
  );
}