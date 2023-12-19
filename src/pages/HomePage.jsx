import React from "react";
import ServiceCard from "../components/ServiceCard";
import logo from "../assets/IMG_5725.jpg";

const services = ["Grooming", "Boarding", "Training", "Daycare"];

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-info">
        <h1>
          Hi, we are <span style={{ color: "#FF846C" }}>Bubble Paradise</span>
        </h1>
        <h1>We are open 8 days a week!</h1>
        <h1>Check it out and bring your furry friend.</h1>
      </div>
      <div className="service-container">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
