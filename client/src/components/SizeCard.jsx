import React, { useState } from "react";

const SizeCard = ({ dog }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [isSelected, setIsSelected] = useState(false);

  const { name, image, size, details } = dog;

  console.log(selectedSize);
  const handleClick = () => {
    if (selectedSize === name) {
      setSelectedSize(null);
      setIsSelected(false);
    } else {
      setSelectedSize(name);
      setIsSelected(true);
    }
  };

  return (
    <div
      className={`size-card ${isSelected ? "selected" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeav={() => setIsHovered(false)}
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
