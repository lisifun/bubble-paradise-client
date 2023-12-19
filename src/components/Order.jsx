import React, { useContext } from "react";
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

  return (
    <div className="order">
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

      <div className="order-options">
        <Link to="/last-orders/edit-page">
          <button
            className="order-buttons"
            onClick={() => {
              extractingOrder(id);
            }}
          >
            <i className="fas fa-edit"></i>
          </button>
        </Link>
        <button
          className="order-buttons"
          onClick={() => {
            deleteOrder(id);
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
