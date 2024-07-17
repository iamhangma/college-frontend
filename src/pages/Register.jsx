import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../App.css";

const Register = () => {
  // useState (Setting input value)
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);

  // function for changing input value
  const changeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changeCreatePassword = (e) => {
    setCreatePassword(e.target.value);
  };

  const changeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const changeAgree = (e) => {
    setAgree(e.target.checked);
  };

  // function for button
  const handleSubmit = (e) => {
    e.preventDefault();
    // check if input value is available
    console.log(firstName, email, createPassword, confirmPassword, agree);
  };

  return (
    <>
      <div className="register-container w-100">
        <div className="register-card">
          <h1 className="register-title">You’ve completed the questionnaire!</h1>
          <div>
            <form className="register-form">
              <label>Firstname</label>
              <input
                onChange={changeFirstName}
                type="text"
                className="form-control mb-2"
                placeholder="Enter your firstname"
              />

              <label>Email Address</label>
              <input
                onChange={changeEmail}
                type="email"
                className="form-control mb-2"
                placeholder="Enter your email"
              />

              <label>Create Password</label>
              <input
                onChange={changeCreatePassword}
                type="password"
                className="form-control mb-2"
                placeholder="Enter your password"
              />

              <label>Confirm Password</label>
              <input
                onChange={changeConfirmPassword}
                type="password"
                className="form-control mb-2"
                placeholder="Confirm your password"
              />

              <div className="form-check mb-2">
                <input
                  onChange={changeAgree}
                  type="checkbox"
                  className="form-check-input"
                  id="agree"
                />
                <label className="form-check-label" htmlFor="agree">
                  I agree to the <a href="#" className="text-decoration-none">terms & conditions</a> and <a href="#" className="text-decoration-none">privacy policy</a>.
                </label>
              </div>

              <button onClick={handleSubmit} className="btn btn-danger w-100">
                Continue
              </button>

              <a href="" className="text-black text-decoration-none">
                Already have an account?
              </a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
