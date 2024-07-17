import React, { useState } from "react";
import "../App.css";

const Contactus = () => {
  // useState (Setting input value)
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // function for changing input value
  const changeUsername = (e) => {
    setUsername(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changeMessage = (e) => {
    setMessage(e.target.value);
  };

  // function for button
  const handleSubmit = (e) => {
    e.preventDefault();
    // check if input value is available
    console.log(username, email, message);
  };

  return (
    <div className="container">
      <div className="contact-form">
        <h1>Contact Us</h1>
        <div className="form-wrapper">
          <form className="form-content">
            <label>Username</label>
            <input
              onChange={changeUsername}
              type="text"
              className="form-control mb-2"
              placeholder="Enter your username"
            />

            <label>Email Address</label>
            <input
              onChange={changeEmail}
              type="email"
              className="form-control mb-2"
              placeholder="Enter your email"
            />

            <label>Message</label>
            <textarea
              onChange={changeMessage}
              className="form-control mb-2"
              placeholder="Enter your message"
              rows="5"
            />

<div className="w-100 d-flex justify-content-center">

            <button onClick={handleSubmit} className="btn">
              Submit
            </button>
</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
