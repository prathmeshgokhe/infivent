import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Mainfeatures from "./components/Mainfeatures";
function App() {
  return (
    <>
      <div className="app">
        <Hero />
        <Mainfeatures />
        <Footer />
      </div>
    </>
  );
}

export default App;
