import React, { useState, useContext, useEffect } from "react";
import { OrderContext } from "../context/order.context";
import { Link } from "react-router-dom";

const FormPage = () => {
  const [newApoitment, setNewApoitment] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    comment: "",
  });

  const { newOrder, addContact } = useContext(OrderContext);

  const handleTextInput = (e) => {
    setNewApoitment((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePhoneInput = (e) => {
    if (!isNaN(e.target.value) || e.target.value === "") {
      setNewApoitment((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="form-page">
      <h1>Your Details!</h1>

      <form className="contact-form">
        <div className="name-input">
          <label>
            First Name<sup>*</sup>
          </label>
          <input
            type="text"
            name="firstName"
            value={newApoitment.firstName}
            onChange={handleTextInput}
            required
          ></input>
        </div>

        <div className="lastname-input">
          <label>
            Last Name<sup>*</sup>
          </label>
          <input
            type="text"
            name="lastName"
            value={newApoitment.lastName}
            onChange={handleTextInput}
            required
          ></input>
        </div>

        <div className="number-input">
          <label>
            Phone Number<sup>*</sup>
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={newApoitment.phone}
            onChange={handlePhoneInput}
            required
          ></input>
        </div>

        <div className="email-input">
          <label>
            Email<sup>*</sup>
          </label>
          <input
            type="text"
            name="email"
            value={newApoitment.email}
            onChange={handleTextInput}
            required
          ></input>
        </div>

        <div className="comment-input">
          <label>
            Provide any specific instructions or preferences <br></br>for your
            pet's grooming
          </label>
          <textarea
            name="comment"
            value={newApoitment.comment}
            onChange={handleTextInput}
          />
        </div>
      </form>

      <div>
        {newApoitment.firstName &&
        newApoitment.lastName &&
        newApoitment.phone &&
        newApoitment.email ? (
          <Link to="/grooming/calendar/form-page/confirmation-page">
            <button
              className="submit-button"
              type="submit"
              onClick={() => {
                addContact(newApoitment);
              }}
            >
              Submit
            </button>
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

export default FormPage;
