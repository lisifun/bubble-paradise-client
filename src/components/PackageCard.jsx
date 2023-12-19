import React, { useState, useContext } from "react";
import { OrderContext } from "../context/order.context";

const PackageCard = ({ packet }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedPacket, setSelectedPacket] = useState(null);
  const [isSelected, setIsSelected] = useState(false);
  const { name, image, details } = packet;

  const { addPacket, removePacket } = useContext(OrderContext);

  const handleClick = () => {
    if (selectedPacket && selectedPacket.name === name) {
      setSelectedPacket(null);
      removePacket(packet);
      setIsSelected(false);
    } else {
      setSelectedPacket(packet);
      addPacket(packet);
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
