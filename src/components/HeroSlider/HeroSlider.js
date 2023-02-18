import React from "react";
import JobCourse from "../../assets/images/JobCourse.png";
import CyberSecurity from "../../assets/images/SliderImage.png";
import "./HeroSlider.css";

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
          <img
            src={JobCourse}
            class="d-block w-100"
            alt="SliderImage1"
            height="500"
            style={{ opacity: 0.6 }}
          />
          <div
            class="carousel-caption d-none d-md-block fs-4 fw-bold animate__animated animate__backInDown animate__delay-2s"
            style={{
              width: "500px",
              top: "45%",
              left: "50%",
              bottom: "auto",
              lineHeight: "1.3",
            }}
          >
            <p class="fs-3 mb-0">Course: Job Oriented Training</p>
            <p class="mb-0">Upcoming Batch: B12</p>
            <p class="mb-0">Target Jobs: ABC, XYZ</p>
            <p class="mb-20">Prerequisite: ABC,XYZ</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src={CyberSecurity}
            class="d-block w-100"
            alt="SliderImage2"
            height="500"
            style={{ opacity: 0.6 }}
          />
          <div
            class="carousel-caption d-none d-md-block info fs-4 fw-bold animate__animated animate__backInDown animate__delay-2s"
            style={{
              width: "500px",
              top: "45%",
              left: "50%",
              bottom: "auto",
              lineHeight: "1.3",
            }}
          >
            <p class="fs-3 mb-0">Course: Job Oriented Training</p>
            <p class="mb-0">Upcoming Batch: B12</p>
            <p class="mb-0">Target Jobs: ABC, XYZ</p>
            <p class="mb-20">Prerequisite: ABC,XYZ</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        {/* <i class="bi bi-arrow-left fs-1 fw-bold" style={{color:'black'}}></i> */}
        <i class="bi bi-caret-left-square-fill fs-1 fw-bold w-70" style={{color:'black',fontSize:"30px"}}></i>
        {/* <span class="carousel-control-prev-icon fs-1 fw-bold" aria-hidden="true"></span> */}
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <i class="bi bi-caret-right-square-fill fs-1 fw-bold w-70" style={{color:'black',fontSize:"30px"}}></i>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HeroSlider;
