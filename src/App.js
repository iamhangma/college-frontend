import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import AboutUS from "./pages/AboutUs";
import Reviews from "./pages/Reviews";

function App() {
  return (
    <Router>
      <Navbar />

      <div className="bg-success p-4">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about-us" element={<AboutUS />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
