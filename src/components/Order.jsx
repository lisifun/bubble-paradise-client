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
    setShowOptions(!showOptions);
  };

  return (
    <div className="order">
      <div className="info-elipsis">
        <div className="order-info">
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

        <button className="elipsis-button" onClick={() => handleClick()}>
          <i className="fas fa-ellipsis-v"></i>
        </button>

        {showOptions && (
          <div
            style={{
              position: "relative",
              display: "inline-block",
              cursor: "pointer",
            }}
          >
            <div className="elipsis-options">
              <Link to="/last-orders/edit-page">
                <button
                  className="edit-button"
                  onClick={() => {
                    setShowOptions(!showOptions);
                    extractingOrder(id);
                  }}
                >
                  <strong>Edit</strong>
                </button>
              </Link>

              <hr
                style={{
                  width: "5vw",
                  height: "1.5px",
                  backgroundColor: "black",
                  border: "none",
                }}
              ></hr>

              <button
                className="delete-button"
                onClick={() => {
                  setShowOptions(!showOptions);
                  deleteOrder(id);
                }}
              >
                <strong>Delete</strong>
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="order-options">
        <Link to="/last-orders/order-details">
          <button
            className="view-button"
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
