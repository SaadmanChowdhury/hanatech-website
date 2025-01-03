import "./index.scss";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      
      <Navbar />

      <div className="container">
        <Home />
        <Services />
        <Contact />
        <Footer />
      </div>

    </div>
  );
}

export default App;
