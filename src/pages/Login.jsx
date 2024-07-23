import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginUserApi } from "../apis/Api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      const data = {
        email: values.email,
        password: values.password,
      };

      loginUserApi(data)
        .then((res) => {
          if (res.data.success) {
            toast.success(res.data.message); // Success toast
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.userData));
            navigate("/questions");
          } else {
            toast.error(res.data.message); // Error toast
          }
        })
        .catch((err) => {
          toast.error("Server Error"); // Error toast for server issues
          console.log(err.message);
        });
    },
  });

  return (
    <div className="login-container">
      <div
        style={{
          width: "130%",
          display: "flex",
          justifyContent: "right",
          padding: "40px",
        }}
      >
        <div
          className="w-30 h-85 bg-white p-4 rounded"
          style={{
            width: "650px",
            background: "whitesmoke",
          }}
        >
          <h1>Welcome</h1>
          <form onSubmit={formik.handleSubmit}>
            <label>Email</label>
            <input
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="form-control mb-2"
              type="email"
              placeholder="Enter your email"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}

            <label>Password</label>
            <input
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="form-control mb-2"
              type="password"
              placeholder="Enter your password"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}

            <div className="d-flex justify-content-end m-3">
              <a href="#" className="text-black text-decoration-none">
                Forget Password?
              </a>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>

          <div className="d-flex justify-content-center m-3">
            <span>Don't have an account?</span>
            <Link to="/get-started" className="text-black text-decoration-none ml-2">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
