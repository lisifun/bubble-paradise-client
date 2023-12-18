import React from "react";
import { Link } from "react-router-dom";

const appoitment = [
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
];

console.log(appoitment[0].phoneNumber);

const ConfirmationPage = () => {
  return (
    <div className="confirmation-page">
      <h1>Confirmation</h1>
      <div
        className="confirmation-info"
        style={{ display: "flex", flexDirection: "column", gap: "24px" }}
      >
        <div className="date-time">
          <strong style={{ paddingBottom: "12px" }}>Date & Time</strong>
          <div>{appoitment[0].time}</div>
          <div>{appoitment[0].date}</div>
        </div>
        <div className="service">
          <strong style={{ paddingBottom: "12px" }}>Service</strong>
          <div>{appoitment[0].service}</div>
          <div>2 hours</div>
        </div>
        <div className="your-details">
          <strong style={{ paddingBottom: "12px" }}>Your Details</strong>
          <div>
            {appoitment[0].firstName} {appoitment[0].lastName}
          </div>
          <div>
            ({appoitment[0].phoneNumber.slice(0, 3)})
            {appoitment[0].phoneNumber.slice(3, 6)}-
            {appoitment[0].phoneNumber.slice(6)}
          </div>
        </div>
        <div className="summary">
          <strong style={{ paddingBottom: "12px" }}>Summary</strong>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>{appoitment[0].service}</div>
            <div>${appoitment[0].priceService}</div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>{appoitment[0].size}</div>
            <div>${appoitment[0].priceSize}</div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>Total</div>
            <div>
              $
              {Number(appoitment[0].priceSize) +
                Number(appoitment[0].priceSize)}{" "}
            </div>
          </div>
        </div>
        <Link to="/" className="book-button">
          <button className="book-button">Book Now</button>
        </Link>
      </div>
    </div>
  );
};

export default ConfirmationPage;
