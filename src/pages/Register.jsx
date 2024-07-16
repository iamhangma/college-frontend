import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Register = () => {
  // useState (Setting input value)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // function for changing input value
  const changeFirstname = (e) => {
    setFirstName(e.target.value);
  };

  const changeLastname = (e) => {
    setLastName(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  // function for button
  const handleSubmit = (e) => {
    e.preventDefault();
    // check if input value is available
    console.log(firstName, lastName, email, password);
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <div
          style={{
            width: "700px",
            background: "whitesmoke",
          }}
        >
          <h1 className="m-4 text-center">Create your Account!</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <form className="m-4 w-75">
              <label>Firstname</label>
              <input
                onChange={changeFirstname}
                type="text"
                className="form-control mb-2"
                placeholder="Enter your firstname"
              />

              <label>Lastname</label>
              <input
                onChange={changeLastname}
                type="text"
                className="form-control mb-2"
                placeholder="Enter your lastname"
              />

              <label>Email Address</label>
              <input
                onChange={changeEmail}
                type="email"
                className="form-control mb-2"
                placeholder="Enter your email"
              />

              <label>Password</label>
              <input
                onChange={changePassword}
                type="password"
                className="form-control mb-2"
                placeholder="Enter your password"
              />

              <button onClick={handleSubmit} className="btn btn-danger w-100">
                Create an Account
              </button>

              <a href="" className="text-black text-decoration-none">
                Already have account?
              </a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
