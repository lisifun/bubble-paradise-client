import React, { useState, useContext } from "react";
import { OrderContext } from "../context/order.context";

const appointmentHours = [
  ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM"],
  ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"],
];

const Calendar = () => {
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [currentDay, setCurrentDay] = useState(currentDate.getDate());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);
  const [datesReview, setDatesReview] = useState([]);
  // const [hourReview, setHourReview] = useState([]);

  const newDate = new Date(currentYear, currentMonth, currentDay);
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const datesArray = [];
  for (let day = currentDay; day < daysInMonth + 1; day++) {
    let currentDate = new Date(currentYear, currentMonth, day);
    datesArray.push(currentDate);
  }

  const { allOrders, addDate, addTime } = useContext(OrderContext);

  const handleClickDate = (date) => {
    setSelectedDate(date);
    addDate(date);
    setDatesReview(
      allOrders.filter((order) => {
        return Date.parse(order.date) === date.getTime();
      })
    );
  };

  console.log("outside", datesReview);
  const handleClickHour = (hour) => {
    if (datesReview.length === 0) {
      console.log("the datesReview array is empty");
      console.log("You are free to continue");
      setSelectedHour(hour);
      addTime(hour);
    } else {
      console.log("the datesReview array is not empty");
      let hourReview = datesReview.filter((order) => {
        console.log(order.time);
        console.log(hour);
        console.log(order.time === hour);
        return order.time === hour;
      });
      console.log("hourReview => ", hourReview);
      if (hourReview.length === 0) {
        console.log(
          " but the hourReview array is empty. So you are free to continue"
        );
        setSelectedHour(hour);
        addTime(hour);
      } else {
        console.log("Sorry, this hour was already selected for other client");
        alert("Sorry, this hour was already selected for other client");
      }
    }
  };

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
            className={`day ${
              selectedDate && selectedDate.getTime() === date.getTime()
                ? "selected"
                : ""
            }`}
            onClick={() => {
              handleClickDate(date);
            }}
          >
            <div className="weekday">
              {date
                .toLocaleString("en-US", { weekday: "long" })
                .slice(0, 3)
                .toUpperCase()}
            </div>
            <div>{date.getDate()}</div>
          </div>
        ))}
      </div>

      {/* Hours Section  */}
      <div className="hours">
        <div className="morning">
          <strong>Morning</strong>
          <div className="morning-hours">
            {appointmentHours[0].map((hour, index) => (
              <div
                key={index}
                className={`hour ${
                  selectedHour && selectedHour === hour ? "selected" : ""
                }`}
                onClick={() => {
                  handleClickHour(hour);
                }}
              >
                {hour}
              </div>
            ))}
          </div>
        </div>

        <div className="afternoon">
          <strong>Afternoon</strong>
          <div className="afternoon-hours">
            {appointmentHours[1].map((hour, index) => (
              <div
                key={index}
                className={`hour ${
                  selectedHour && selectedHour === hour ? "selected" : ""
                }`}
                onClick={() => {
                  handleClickHour(hour);
                }}
              >
                {hour}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
