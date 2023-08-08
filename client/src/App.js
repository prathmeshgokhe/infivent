import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.js";
import Solution from "./pages/Solution.js";
import Aboutus from "./pages/Aboutus";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/Aboutus" element={<Aboutus />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
