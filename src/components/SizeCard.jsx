import React, { useState, useContext } from "react";
import { OrderContext } from "../context/order.context";

const SizeCard = ({ dog }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [isSelected, setIsSelected] = useState(false);
  const { name, image, size, details } = dog;

  const { addSize } = useContext(OrderContext);

  const handleClick = () => {
    if (selectedSize && selectedSize.name === name) {
      setSelectedSize(null);
      setIsSelected(false);
    } else {
      setSelectedSize(dog);
      addSize(dog);
      setIsSelected(true);

      const allSizeCards = document.querySelectorAll(".size-card");
      allSizeCards.forEach((card) => {
        card.classList.remove("selected");
      });
    }
  };

  return (
    <div
      className={`size-card ${isSelected ? "selected" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <img className="size-picture" src={image} alt={`${name} dog picture`} />
      <div className="size-info">
        <div>{name}</div>
        <div>{size}</div>
      </div>
      {isHovered && (
        <div className="additional-info-box">
          <p>{details}</p>
        </div>
      )}
    </div>
  );
};

export default SizeCard;
