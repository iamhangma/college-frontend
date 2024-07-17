import React, { useState } from "react";
import { loginUserApi } from "../apis/Api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    loginUserApi(data)
      .then((res) => {
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          localStorage.setItem("token", res.data.token);
          navigate("/admin/dashboard");
          const jsonDecode = JSON.stringify(res.data.userData);
          localStorage.setItem("user", jsonDecode);
        }
      })
      .catch((err) => {
        toast.error("Server Error");
        console.log(err.message);
      });
  };

  return (
    
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "right",
          padding: "120px",
        }}
      >
        <div
        className="w-30 h-85  bg-white p-5 rounded "
          style={{
            width: "500px",
            background: "whitesmoke",
          }}
        >
        <div className="">
          <h1>Welcome</h1>
          <label>Username</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="form-control mb-2"
            type="username"
            placeholder="Enter your username"
          />

          <label>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="form-control mb-2"
            type="password"
            placeholder="Enter your password"
          />
          <div className="d-flex justify-content-end m-3">
            <a href="#" className="text-black text-decoration-none">
              Forget Password?
            </a>
          </div>

          <button onClick={handleSubmit} className="btn btn-primary w-25" >
            Login
          </button>
        </div>
        {/* <div className="d-flex justify-content-end m-3">
          <a href="/register" className="text-black text-decoration-none">
            Don't have an account?
          </a>
          <button
            onClick={() => navigate("/register")}
            className="btn btn-primary ml-2"
          >
            Sign Up
          </button> */}
        </div>
      </div>
    // </div>
  );
};

export default Login;
// Example in Login.jsx


