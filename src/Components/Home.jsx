import React from "react";
import heroImage from "../assets/Hero-pageEdited.png";
import "../CSS/home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="image-part">
        <div className="image-container">
          <img src={heroImage} alt="Nisha's Image" className="home-image" />
        </div>
      </div>
      <div className="home-content"></div>
    </div>
  );
};

export default Home;
