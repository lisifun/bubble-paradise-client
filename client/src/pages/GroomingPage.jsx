import React from "react";
import SizeCard from "../components/SizeCard";
import PackageCard from "../components/PackageCard";

import small from "../assets/IMG_5784.jpg";
import medium from "../assets/IMG_5783.jpg";
import large from "../assets/IMG_5782.jpg";
import giant from "../assets/IMG_5785.jpg";

import bath from "../assets/IMG_5746.jpg";
import hair from "../assets/IMG_5745.jpg";
import nail from "../assets/IMG_5790.jpg";
import other from "../assets/IMG_5747.jpg";

import back from "../assets/IMG_5794.jpg";
import next from "../assets/IMG_5795.jpg";
import { Link } from "react-router-dom";

const dogs = [
  {
    name: "Small",
    image: small,
    size: "3 to 10 kg",
    price: 0,
    details:
      "Small dogs, weighing under 10 kg and standing around 15 inches tall, are characterized by a compact build and fine bones. Popular breeds include Chihuahua, Pomeranian, Shih Tzu, and Yorkshire Terrier. ",
  },
  {
    name: "Medium",
    image: medium,
    size: "10 to 25 kg",
    price: 20,
    details:
      "Medium dogs typically weigh between 10 to 25 kg and stand around 15 to 25 inches tall. They have a well-proportioned build, neither compact nor overly large, with moderate bone structure. Popular breeds include Beagle, Cocker Spaniel, and Border Collie.",
  },
  {
    name: "Large",
    image: large,
    size: "25 to 45 kg",
    price: 40,
    details:
      "Large dogs, weighing between 25 to 45 kg and standing over 25 inches tall, are characterized by a robust and sizeable build with sturdy bone structures. Breeds like Labrador Retriever, Golden Retriever, and German Shepherd fall into this category.",
  },
  {
    name: "Giant",
    image: giant,
    size: "Over 45 kg",
    price: 60,
    details:
      "Giant dogs, exceeding 45 kg and standing considerably tall, such as the Great Dane, Saint Bernard, and Newfoundland, boast an imposing and massive build with robust bone structures.",
  },
];

const packets = [
  {
    name: "Bath",
    image: bath,
    price: 20,
    details: `Regular baths help keep a dog's coat clean and free of dirt, debris, and odors. The frequency of baths depends on the dog's breed, coat type, and activities.`,
  },
  {
    name: "Hair",
    image: hair,
    price: 20,
    details:
      "Some dog breeds require regular haircuts to maintain a specific coat length. Professional groomers or experienced dog owners may perform these haircuts.",
  },
  {
    name: "Nail",
    image: nail,
    price: 15,
    details:
      "Keeping a dog's nails trimmed is essential to prevent discomfort and potential injuries. Long nails can affect a dog's gait and lead to orthopedic issues.",
  },
  {
    name: "Additional",
    image: other,
    price: 40,
    details: `Additional services includes Teeth Cleaning, 
    Ear Cleaning, Anal Gland Expression and 
    Checking for Parasites. `,
  },
];

const GroomingPage = () => {
  return (
    <div className="grooming-page">
      <h1>
        Book now with us, and your furry friend could win a fun-filled day at
        Doggie Daycare!
      </h1>
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
      <div className="nav-buttons">
        <div>
          <Link to="/">
            <button>Back</button>
          </Link>
        </div>

        <div>
          <Link to="/grooming/calendar">
            <button>Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GroomingPage;
