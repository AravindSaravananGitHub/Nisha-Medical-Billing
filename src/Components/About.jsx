import React from "react";
import "../CSS/about.css";
import image1 from "../assets/image4.jpeg";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import InstagramIcon from "@mui/icons-material/Instagram";

const About = () => {
  return (
    <div className="about-main" id="about">
      <div className="about-container">
        <h2 className="about-title">
          <span>About</span> <span>Me</span>
        </h2>
        <div className="about-content">
          <div className="about-image">
            <section className="photo-section">
              <div className="photo-stack">
                <img src={image1} alt="Nisha image" />
              </div>
            </section>
          </div>

          <div className="about-wording">
            <section className="about-para">
              <p>
                I am <span className="about-nisha-name">Nisha Ravikumar</span>,
                an experienced Account Receivable Caller with over 2.5 years of
                hands-on experience in US healthcare medical billing and revenue
                cycle management. I have worked extensively on both physician
                and hospital billing, supporting healthcare providers in
                resolving unpaid and denied claims efficiently.
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

export default About;
