import React, { useEffect, useRef } from "react";
import heroImage from "../assets/Hero-pageNew.png";
import "../CSS/home.css";
import gsap from "gsap";

const Home = () => {
  const expRef = useRef(null);

  useEffect(() => {
    const joiningDate = new Date("2023-06-09");
    const calculateExperience = () => {
      const today = new Date();

      const totalMonths =
        (today.getFullYear() - joiningDate.getFullYear()) * 12 +
        (today.getMonth() - joiningDate.getMonth());
      return Number(totalMonths / 12).toFixed(1);
    };
    const value = calculateExperience();
    gsap.fromTo(
      expRef.current,
      {
        innerText: 0,
      },
      {
        innerText: value,
        duration: 1.6,
        ease: "power3.Out",
        snap: { innerText: 0.1 },
        onUpdate: function () {
          expRef.current.innerText =
            Number(expRef.current.innerText).toFixed(1) + "+ ";
        },
      }
    );
  }, []);

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
              <span className="home-exp" ref={expRef}>
                0+{" "}
              </span>
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

      <div className="detail-part">
        <ul>
          <li>
            <div>
              <p>30k+</p> Claims Worked
            </div>
          </li>
          <li>
            <div>
              <p>2+</p> Healthcare Organizations
            </div>
          </li>
          <li>
            <div>
              <p>3+</p> Software Knowledge
            </div>
          </li>
          <li>
            <div>
              <p>100+</p> Findings to Resolve
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
