import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <Link
        style={{ textDecoration: "none", color: "white" }}
        to={service.toLowerCase()}
      >
        {service}
      </Link>
    </div>
  );
};

export default ServiceCard;
