import React from "react";
import dog from "../assets/IMG_5728.jpg";
import { Link } from "react-router-dom";

const Order = ({ order }) => {
  const { firstName, lastName, date, time, service, priceService, priceSize } =
    order;

  return (
    <div className="order">
      <div className="order-info">
        <strong>
          {firstName} {lastName}
        </strong>
        <div>
          {date} at {time}
        </div>
        <div>Service: {service}</div>
        <div>Total: ${Number(priceService) + Number(priceSize)}</div>
      </div>

      <div className="order-options">
        <Link to="/last-orders/edit-page">
          <button
            className="order-buttons"
            onClick={() => {
              console.log("you have to edit this order");
            }}
          >
            <i className="fas fa-edit"></i>
          </button>
        </Link>
        <button
          className="order-buttons"
          onClick={() => {
            console.log("you have to delete this order");
          }}
        >
          <i className="fas fa-trash"></i>
        </button>
        <img src={dog} style={{ width: "150px" }} />
      </div>
    </div>
  );
};

export default Order;
