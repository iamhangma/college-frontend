/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-light py-4" style={{
        background: "#525B4C"
    }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>About Us</h5>
            <p>
              We are a company dedicated to providing high-quality live and good health structure to ours clients
            </p>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Home</a></li>
              <li><a href="#" className="text-light">Products</a></li>
            <li><a href="#" className="text-light">Services</a></li>
              <li><a href="#" className="text-light">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Devkota Marg </li>
              <li>Kathmandu, Nepal</li>
              <li>Phone: (+977) 9800000000</li>
              <li>Email: info@example.com</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <p className="mb-0">&copy; 2023 Example Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;