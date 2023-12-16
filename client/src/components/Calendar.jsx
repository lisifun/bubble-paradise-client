import React, { useState } from "react";

// const currentDate = new Date();
const appointmentHours = [
  "8:00 AM",
  "10:00 AM",
  "12:00 PM",
  "2:00 PM",
  "4:00 PM",
];

const Calendar = () => {
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);

  console.log("trying thissss");
  console.log("selected date => ", selectedDate);
  console.log("selected hour => ", selectedHour);

  const newDate = new Date(currentYear, currentMonth);
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // Get the total number of days in the month
  const datesArray = [];
  for (let day = 1; day < daysInMonth + 1; day++) {
    let currentDate = new Date(currentYear, currentMonth, day);
    datesArray.push(currentDate);
  }

  return (
    <div className="calendar">
      {/* Month Section  */}
      <div className="month">
        <button
          onClick={() => {
            setCurrentMonth(currentMonth - 1);
          }}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <p>
          {newDate.toLocaleString("en-US", { month: "long" })}{" "}
          {newDate.getFullYear()}
        </p>
        <button
          onClick={() => {
            setCurrentMonth(currentMonth + 1);
          }}
        >
          {" "}
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      {/* Days Section  */}
      <div
        className="weekdays"
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "420px",
        }}
      >
        <div>SUN</div>
        <div>MON</div>
        <div>TUE</div>
        <div>WED</div>
        <div>THU</div>
        <div>FRI</div>
        <div>SAT</div>
      </div>
      <div className="days">
        {datesArray.map((date) => (
          <div className="day" onClick={() => setSelectedDate(date)}>
            {date
              .toLocaleString("en-US", { weekday: "long" })
              .slice(0, 3)
              .toUpperCase()}
            <div>{date.getDate()}</div>
          </div>
        ))}
      </div>

      {/* Hours Section  */}
      <div className="hours">
        {appointmentHours.map((hour) => (
          <div className="hour" onClick={() => setSelectedHour(hour)}>
            {hour}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
