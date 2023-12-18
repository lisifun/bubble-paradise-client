import React, { useState } from "react";

// const currentDate = new Date();
const appointmentHours = [
  [
    "8:00 AM",
    "8:30 AM",
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
  ],
  [
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
  ],
];

const Calendar = () => {
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [currentDay, setCurrentDay] = useState(currentDate.getDate());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);

  const newDate = new Date(currentYear, currentMonth, currentDay);
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // Get the total number of days in the month
  const datesArray = [];
  for (let day = currentDay; day < daysInMonth + 1; day++) {
    let currentDate = new Date(currentYear, currentMonth, day);
    datesArray.push(currentDate);
  }

  console.log(selectedDate);
  console.log(selectedHour);

  return (
    <div className="calendar">
      {/* Month Section  */}
      <div className="month">
        <button
          className="button-month"
          onClick={() => {
            setCurrentMonth(currentMonth - 1);
            setCurrentDay(1);
          }}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <strong>
          {newDate.toLocaleString("en-US", { month: "long" })}{" "}
          {newDate.getFullYear()}
        </strong>
        <button
          className="button-month"
          onClick={() => {
            setCurrentMonth(currentMonth + 1);
            setCurrentDay(1);
          }}
        >
          {" "}
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      {/* Days Section  */}
      <div className="days">
        {datesArray.map((date, index) => (
          <div
            key={index}
            className="day"
            // className={`day ${isSelectedDate ? "selected" : ""}`}
            onClick={() => {
              setSelectedDate(date);
            }}
          >
            {date
              .toLocaleString("en-US", { weekday: "long" })
              .slice(0, 3)
              .toUpperCase()}
            <strong>{date.getDate()}</strong>
          </div>
        ))}
      </div>

      {/* Hours Section  */}
      <div className="hours">
        <div className="morning">
          <div>Morning</div>
          <div className="morning-hours">
            {appointmentHours[0].map((hour, index) => (
              <strong
                key={index}
                className="hour"
                // className={`hour ${isSelectedHour ? "selected" : ""}`}
                onClick={() => {
                  setSelectedHour(hour);
                }}
              >
                {hour}
              </strong>
            ))}
          </div>
        </div>

        <div className="afternoon">
          <div>Afternoon</div>
          <div className="afternoon-hours">
            {appointmentHours[1].map((hour, index) => (
              <strong
                key={index}
                className="hour"
                // className={`hour ${isSelectedHour ? "selected" : ""}`}
                onClick={() => {
                  setSelectedHour(hour);
                }}
              >
                {hour}
              </strong>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
