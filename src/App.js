import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Mainfeatures from "./components/Mainfeatures";
import "./App.css";
import Visionmission from "./components/Visionmission";
function App() {
  return (
    <>
      <div className="app">
        <Hero />
        <Mainfeatures />
        <Footer />
        <Visionmission />
      </div>
    </>
  );
}

export default App;
