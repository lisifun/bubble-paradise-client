import React, { useContext } from "react";
import { OrderContext } from "../context/order.context";
import { DateTime } from "luxon";
import paw from "../assets/paw.png";

const OrderDetails = () => {
  const { updatedOrder } = useContext(OrderContext);

  return (
    <div className="order-details-page">
      <hr></hr>
      <h1>Order Details!</h1>
      <hr></hr>
      <div style={{ display: "flex", gap: "8px" }}>
        <i className="fas fa-user"></i>
        <div>
          {updatedOrder.firstName} {updatedOrder.lastName}
        </div>
      </div>
      <div style={{ display: "flex", gap: "8px" }}>
        <i className="fas fa-phone"></i>
        <div>
          +1({updatedOrder.phone.slice(0, 3)}){updatedOrder.phone.slice(3, 6)}-
          {updatedOrder.phone.slice(6)}
        </div>
      </div>
      <div style={{ display: "flex", gap: "8px" }}>
        <i className="fas fa-envelope"></i>
        <div>{updatedOrder.email}</div>
      </div>

      <hr></hr>

      <div style={{ display: "flex", gap: "8px" }}>
        <i className="fas fa-clock"></i>
        <div>{updatedOrder.time}</div>
      </div>

      <div style={{ display: "flex", gap: "8px" }}>
        <i className="fas fa-calendar"></i>
        <div>
          {" "}
          {DateTime.fromISO(updatedOrder.date).toLocaleString(
            DateTime.DATE_MED_WITH_WEEKDAY
          )}
        </div>
      </div>

      <div style={{ display: "flex", gap: "8px" }}>
        <img src={paw} alt="paw" style={{ width: "18px", height: "18px" }} />
        <div>
          {updatedOrder.packet.join(",")} | {updatedOrder.size}
        </div>
      </div>

      <div style={{ display: "flex", gap: "8px" }}>
        <i className="fas fa-money-bill"></i>
        <div>
          $
          {updatedOrder.packetPrice.reduce((total, price) => {
            return total + price;
          }) + updatedOrder.sizePrice}
        </div>
      </div>

      <div style={{ display: "flex", gap: "8px" }}>
        <i className="fas fa-comment"></i>
        {updatedOrder.comment ? updatedOrder.comment : "There is no comment"}
      </div>
    </div>
  );
};

export default OrderDetails;
