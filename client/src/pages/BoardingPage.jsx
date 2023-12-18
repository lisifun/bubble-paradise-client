// import React from "react";
// import contact from "../assets/IMG_5807.jpg";
// import vaccine from "../assets/IMG_5808.jpg";
// import food from "../assets/IMG_5803.jpg";
// import pill from "../assets/IMG_5799.jpg";
// import toy from "../assets/IMG_5809.jpg";
// import leash from "../assets/IMG_5811.jpg";

// import arrivalsTime from "../assets/IMG_5822.jpg";
// import walksTime from "../assets/IMG_5823.jpg";
// import playTime from "../assets/IMG_5824.jpg";
// import foodTime from "../assets/IMG_5825.jpg";

// import BoardingCard from "../components/BoardingCard";
// import ScheduleCard from "../components/ScheduleCard";

// const boardingItems = [
//   { name: "Contact Information", image: contact, details: "New Clients Only" },
//   {
//     name: "Proof of vaccinations",
//     image: vaccine,
//     details: "New Clients Only",
//   },
//   {
//     name: "Food and Treats",
//     image: food,
//     details:
//       "Provide enough of your pet's regular food for the duration of their stay. Include some treats to keep them happy.",
//   },
//   {
//     name: "Medications",
//     image: pill,
//     details:
//       "If your pet is on medication, bring the medications in their original containers. Include clear instructions on dosage and administration.",
//   },
//   {
//     name: "Toys and Confort Items",
//     image: toy,
//     details:
//       "Bring a few of your pet's favorite toys to keep them entertained. Also bring your pet's favorite blanket, bed, or toy to provide a sense of familiarity.",
//   },
//   {
//     name: "Leash and Collar",
//     image: leash,
//     details: "Include a leash and collar for safe walks and transportation.",
//   },
// ];
// const boardingSchedule = [
//   { name: "Arrivals & Playtime", time: "8:00 - 10:00 AM", image: arrivalsTime },
//   { name: "Doggies Walks", time: "10:00 - 11:00 AM", image: walksTime },
//   { name: "Playtime", time: "11:00 AM - 1:00 PM", image: playTime },
//   { name: "Lunch & Rest Time", time: "1:00 - 3:00 PM", image: foodTime },
//   { name: "Playtime", time: "3:00 - 5:00 PM", image: playTime },
//   { name: "Doggie Walks", time: "5:00 - 6:00 PM", image: walksTime },
//   { name: "Dinner Time", time: "6:00 - 7:00 PM", image: foodTime },
//   { name: "Last Run for Potty", time: "7:00 - 8:00 PM", image: walksTime },
// ];

// const BoardingPage = () => {
//   return (
//     <div className="boarding-page">
//       <h1>ALL BREEDS AND BEHAVIORS ARE WELCOME!</h1>
//       <div className="boarding-info">
//         <div
//           className="boarding-items"
//           style={{ border: "1px solid black", width: "500px" }}
//         >
//           <h2>What to bring when boarding:</h2>
//           {boardingItems.map((item, key) => (
//             <BoardingCard item={item} />
//           ))}
//         </div>
//         <div
//           className="boarding-schedule"
//           style={{ border: "1px solid black", width: "500px" }}
//         >
//           <h2>Activity Schedule:</h2>
//           {boardingSchedule.map((schedule, key) => (
//             <ScheduleCard schedule={schedule} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BoardingPage;
