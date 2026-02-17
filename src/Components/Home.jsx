import React, { useEffect, useRef } from "react";
import heroImage from "../assets/Hero-pageNew.png";
import resume from "../assets/Nisha_Resume_2025.pdf";
import "../CSS/home.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home = () => {
  const expRef = useRef(null);
  const claimRef = useRef(null);
  const organizationsRef = useRef(null);
  const softwareRef = useRef(null);
  const findingsRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

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
        scrollTrigger: {
          trigger: expRef.current,
          start: "top 90%",
          once: true,
        },
        onUpdate: function () {
          expRef.current.innerText =
            Number(expRef.current.innerText).toFixed(1) + "+ ";
        },
      },
    );

    gsap.fromTo(
      claimRef.current,
      { innerText: 0 },
      {
        innerText: 30000,
        duration: 3,
        ease: "power3.out",
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: claimRef.current,
          start: "top 95%",
          once: true,
        },
        onUpdate: function () {
          claimRef.current.innerText =
            Math.round(claimRef.current.innerText) + "+";
        },
      },
    );

    gsap.fromTo(
      organizationsRef.current,
      { innerText: 0 },
      {
        innerText: 2,
        duration: 3,
        ease: "power3.out",
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: organizationsRef.current,
          start: "top 95%",
          once: true,
        },
        onUpdate: function () {
          organizationsRef.current.innerText =
            Math.round(organizationsRef.current.innerText) + "+";
        },
      },
    );
    gsap.fromTo(
      softwareRef.current,
      { innerText: 0 },
      {
        innerText: 4,
        duration: 3,
        ease: "power3.out",
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: softwareRef.current,
          start: "top 95%",
          once: true,
        },
        onUpdate: function () {
          softwareRef.current.innerText =
            Math.round(softwareRef.current.innerText) + "+";
        },
      },
    );
    gsap.fromTo(
      findingsRef.current,
      { innerText: 0 },
      {
        innerText: 100,
        duration: 3,
        ease: "power3.out",
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: findingsRef.current,
          start: "top 95%",
          once: true,
        },
        onUpdate: function () {
          findingsRef.current.innerText =
            Math.round(findingsRef.current.innerText) + "+";
        },
      },
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
            <a href={resume} download className="btn-Resume">
              <button>Resume</button>
            </a>
            <a href="#contact" className="btn-contact">
              <button>Contact</button>
            </a>
          </div>
        </div>
      </div>

      <div className="detail-part">
        <ul>
          <li>
            <div className="claim-counter">
              <p ref={claimRef}>30000+</p>
              <p>Claims Worked</p>
            </div>
          </li>
          <li>
            <div className="office-counter">
              <p ref={organizationsRef}>2+</p>
              <p>Organizations</p>
            </div>
          </li>
          <li>
            <div className="software-counter">
              <p ref={softwareRef}>4+</p>
              <p>Software Knowledge</p>
            </div>
          </li>
          <li>
            <div className="knowledge-counter">
              <p ref={findingsRef}>100+</p>
              <p>Findings to Resolve</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
