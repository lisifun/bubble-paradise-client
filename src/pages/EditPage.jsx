import React, { useState, useContext } from "react";
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

  const handleSubmit = (e) => {
    // e.preventDefault();

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

  return (
    <div className="edit-page">
      <form
        className="form"
        // onSubmit={handleSubmit}
        style={{
          width: "800px",
        }}
      >
        <div className="full-name-input">
          <div className="name-input">
            <label>
              First Name<sup style={{ color: "red" }}>*</sup>
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
              Lastname<sup style={{ color: "red" }}>*</sup>
            </label>
            <input
              type="text"
              name="lastName"
              value={editedOrder.lastName}
              onChange={handleTextInput}
              required
            ></input>
          </div>
        </div>

        <div className="contact-input">
          <div className="email-input">
            <label>
              Email<sup style={{ color: "red" }}>*</sup>
            </label>
            <input
              type="text"
              name="email"
              value={editedOrder.email}
              onChange={handleTextInput}
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
              value={editedOrder.phone}
              onChange={handleTextInput}
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
            value={editedOrder.comment}
            onChange={handleTextInput}
          />
        </div>
      </form>

      <div className="nav-buttons">
        <div>
          <Link to="/last-orders">
            <button
              className="next-button"
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
    </div>
  );
};

export default EditPage;
