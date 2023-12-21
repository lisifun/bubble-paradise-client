import React, { useEffect } from "react";
import ServiceCard from "../components/ServiceCard";

const services = [
  { name: "Grooming", link: "/grooming" },
  { name: "Boarding", link: "/" },
  { name: "Training", link: "/" },
  { name: "Daycare", link: "/" },
];

const HomePage = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);
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
