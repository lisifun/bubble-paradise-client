import React from "react";
import ServiceCard from "../components/ServiceCard";
import logo from "../assets/IMG_5725.jpg";

const services = ["Boarding", "Grooming", "Training", "Daycare"];
const HomePage = () => {
  return (
    <div>
      <p>Hi, we are Bubble Paradise</p>
      <p>We are open 8 days a week!</p>
      <p>Check it out and bring your furry friend.</p>
      <div className="service-container">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
