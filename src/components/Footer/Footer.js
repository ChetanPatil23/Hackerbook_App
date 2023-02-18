import React from "react";
import "./Footer.css";
import logo from "../../assets/images/hackerLogo.png";
import ImageLogos from "../ImageLogos";

const Footer = () => {
  let date = new Date();
  return (
    <>
      <div className="footer-info">
        <div className="left">
          <img src={logo} alt="HeaderLogo" width="150" />
          <p className="objective">
            Our objective is to train individuals on securing applications,
            infrastructure and systems by using sophisticated process, Tools,
            techniques and practices
          </p>
          <ImageLogos />
        </div>

        <div className="centre">
          <ul>
            <h4>Our Services</h4>
            <li>Trainings</li>
            <li>Ec-Council Certifications</li>
            <li>Services</li>
            <li>Staffing</li>
            <li>Job Posting</li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <h4>Useful Links</h4>
            <li>Home</li>
            <li>Services</li>
            <li>Contact Us</li>
            <li>Certifications</li>
            <li>Trainings</li>
          </ul>
        </div>
      </div>
      <footer>
        <div className="title">HackerBook Technologies</div>
        <div className="info">
          Copyright © {date.getFullYear()} HackerBook - All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
