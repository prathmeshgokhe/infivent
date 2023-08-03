import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Mainfeatures from "./components/Mainfeatures";
import "./App.css";
import Visionmission from "./components/Visionmission";
import PowerFeature from "./components/PowerFeature";
function App() {
  return (
    <>
      <div className="app">
        <Hero />
        <Visionmission />
        <Mainfeatures />
        <PowerFeature />
        <Footer />
      </div>
    </>
  );
}

export default App;
