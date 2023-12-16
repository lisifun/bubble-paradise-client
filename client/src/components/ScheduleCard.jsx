import React from "react";

const ScheduleCard = ({ schedule }) => {
  const { name, time, image } = schedule;
  return (
    <div>
      <img
        src={image}
        style={{ width: "100px", height: "100px", borderRadius: "5%" }}
      />
      <div>{name}</div>
      <div>{time}</div>
    </div>
  );
};

export default ScheduleCard;
