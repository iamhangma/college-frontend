/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { FaArrowRight } from "react-icons/fa6";


const HomepageCard = ({ title, text, imageSrc }) => {
  return (
    <>
      <div className="card mb-4 shadow-sm" style={{
        minWidth: "300px",
        maxWidth: "350px"
    }}>
        <img src={imageSrc} className="card-img-top" height={"200px"} alt="Card Image" />
        <div className="for myself">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a style={{
            float: "right"
          }} href="#" className="btn btn-primary">
            Visit <span><FaArrowRight /></span>
          </a>
        </div>
      </div>
    </>
  );
};

export default HomepageCard;
