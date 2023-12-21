import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { OrderContext } from "../context/order.context";
import axios from "axios";
import { API_URL } from "../services/API_URL";
import { useNavigate } from "react-router-dom/dist";

const EditPage = () => {
  const { allOrders, setAllOrders, updatedOrder } = useContext(OrderContext);
  const [editedOrder, setEditedOrder] = useState(updatedOrder);

  const navigate = useNavigate();

  const handleTextInput = (e) => {
    setEditedOrder((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePhoneInput = (e) => {
    if (!isNaN(e.target.value) || e.target.value === "") {
      setNewApoitment((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const handleSubmit = (e) => {
    const orderId = editedOrder.id;

    axios
      .put(`${API_URL}/orders/${orderId}`, editedOrder)
      .then((response) => {
        const newOrders = allOrders.map((order) =>
          order.id === orderId ? response.data : order
        );
        setAllOrders(newOrders);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="edit-page">
      <h1>Edit Your Details!</h1>

      <form className="edit-form">
        <div className="name-input">
          <label>
            First Name<sup>*</sup>
          </label>
          <input
            type="text"
            name="firstName"
            value={editedOrder.firstName}
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
            value={editedOrder.lastName}
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
            value={editedOrder.phone}
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
            value={editedOrder.email}
            onChange={handleTextInput}
            required
          ></input>
        </div>

        <div className="comment-input">
          <label>
            Please provide any specific instructions or <br></br>preferences for
            your pet's grooming
          </label>
          <textarea
            name="comment"
            value={editedOrder.comment}
            onChange={handleTextInput}
          />
        </div>
      </form>

      <div>
        <Link to="/last-orders">
          <button
            className="update-button"
            type="submit"
            onClick={() => {
              handleSubmit();
              navigate(-1);
            }}
          >
            Update
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EditPage;
