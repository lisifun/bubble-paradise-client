import React from "react";
import Order from "../components/Order";

const orders = [
  {
    firstName: "Lisandra",
    lastName: "Fundora",
    phoneNumber: "4255466197",
    date: "Tue Dec 19th 23",
    time: "10:00 AM",
    service: "Bath",
    priceService: "20",
    size: "Medium",
    priceSize: "40",
  },
  {
    firstName: "Laura",
    lastName: "Fundora",
    phoneNumber: "8019345678",
    date: "Wed Dec 20th 23",
    time: "12:00 PM",
    service: "Hair",
    priceService: "20",
    size: "Giant",
    priceSize: "80",
  },
  {
    firstName: "Reynaldo",
    lastName: "Fernandez",
    phoneNumber: "3114809765",
    date: "Mon Dec 25th 23",
    time: "3:30 AM",
    service: "Additional",
    priceService: "40",
    size: "Large",
    priceSize: "60",
  },
];

const LastOrdersPage = () => {
  return (
    <div
      className="last-orders-page"
      style={{
        display: "flex",
        gap: "24px",
        paddingBottom: "190px",
      }}
    >
      {orders.map((order, index) => (
        <Order key={index} order={order} />
      ))}
    </div>
  );
};

export default LastOrdersPage;
