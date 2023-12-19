import React, { useContext } from "react";
import { OrderContext } from "../context/order.context";
import { Link } from "react-router-dom";
import Calendar from "../components/Calendar";

const CalendarPage = () => {
  const { newOrder } = useContext(OrderContext);

  return (
    <div className="calendar-page">
      <h1>Please, select a Date and Time</h1>
      <Calendar />
      <div className="nav-buttons">
        <div>
          <Link to="/grooming">
            <button className="back-button">Back</button>
          </Link>
        </div>

        <div>
          {newOrder.date && newOrder.time && (
            <Link to="/grooming/calendar/form-page">
              <button className="next-button">Next</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
