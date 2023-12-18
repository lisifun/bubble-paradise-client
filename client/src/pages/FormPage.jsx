import React, { useState } from "react";
import { Link } from "react-router-dom";

const FormPage = () => {
  const [newApoitment, setNewApoitment] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    comment: "",
  });

  const handleTextInput = (e) => {
    setNewApoitment((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add new apoitment to the Calendar
  };

  return (
    <div className="form-page">
      <h1>Your Details!</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="email-input">
          <label>
            Email<sup style={{ color: "red" }}>*</sup>
          </label>
          <input
            type="text"
            name="email"
            value={newApoitment.email}
            onChange={handleTextInput}
            // placeholder="Email"
            required
          ></input>
        </div>

        <div className="name-input">
          <label>
            First Name<sup style={{ color: "red" }}>*</sup>
          </label>
          <input
            type="text"
            name="firstName"
            value={newApoitment.firstName}
            onChange={handleTextInput}
            // placeholder="First Name"
            required
          ></input>
        </div>

        <div className="lastname-input">
          <label>
            Lastname<sup style={{ color: "red" }}>*</sup>
          </label>
          <input
            type="text"
            name="lastName"
            value={newApoitment.lastName}
            onChange={handleTextInput}
            // placeholder="Last Name"
            required
          ></input>
        </div>

        <div className="number-input">
          <label>
            Phone Number<sup style={{ color: "red" }}>*</sup>
          </label>
          <input
            type="text"
            name="phone"
            value={newApoitment.phone}
            onChange={handleTextInput}
            // placeholder="Phone Number"
            required
          ></input>
        </div>

        <div className="comment-input">
          <label>
            Please provide any specific instructions or <br></br> preferences
            for your pet's grooming
          </label>
          <textarea
            name="comment"
            value={newApoitment.comment}
            onChange={handleTextInput}
            // placeholder="Please provide any specific instructions or preferences for your pet's grooming"
          />
        </div>
      </form>

      <div className="nav-buttons">
        <div>
          <Link to="/grooming/calendar">
            <button className="back-button">Back</button>
          </Link>
        </div>

        <div>
          <Link to="/grooming/calendar/form-page/confirmation-page">
            <button className="next-button" type="submit">
              Submit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
