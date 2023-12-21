import React, { useContext, useEffect } from "react";
import Order from "../components/Order";
import { OrderContext } from "../context/order.context";

const LastOrdersPage = () => {
  const { allOrders } = useContext(OrderContext);
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="last-orders-page">
      {allOrders.map((order, index) => (
        <Order key={index} order={order} />
      ))}
    </div>
  );
};

export default LastOrdersPage;
