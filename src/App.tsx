import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Categories from "./Components/Categories";
import Details from "./Components/Details";
import Collection from "./Components/Collection";
import Shopping from "./Components/Shopping";
import Updates from "./Components/Updates";
import Footer from "./Components/Footer";
import Credits from "./Components/Credits";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      // mirror: true,
      offset: 120,
      duration: 2000,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Categories />
      <hr />
      <Details />
      <hr />
      <Collection />
      <Shopping />
      <Updates />

      <div className="footer">
        <Footer />
      </div>
      <Credits />
    </div>
  );
}

export default App;
