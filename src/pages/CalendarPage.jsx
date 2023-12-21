import React, { useContext, useEffect } from "react";
import { OrderContext } from "../context/order.context";
import { Link } from "react-router-dom";
import Calendar from "../components/Calendar";

const CalendarPage = () => {
  const { newOrder } = useContext(OrderContext);

  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="calendar-page">
      <h1>Please, select a Date and Time</h1>
      <Calendar />

      <div>
        {newOrder.date && newOrder.time ? (
          <Link to="/grooming/calendar/form-page">
            <button className="continue-button">Continue</button>
          </Link>
        ) : (
          <button className="continue-button" style={{ background: "#ffebe6" }}>
            Continue
          </button>
        )}
      </div>
    </div>
  );
};

export default CalendarPage;
