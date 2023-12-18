import React, { useState } from "react";

const PackageCard = ({ packet }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedPacket, setSelectedPacket] = useState(null);
  const [isSelected, setIsSelected] = useState(false);
  const { name, image, details } = packet;

  console.log(selectedPacket);
  const handleClick = () => {
    if (selectedPacket === name) {
      // Clicked on the already selected package, deselect it
      setSelectedPacket(null);
      setIsSelected(false);
    } else {
      // Clicked on a different package, select it
      setSelectedPacket(name);
      setIsSelected(true);
    }
  };

  return (
    <div
      className={`package-card ${isSelected ? "selected" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <img
        className="package-picture"
        src={image}
        alt={`${name} package picture`}
      />
      <div className="package-info">
        <div>{name}</div>
      </div>
      {isHovered && (
        <div className="additional-info-box">
          <p>{details}</p>
        </div>
      )}
    </div>
  );
};

export default PackageCard;
