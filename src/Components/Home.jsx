import React from "react";
import heroImage from "../assets/Hero-pageNew.png";
import "../CSS/home.css";

const Home = () => {
  return (
    <div className="home-container" id="home">
      <div className="image-part">
        <div className="image-container">
          <img src={heroImage} alt="Nisha's Image" className="home-image" />
        </div>
      </div>

      <div className="wording-part">
        <div className="home-content">
          <div className="home-para">
            <p>
              Hi, I’m{" "}
              <b>
                <span className="home-para-name">Nisha Ravikumar</span>
              </b>
            </p>
            <p>
              An experienced Account Receivable Caller with{" "}
              <span className="home-exp">2.5+ </span>
              years in medical billing and RCM, focused on resolving denied
              claims and improving reimbursement outcomes, helping healthcare
              providers unpaid and denied claims into successful payments.
            </p>
          </div>
          <div className="home-buttons">
            <a href="#" className="btn-Resume">
              <button>Download Resume</button>
            </a>
            <a href="#" className="btn-contact">
              <button>Contact</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
