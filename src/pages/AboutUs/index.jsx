import React from "react";

const AboutUS = () => {
  return (
    <>
      <div className="w-100">
        <h1 className="text-center">About Us</h1>
      </div>
      <div>
        <h3 className="text-center ">Find your perfect theparist</h3>
        <div className="mt-4 d-flex justify-content-center ">
          <p className=" w-75 text-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            quia nostrum enim? Aut, expedita quam odio iusto quidem aperiam
            doloribus? Ratione veniam ad tempore fugiat commodi rerum atque
            inventore in maiores, maxime, fuga voluptatem itaque perferendis?
            Doloremque laborum recusandae inventore beatae amet consequatur!
            Sequi modi iure eius at doloremque temporibus?
          </p>
        </div>
        <h4 className="text-center">Our Therapist</h4>
      </div>
      <div className="my-4 d-flex justify-content-center">
        <img
          src="https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="people collaboration"
          width={"800px"}
        />
      </div>
    </>
  );
};

export default AboutUS;
