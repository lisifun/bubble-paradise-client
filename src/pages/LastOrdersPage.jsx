import React, { useContext } from "react";
import Order from "../components/Order";
import { OrderContext } from "../context/order.context";

const LastOrdersPage = () => {
  const { allOrders } = useContext(OrderContext);

  return (
    <div className="last-orders-page">
      {allOrders.map((order, index) => (
        <Order key={index} order={order} />
      ))}
    </div>
  );
};

export default LastOrdersPage;
