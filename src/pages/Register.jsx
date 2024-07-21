import React from "react";
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "../App.css";

const Register = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      createPassword: '',
      confirmPassword: '',
      agree: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required('First name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      createPassword: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('createPassword'), null], 'Passwords must match')
        .required('Confirm password is required'),
      agree: Yup.bool()
        .oneOf([true], 'You must accept the terms and conditions'),
    }),
    onSubmit: values => {
      console.log(values);
      navigate('/verification');
    },
  });

  return (
    <div className="register-container w-100">
      <div className="register-card">
        <h1 className="register-title">You’ve completed the questionnaire!</h1>
        <div>
          <form onSubmit={formik.handleSubmit} className="register-form">
            <label>Firstname</label>
            <input
              name="firstName"
              type="text"
              className="form-control mb-2"
              placeholder="Enter your firstname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="error">{formik.errors.firstName}</div>
            ) : null}

            <label>Email Address</label>
            <input
              name="email"
              type="email"
              className="form-control mb-2"
              placeholder="Enter your email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}

            <label>Create Password</label>
            <input
              name="createPassword"
              type="password"
              className="form-control mb-2"
              placeholder="Enter your password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.createPassword}
            />
            {formik.touched.createPassword && formik.errors.createPassword ? (
              <div className="error">{formik.errors.createPassword}</div>
            ) : null}

            <label>Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              className="form-control mb-2"
              placeholder="Confirm your password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="error">{formik.errors.confirmPassword}</div>
            ) : null}

            <div className="form-check mb-2">
              <input
                name="agree"
                type="checkbox"
                className="form-check-input"
                id="agree"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.agree}
              />
              <label className="form-check-label" htmlFor="agree">
                I agree to the <button type="button" className="link-button">terms & conditions</button> and <button type="button" className="link-button">privacy policy</button>.
              </label>
              {formik.touched.agree && formik.errors.agree ? (
                <div className="error">{formik.errors.agree}</div>
              ) : null}
            </div>

            <button type="submit" className="btn btn-danger w-100">
              Continue
            </button>

            <button type="button" className="link-button">
              Already have an account?
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
