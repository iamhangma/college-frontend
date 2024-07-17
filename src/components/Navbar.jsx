// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const navigate = useNavigate();
//   return (
   

//       <nav className="navbar navbar-expand-lg bg-body-tertiary  ">
//         <div className="container-fluid">
//           <Link className="navbar-brand text-danger fw-bold" to={"/"}>
//             MANASHANTI
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div
//             className="collapse navbar-collapse "
//             id="navbarSupportedContent"
//           >
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-center">
//               {/* <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to={"/"}>
//                   Home
//                 </Link>
//               </li> */}

//               <li className="nav-item">
//                 <Link className="nav-link" to={"/contactus"}>
//                   Contact Us
//                 </Link>
//               </li>

//               <li className="nav-item">
//                 <Link className="nav-link" to={"/about-us"}>
//                   About US
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to={"/reviews"}>
//                   Reviews
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to={"/advice"}>
//                   Advice
//                 </Link>
//               </li>
//             </ul>
//             <form className="d-flex gap-2 align-items-center " role="search">
//               <button onClick={() => navigate("/login")} className="btn btn-outline-primary me-2" type="submit">
//                 Login
//               </button>
//               <button
//                 onClick={() => navigate("/register")}
//                 className="btn btn-outline-primary w-100 "
//                 type="submit"
//               >
//                 Register
//               </button>
//               <button
//                 onClick={() => navigate("/questions")}
//                 className="btn btn-outline-primary w-100 "
//                 type="submit"
//               >
//                 <span style={{
//                   whiteSpace: "nowrap"
//                 }}>

//                 Get Started
//                 </span>
//               </button>
              
//             </form>
//           </div>
//         </div>
//       </nav>
    
  
//   );
// };

// export default Navbar;
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../style/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand text-danger fw-bold" to="/">
          MANASHANTI
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-center">
            <li className="nav-item">
              <Link className="nav-link" to="/contactus">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutus">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reviews">
                Review
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/advice">
                Advice
              </Link>
            </li>
          </ul>
          <form className="d-flex gap-2 align-items-center" role="search">
            <button
              onClick={() => navigate('/login')}
              className="btn btn-outline-primary me-2"
              type="submit"
            >
              Login
            </button>
            <button
              onClick={() => navigate('/register')}
              className="btn btn-outline-primary w-100"
              type="submit"
            >
              Register
            </button>
            <button
              onClick={() => navigate('/questions')}
              className="btn btn-outline-primary w-100"
              type="submit"
            >
              <span style={{ whiteSpace: 'nowrap' }}>Get Started</span>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;