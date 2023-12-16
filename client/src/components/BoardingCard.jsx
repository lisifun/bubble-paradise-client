import React from "react";

const BoardingCard = ({ item }) => {
  const { name, image, details } = item;
  return (
    <div className="boarding-card">
      <img className="item-picture" src={image} alt={`${name} boarding item`} />
      <div>
        <h3>{name}</h3>
        <div>{details}</div>
      </div>
    </div>
  );
};

export default BoardingCard;
