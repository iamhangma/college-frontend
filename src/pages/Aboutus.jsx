import React from 'react';
import '../App.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">Find yourself the perfect therapist</h1>
      <p className="about-us-description">
        Welcome to Manashanti! We provide accessible, compassionate online therapy tailored to your needs. Our licensed therapists offer flexible scheduling and secure video sessions, ensuring quality mental health care from the comfort of your home. Join us to embark on a journey towards a healthier, happier you.
      </p>
      <div className="therapist-container">
        <h2 className="therapist-title">Our therapists</h2>
        <div className="therapist-grid">
          <div className="therapist-card">
            <div className="therapist-image-container">
              {/* <img
                src="aboutus.png"
                alt="Therapist 1"
                className="therapist-image"
              />
            </div>
            <div className="therapist-details">
              <h3 className="therapist-name">Sarah Johnson</h3> */}
              {/* Add more details about the therapist */}
            </div>
          </div>
          {/* Add more therapist cards */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;