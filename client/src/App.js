import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Mainfeatures from "./components/Mainfeatures";
import Visionmission from "./components/Visionmission";
import PowerFeature from "./components/PowerFeature";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.js";
import Solution from "./pages/Solution.js";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/solution" element={<Solution />} />
          {/* <Route path="/contact" element={<ContactForm />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
