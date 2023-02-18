import React from "react";
import JobCourse from "../../assets/images/JobCourse.png";
import CyberSecurity from "../../assets/images/SliderImage.png";
import "./HeroSlider.css";
import HeroSliderInfo from "./HeroSliderInfo";

const HeroSlider = () => {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide carousel-dark"
      data-ride="carousel"
      data-interval="3000"
      data-wrap="true"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active animate__animated animate__pulse animate__delay-1s animate__slower">
          <HeroSliderInfo img={JobCourse}/>
        </div>
        <div class="carousel-item">
          <HeroSliderInfo img={CyberSecurity}/>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <i
          class="bi bi-caret-left-square-fill fs-1 fw-bold w-70"
          style={{ color: "black", fontSize: "30px" }}
        ></i>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <i
          class="bi bi-caret-right-square-fill fs-1 fw-bold w-70"
          style={{ color: "black", fontSize: "30px" }}
        ></i>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HeroSlider;
