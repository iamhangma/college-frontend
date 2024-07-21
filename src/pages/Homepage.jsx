// import React from "react";
// import Navbar from "../components/Navbar";
// import { cards } from "./Reviews/dummyData";
// import HomepageCard from "../components/HomepageCard";

// const Homepage = () => {
//   return (
//     <>
//       {/* <div>
//         <h2 className="text-center">Welcome to homepage!</h2>
//       </div> */}
//       <div className="my-4">
//         <h4 className="text-center">Your mental health matter</h4>
//         <h4 className="text-center">You deserve to be happy and loved</h4>

//       </div>
//       <div className="my-4">
//         <div className="my-8 d-flex justify-content-around gap-3 flex-wrap ">
//           {cards?.slice(0, 3).map((item, index) => {
//             return (
//               <HomepageCard
//                 key={index}
//                 title={item.title}
//                 imageSrc={item.imageSrc}
//                 text={item?.text.slice(0, 100)}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Homepage;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

// Navbar component


// Homepage component
const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div className="homepage-container">
     <button
              onClick={() => navigate('/questions')}
              className="btn btn-outline-primary w-1"
              type="submit"
            >
              <span style={{ whiteSpace: 'nowrap' }}>Get Started</span>
            </button>
      {/* <div className="title-container">
        <h2 className="title">Your mental health matter</h2>
        <h2 className="title">You deserve to be happy and loved</h2>
      </div> */}
      {/* <div className="card-container">
        <a href="/myself" className="card">
          <div className="card-arrow">{">"}</div>
        </a>
        <a href="/couples" className="card">
\          <div className="card-arrow">{">"}</div>
        </a>
        <a href="/teen" className="card">
          <div className="card-arrow">{">"}</div>
        </a>
      </div> */}
    </div>
  );
};

// App component
const App = () => {
  return (
    // <div className="app-container">
     
      <Homepage />
    // </div>
  );
};

export default App;


