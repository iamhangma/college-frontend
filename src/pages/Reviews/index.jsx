import React from "react";
import { cards } from "./dummyData";
import Card from "../../components/Card";

const Reviews = () => {
  return (
    <>
      {" "}
      <div className="w-100">
        <h1 className="text-center">Reviews</h1>
      </div>
      <div className="my-4">
        <div className="my-8 d-flex gap-3 flex-wrap ">
          {cards?.map((item, index) => {
            return <Card key={index} title={item.title} text={item?.text} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Reviews;
