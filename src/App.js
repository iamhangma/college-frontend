import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/Aboutus";
import Footer from "./components/Footer";
import Questions from "./pages/Questions";
import Review from './pages/Review';
import Contactus from './pages/Contactus';
import Advice from './pages/Advice';
import TherapyProcess from "./pages/TherapyProcess";
// import TherapyPayment from './pages/TherapyPayment';
import EmailVerification from "./pages/verification";

function App() {

  return (
    <>
      <Router>
        <Navbar />

        <div className="bg-success">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/reviews" element={<Review />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/contactus" element={<Contactus/>}/>
            <Route path="/advice" element={<Advice />} />
            <Route path="/therapyprocess" element={<TherapyProcess/>}/>
            {/* <Route path="/therapy-payment" element={<TherapyPayment />} /> */}
            <Route path="/verification" element={<EmailVerification />} />



          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
