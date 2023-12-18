import React, { useState } from "react";
import { Link } from "react-router-dom";

const EditPage = () => {
  const [editApoitment, setEditApoitment] = useState({
    id: "",
    firstName: "Lisandra",
    lastName: "Fundora",
    email: "lisandrafj99@gmail.com",
    phone: "4255466197",
    comment: "this is the first bath of my dog",
    service: ["Bath"],
    servicePrice: [20],
    size: "Medium",
    sizePrice: "40",
  });

  const handleTextInput = (e) => {
    setNewApoitment((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add new apoitment to the Calendar
  };

  return (
    <div className="edit-page">
      <form
        className="form"
        onSubmit={handleSubmit}
        style={{
          width: "800px",
        }}
      >
        <div
          className="full-name-input"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="name-input">
            <label>
              First Name<sup style={{ color: "red" }}>*</sup>
            </label>
            <input
              type="text"
              name="firstName"
              value={editApoitment.firstName}
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
              value={editApoitment.lastName}
              onChange={handleTextInput}
              // placeholder="Last Name"
              required
            ></input>
          </div>
        </div>

        <div
          className="contact-input"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="email-input">
            <label>
              Email<sup style={{ color: "red" }}>*</sup>
            </label>
            <input
              type="text"
              name="email"
              value={editApoitment.email}
              onChange={handleTextInput}
              // placeholder="Email"
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
              value={editApoitment.phone}
              onChange={handleTextInput}
              // placeholder="Phone Number"
              required
            ></input>
          </div>
        </div>

        <div className="comment-input">
          <label>
            Please provide any specific instructions or preferences for your
            pet's grooming
          </label>
          <textarea
            name="comment"
            value={editApoitment.comment}
            onChange={handleTextInput}
            // placeholder="Please provide any specific instructions or preferences for your pet's grooming"
          />
        </div>

        <div
          className="service-size-input"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            className="select-size"
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
            }}
          >
            <label>Choose the correct size: </label>
            <select>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="giant">Giant</option>
            </select>
            <input
              type="submit"
              style={{
                border: "none",
                backgroundColor: "#ff846c",
                width: "100px",
                height: "40px",
              }}
            ></input>
          </div>
          <div
            className="select-package"
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
            }}
          >
            <label>Choose a package: </label>
            <select>
              <option value="bath">Bath</option>
              <option value="hair">Hair</option>
              <option value="nail">Nail</option>
              <option value="additional">Additional</option>
            </select>
            <input
              type="submit"
              style={{
                border: "none",
                backgroundColor: "#ff846c",
                width: "100px",
                height: "40px",
              }}
            ></input>
          </div>
        </div>
      </form>

      <div className="nav-buttons">
        <div>
          <Link to="/last-orders">
            <button className="next-button" type="submit">
              Update
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
