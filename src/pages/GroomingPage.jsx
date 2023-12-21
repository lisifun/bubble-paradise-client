import React, { useContext, useEffect } from "react";
import { OrderContext } from "../context/order.context";
import SizeCard from "../components/SizeCard";
import PackageCard from "../components/PackageCard";

import small from "../assets/IMG_5947.jpg";
import medium from "../assets/IMG_5946.jpg";
import large from "../assets/IMG_5945.jpg";
import giant from "../assets/IMG_5944.jpg";

import bath from "../assets/IMG_5746.jpg";
import hair from "../assets/IMG_5745.jpg";
import nail from "../assets/IMG_5790.jpg";
import other from "../assets/IMG_5747.jpg";

import { Link } from "react-router-dom";

const dogs = [
  {
    id: 0,
    name: "Small",
    image: small,
    size: "3 to 10 kg",
    price: 20,
    details:
      "Small dogs, under 10 kg and around 15 inches tall, are characterized by a compact build and fine bones; popular breeds include Chihuahua, Pomeranian, Shih Tzu, and Yorkshire Terrier.",
  },
  {
    id: 1,
    name: "Medium",
    image: medium,
    size: "10 to 25 kg",
    price: 40,
    details:
      "Medium dogs, weighing 10 to 25 kg and standing 15 to 25 inches tall, exhibit a well-proportioned build with moderate bone structure; popular breeds include Beagle, Cocker Spaniel, and Border Collie.",
  },
  {
    id: 2,
    name: "Large",
    image: large,
    size: "25 to 45 kg",
    price: 60,
    details:
      "Large dogs, weighing 25 to 45 kg and standing over 25 inches tall, exhibit a robust build with sturdy bone structures; breeds like Labrador Retriever, Golden Retriever, and German Shepherd fall into this category.",
  },
  {
    id: 3,
    name: "Giant",
    image: giant,
    size: "Over 45 kg",
    price: 80,
    details:
      "Giant dogs, exceeding 45 kg and standing considerably tall, like the Great Dane, Saint Bernard, and Newfoundland, possess an imposing and massive build with robust bone structures.",
  },
];

const packets = [
  {
    id: 0,
    name: "Bath",
    image: bath,
    price: 20,
    duration: 60,
    details: `Regular baths help keep a dog's coat clean and free of dirt, debris, and odors. The frequency of baths depends on the dog's breed, coat type, and activities.`,
  },
  {
    id: 1,
    name: "Haircut",
    image: hair,
    price: 20,
    duration: 60,
    details:
      "Some dog breeds require regular haircuts to maintain a specific coat length. Professional groomers or experienced dog owners may perform these haircuts.",
  },
  {
    id: 2,
    name: "Nail Trimming",
    image: nail,
    price: 15,
    duration: 20,
    details:
      "Keeping a dog's nails trimmed is essential to prevent discomfort and potential injuries. Long nails can affect a dog's gait and lead to orthopedic issues.",
  },
  {
    id: 3,
    name: "Additional Services",
    image: other,
    price: 40,
    duration: 30,
    details: `Additional services include Teeth Cleaning, Ear Cleaning, Anal Gland Expression and Checking for Parasites. `,
  },
];

const GroomingPage = () => {
  const { newOrder } = useContext(OrderContext);

  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="grooming-page">
      <div>
        <h1>Please, select the size of your friend!</h1>
        <div className="size-container">
          {dogs.map((dog, index) => {
            return <SizeCard dog={dog} key={index} />;
          })}
        </div>
      </div>

      <div>
        <h1>Please, select a package for your friend!</h1>
        <div className="package-container">
          {packets.map((packet, index) => {
            return <PackageCard packet={packet} key={index} />;
          })}
        </div>
      </div>

      <div>
        {newOrder.size && newOrder.packet.length !== 0 ? (
          <Link to="/grooming/calendar">
            <button className="continue-button">Continue</button>
          </Link>
        ) : (
          <button className="continue-button" style={{ background: "#ffebe6" }}>
            Continue
          </button>
        )}
      </div>
    </div>
  );
};

export default GroomingPage;
