import React, { useState, useContext, useEffect } from "react";
import { OrderContext } from "../context/order.context";

// const morningAppointmentHours = [
//   "8:00 AM",
//   "8:30 AM",
//   "9:00 AM",
//   "9:30 AM",
//   "10:00 AM",
//   "10:30 AM",
//   "11:00 AM",
//   "11:30 AM",
// ];
const morningAppointmentHours = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM"];

// const afternoonAppointmentHours = [
//   "12:00 PM",
//   "12:30 PM",
//   "1:00 PM",
//   "1:30 PM",
//   "2:00 PM",
//   "2:30 PM",
//   "3:00 PM",
//   "3:30 PM",
// ];
const afternoonAppointmentHours = ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"];

const Calendar = () => {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  const fullCurrentDay = new Date();

  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [currentDay, setCurrentDay] = useState(currentDate.getDate());
  const [datesArray, setDatesArray] = useState([]);
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [selectedHour, setSelectedHour] = useState(null);
  const [filteredHours, setFilteredHours] = useState([]);
  const [availableHoursMorning, setAvailableHoursMorning] = useState([]);
  const [availableHoursAfternoon, setAvailableHoursAfternoon] = useState([]);

  const newDate = new Date(currentYear, currentMonth, currentDay);
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const { allOrders, addDate, addTime } = useContext(OrderContext);

  useEffect(() => {
    let tempDatesArray = [];

    for (let day = currentDay; day < daysInMonth + 1; day++) {
      let dayInMonth = new Date(currentYear, currentMonth, day);
      tempDatesArray.push(dayInMonth);
    }

    setDatesArray(tempDatesArray);
    addDate(currentDate);
    setFilteredHours(
      allOrders
        .filter((order) => Date.parse(order.date) === currentDate.getTime())
        .map((order) => order.time)
    );
  }, [currentDay, currentMonth, currentYear, daysInMonth]);

  const handleClickDate = (date) => {
    setSelectedDate(date);
    addDate(date);
    setFilteredHours(
      allOrders
        .filter((order) => Date.parse(order.date) === date.getTime())
        .map((order) => order.time)
    );
  };

  useEffect(() => {
    if (filteredHours.length === 0) {
      setAvailableHoursMorning(morningAppointmentHours);
      setAvailableHoursAfternoon(afternoonAppointmentHours);
    } else {
      let newAppointmentHoursMorning = morningAppointmentHours.filter(
        (hour) => {
          if (!filteredHours.includes(hour)) {
            return hour;
          }
        }
      );

      let newAppointmentHoursAfternoon = afternoonAppointmentHours.filter(
        (hour) => {
          if (!filteredHours.includes(hour)) {
            return hour;
          }
        }
      );
      setAvailableHoursMorning(newAppointmentHoursMorning);
      setAvailableHoursAfternoon(newAppointmentHoursAfternoon);
    }
  }, [filteredHours]);

  const handleClickHour = (hour) => {
    setSelectedHour(hour);
    addTime(hour);
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
            {availableHoursMorning.map((hour, index) => (
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
            {availableHoursAfternoon.map((hour, index) => (
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
