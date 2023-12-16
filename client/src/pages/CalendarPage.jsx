import React from "react";

import { Link } from "react-router-dom";
import Calendar from "../components/Calendar";

const CalendarPage = () => {
  let currentDate = new Date();

  return (
    <div className="calendar-page">
      <h1>Please, select a Date and Time</h1>
      <Calendar />
      <div className="nav-buttons">
        <div>
          <Link to="/grooming">
            <button>Back</button>
          </Link>
        </div>

        <div>
          <Link to="/grooming/calendar/form-page">
            <button>Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
