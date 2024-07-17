import React from "react";

const Card = ({ title, text }) => {
  return (
    <div className="card mb-4 shadow-sm" style={{
        minWidth: "300px",
        maxWidth: "350px"
    }}>
      <div className="">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-justify">{text}</p>
      </div>
    </div>
  );
};

export default Card;
