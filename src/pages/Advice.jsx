import React from 'react';

const Advice = () => {
  return (
    <div className="advice-page">
      <div className="advice-container">
        <h1 className="advice-title">Advice about mental health</h1>
        <div className="advice-content">
          <div className="advice-categories">
            <h2>Get the support you need from one of our therapists</h2>
            <ul className="category-list">
              <li>General</li>
              <li>Therapy</li>
              <li>Relationship</li>
              <li>Depression</li>
              <li>Love</li>
            </ul>
          </div>
          <div className="advice-details">
            <h2>Depression</h2>
            {/* Add your content about Depression advice here */}
            <h2>Anxiety</h2>
            {/* Add your content about Anxiety advice here */}
            <h2>Therapy</h2>
            {/* Add your content about Therapy advice here */}
          </div>
        </div>
        <div className="button-container">
          <button className="button">Speak with the licensed therapist</button>
        </div>
      </div>
    </div>
  );
};

export default Advice;