import React, { useContext } from "react";
import Order from "../components/Order";
import { OrderContext } from "../context/order.context";

const LastOrdersPage = () => {
  const { allOrders } = useContext(OrderContext);

  return (
    <div
      className="last-orders-page"
      style={{
        display: "flex",
        gap: "24px",
        paddingBottom: "190px",
        // height: "1100px",
      }}
    >
      {allOrders.map((order, index) => (
        <Order key={index} order={order} />
      ))}
    </div>
  );
};

export default LastOrdersPage;
