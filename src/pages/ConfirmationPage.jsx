import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { OrderContext } from "../context/order.context";

import { API_URL } from "../services/API_URL";

import axios from "axios";

const ConfirmationPage = () => {
  const { newOrder, allOrders, setAllOrders, setNewOrder } =
    useContext(OrderContext);

  console.log("new order so far => ", newOrder);
  const submitOrder = (order) => {
    axios
      .post(API_URL + "/orders", order)
      .then((response) => {
        let newOrders = [...allOrders, response.data];
        setAllOrders(newOrders);
        setNewOrder({
          size: "",
          sizePrice: "",
          packet: [],
          packetPrice: [],
          packetDuration: [],
          date: "",
          time: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="confirmation-page">
      <h1>Confirmation</h1>
      <div
        className="confirmation-info"
        style={{ display: "flex", flexDirection: "column", gap: "24px" }}
      >
        <div className="date-time">
          <strong style={{ paddingBottom: "12px" }}>Date & Time</strong>
          <div>{newOrder.time}</div>
          <div>{newOrder.date.toString().slice(0, 16)}</div>
        </div>
        <div className="service">
          <strong style={{ paddingBottom: "12px" }}>Size & Services</strong>
          <div>
            <div>Dog Size:</div>
            <ul>
              <li>{newOrder.size}</li>
            </ul>
          </div>
          <div>Services:</div>
          <ul>
            {newOrder.packet.map((packet) => (
              <li>{packet}</li>
            ))}
          </ul>

          <div>
            {Math.floor(
              newOrder.packetDuration.reduce((total, duration) => {
                return total + duration;
              }, 0) / 60
            ) > 1
              ? `${Math.floor(
                  newOrder.packetDuration.reduce((total, duration) => {
                    return total + duration;
                  }, 0) / 60
                )} hours`
              : `${Math.floor(
                  newOrder.packetDuration.reduce((total, duration) => {
                    return total + duration;
                  }, 0) / 60
                )} hour`}{" "}
            {" and "}
            {newOrder.packetDuration.reduce((total, duration) => {
              return total + duration;
            }, 0) %
              60 >
            1
              ? `${
                  newOrder.packetDuration.reduce((total, duration) => {
                    return total + duration;
                  }, 0) % 60
                } minutes`
              : `${
                  newOrder.packetDuration.reduce((total, duration) => {
                    return total + duration;
                  }, 0) % 60
                } minute`}
          </div>
        </div>
        <div className="your-details">
          <strong style={{ paddingBottom: "4px" }}>Your Details</strong>
          <div style={{ display: "flex", gap: "8px" }}>
            <i class="fas fa-user"></i>
            <div>
              {newOrder.firstName} {newOrder.lastName}
            </div>
          </div>
          <div style={{ display: "flex", gap: "4px" }}>
            <i className="fas fa-phone"></i>
            <div>
              ({newOrder.phone.slice(0, 3)}){newOrder.phone.slice(3, 6)}-
              {newOrder.phone.slice(6)}
            </div>
          </div>
          <div style={{ display: "flex", gap: "4px" }}>
            <i class="fas fa-envelope"></i>
            <div>{newOrder.email}</div>
          </div>
        </div>
        <div className="summary">
          <strong style={{ paddingBottom: "12px" }}>Summary</strong>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>Services:</div>
            <div>
              $
              {newOrder.packetPrice.reduce((total, packet) => {
                return total + packet;
              }, 0)}
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>Dog size: </div>
            <div>${newOrder.sizePrice}</div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>Total</strong>
            <div>
              $
              {newOrder.packetPrice.reduce((total, packet) => {
                return total + packet;
              }, 0) + newOrder.sizePrice}{" "}
            </div>
          </div>
        </div>
        <Link to="/" className="book-button">
          <button
            className="book-button"
            onClick={() => {
              submitOrder(newOrder);
            }}
          >
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ConfirmationPage;
