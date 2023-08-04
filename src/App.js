import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Mainfeatures from "./components/Mainfeatures";
import "./App.css";
import Visionmission from "./components/Visionmission";
import PowerFeature from "./components/PowerFeature";
import COntactform from "./components/Contactform"
import ContactForm from "./components/Contactform";
function App() {
  return (
    <>
      <div className="app">
        <Hero />
        <Visionmission />
        <Mainfeatures />
        <PowerFeature />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}

export default App;
