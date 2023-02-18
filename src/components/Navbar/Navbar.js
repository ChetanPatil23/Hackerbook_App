import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/hackerLogo.png";
import ImageLogos from "../ImageLogos";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className="contactInfo">
          <span>
            <i class="bi bi-telephone-inbound"></i> +91 8889997770
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-envelope-paper"
              viewBox="0 0 16 16"
            >
              <path d="M4 0a2 2 0 0 0-2 2v1.133l-.941.502A2 2 0 0 0 0 5.4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.4a2 2 0 0 0-1.059-1.765L14 3.133V2a2 2 0 0 0-2-2H4Zm10 4.267.47.25A1 1 0 0 1 15 5.4v.817l-1 .6v-2.55Zm-1 3.15-3.75 2.25L8 8.917l-1.25.75L3 7.417V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5.417Zm-11-.6-1-.6V5.4a1 1 0 0 1 .53-.882L2 4.267v2.55Zm13 .566v5.734l-4.778-2.867L15 7.383Zm-.035 6.88A1 1 0 0 1 14 15H2a1 1 0 0 1-.965-.738L8 10.083l6.965 4.18ZM1 13.116V7.383l4.778 2.867L1 13.117Z" />
            </svg>
            &nbsp; abcd@xyz.com
          </span>
        </div>
        <div>
          <h3 style={{ letterSpacing: 1.8 }}>HACKERBOOK</h3>
          <h4 style={{ letterSpacing: 2 }}>ATC WITH EC COUNCIL</h4>
        </div>
        <ImageLogos />
      </div>
      <div className="navbar sticky-top">
        <img src={logo} alt="HeaderLogo" width="150" />
        <div className="menu">
          <ul>
            <li>HOME</li>
            <li>SERVICES</li>
            <li>CONTACT US</li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                CERTIFICATIONS
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    CEH
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    CCSE
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    CASE JAVA
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                TRAININGS
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Soc Analyst Training
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Cyber Security
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Cloud Security Training
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Manual Testing
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Selenium Automation
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
