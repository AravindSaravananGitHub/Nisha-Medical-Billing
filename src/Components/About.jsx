import React, { useEffect, useRef } from "react";
import "../CSS/about.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import InstagramIcon from "@mui/icons-material/Instagram";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";

gsap.registerPlugin(ScrollTrigger);

const images = [image1, image2, image3, image4];

const About = () => {
  const stackRef = useRef(null);
  const cardsRef = useRef([]);
  const expRef = useRef(null);

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

    const cards = cardsRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: stackRef.current,
        start: "top 70%",
        end: "top 30%",
        scrub: true,
      },
    });

    cards.forEach((card, i) => {
      tl.fromTo(
        card,
        {
          y: 120,
          scale: 0.9,
        },
        {
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        },
        i * 0.2,
      );
    });

    cards.forEach((card, index) => {
      card.addEventListener("click", () => bringToFront(index));

      function bringToFront(clickedIndex) {
        const ordered = [...cards];
        const clicked = ordered.splice(clickedIndex, 1)[0];
        ordered.push(clicked);

        const tl = gsap.timeline();

        ordered.forEach((card, i) => {
          tl.to(card, {
            zIndex: i + 1,
            duration: 0.6,
            ease: "power3.inOut",
            transform: stackTransforms[i],
            onComplete: () => {
              card.style.zIndex = i + 1;
            },
          });
        });
        cardsRef.current = ordered;
      }
    });
    return () => ScrollTrigger.killAll();
  }, []);

  return (
    <div className="about-main" id="about">
      <div className="about-container">
        <h2 className="about-title">
          <span>About</span> <span>Me</span>
        </h2>
        <div className="about-content">
          <div className="about-image">
            <section className="photo-section">
              <div className="photo-stack" ref={stackRef}>
                {images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    ref={(el) => (cardsRef.current[i] = el)}
                    alt="Nisha's Photos"
                    className="photo"
                    style={{ zIndex: i + 1, transform: stackTransforms[i] }}
                  />
                ))}
              </div>
            </section>
          </div>

          <div className="about-wording">
            <section className="about-para">
              <p>
                I am <span className="about-nisha-name">Nisha Ravikumar</span>,
                an experienced Account Receivable Caller with over{" "}
                <span className="home-exp" ref={expRef}>
                  0+{" "}
                </span>{" "}
                years of hands-on experience in US healthcare medical billing
                and revenue cycle management. I have worked extensively on both
                physician and hospital billing, supporting healthcare providers
                in resolving unpaid and denied claims efficiently.
              </p>
              <p>
                My expertise includes AR follow-ups, denial management, payer
                communications, and appeals processing, using industry-standard
                billing platforms such as Epic, eClinicalWorks, and Streamline
                MD. I am highly skilled at analyzing claim issues, coordinating
                with payers, and ensuring timely reimbursement.
              </p>
            </section>
            <div className="about-contact">
              <h4>Contact me through..</h4>
              <div className="about-contact-list">
                <a
                  href="mailto:nisharavikumar006@gmail.com"
                  className="about-link"
                >
                  <button className="about-btn">
                    <AttachEmailIcon />
                  </button>
                </a>
                <a href="tel:+916383435928" className="about-link">
                  <button className="about-btn">
                    <WhatsAppIcon />
                  </button>
                </a>

                <a
                  href="https://www.instagram.com/nisha._.ravikumar?igsh=eWVrZ2NuNnlmdTBj"
                  className="about-link"
                  target="block"
                >
                  <button className="about-btn">
                    <InstagramIcon />
                  </button>
                </a>
                <a href="tel:+916383435928" className="about-link">
                  <button className="about-btn">
                    <TwitterIcon />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------- STACK POSITIONS ---------- */
const stackTransforms = [
  "rotate(-10deg) translate(-28px, 40px)",
  "rotate(6deg) translate(22px, 26px)",
  "rotate(-4deg) translate(-12px, 12px)",
  "rotate(0deg) translate(0px, 0px)",
];

export default About;
