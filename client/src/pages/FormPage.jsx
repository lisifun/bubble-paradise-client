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
      <h2>Your Details!</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "32px" }}
      >
        <input
          type="text"
          name="email"
          value={newApoitment.email}
          onChange={handleTextInput}
          placeholder="Email"
          required
        ></input>

        <input
          type="text"
          name="firstName"
          value={newApoitment.firstName}
          onChange={handleTextInput}
          placeholder="First Name"
          required
        ></input>

        <input
          type="text"
          name="lastName"
          value={newApoitment.lastName}
          onChange={handleTextInput}
          placeholder="Last Name"
          required
        ></input>

        <input
          type="text"
          name="phone"
          value={newApoitment.phone}
          onChange={handleTextInput}
          placeholder="Phone Number"
          required
        ></input>

        <label>
          Please provide any specific instructions or preferences for your pet's
          grooming.
        </label>
        <textarea
          name="comment"
          value={newApoitment.comment}
          onChange={handleTextInput}
          //   placeholder=" "
        />
        <Link to="/grooming/calendar/form-page/confirmation-page">
          <button type="submit">Next</button>
        </Link>
      </form>
    </div>
  );
};

export default FormPage;
