import React from "react";
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

function App() {
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
