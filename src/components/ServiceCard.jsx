import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { name, link } = service;
  return (
    <div className="service-card">
      <Link style={{ textDecoration: "none", color: "white" }} to={link}>
        <strong>{name}</strong>
      </Link>
    </div>
  );
};

export default ServiceCard;
