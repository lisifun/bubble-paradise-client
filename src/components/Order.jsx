import React, { useContext, useState } from "react";
import dog from "../assets/IMG_5728.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../services/API_URL";
import { OrderContext } from "../context/order.context";
import { DateTime } from "luxon";

const Order = ({ order }) => {
  const {
    id,
    firstName,
    lastName,
    date,
    time,
    packet,
    packetPrice,
    sizePrice,
  } = order;

  const [showOptions, setShowOptions] = useState(false);

  const { allOrders, setAllOrders, extractingOrder } = useContext(OrderContext);

  const deleteOrder = (orderId) => {
    axios
      .delete(API_URL + "/orders/" + orderId)
      .then((response) => {
        let newOrders = allOrders.filter((order) => order.id !== orderId);
        setAllOrders(newOrders);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClick = () => {
    console.log("you clicked!");
    setShowOptions(!showOptions);
  };

  return (
    <div className="order">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          border: "1px solid yellow",
        }}
      >
        <div className="order-info" style={{ border: "1px solid blue" }}>
          <strong>
            {firstName} {lastName}
          </strong>
          <div>
            {DateTime.fromISO(date).toLocaleString(
              DateTime.DATE_MED_WITH_WEEKDAY
            )}
            {" at "}
            {time}
          </div>
          <div>Services: {packet.join(", ")}</div>
          <div>
            Total: $
            {packetPrice.reduce((total, price) => {
              return total + price;
            }, 0) + sizePrice}
          </div>
        </div>

        <button
          className="order-buttons"
          onClick={() => handleClick()}
          style={{ border: "1px solid pink" }}
        >
          <i className="fas fa-ellipsis-v" style={{ color: "white" }}></i>
        </button>

        {showOptions && (
          <div className="elipsis-options">
            <Link to="/last-orders/edit-page">
              <button
                // className="order-buttons"
                style={{ border: "none", backgroundColor: "transparent" }}
                onClick={() => {
                  extractingOrder(id);
                }}
              >
                <strong>Edit</strong>
              </button>
            </Link>
            <hr
              style={{ width: "60px", height: "1px", backgroundColor: "black" }}
            ></hr>
            <button
              style={{ border: "none", backgroundColor: "transparent" }}
              // className="order-buttons"
              onClick={() => {
                deleteOrder(id);
              }}
            >
              <strong>Delete</strong>
            </button>
          </div>
        )}
      </div>

      <div className="order-options">
        <Link to="/last-orders/order-details">
          <button
            className="order-buttons"
            onClick={() => extractingOrder(id)}
            style={{ color: "white" }}
          >
            View
          </button>
        </Link>

        <img src={dog} style={{ width: "150px" }} />
      </div>
    </div>
  );
};

export default Order;
