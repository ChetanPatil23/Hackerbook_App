import React from "react";

const HeroSliderInfo = ({ img }) => {
  return (
    <>
      <img
        src={img}
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
        <p class="fs-3 mb-0">Courses: Job Oriented Training</p>
        <div style={{ width: "300px", marginLeft: "163px", textAlign: "left" }}>
          <p class="mb-0">Upcoming Batch:</p>
          <p class="mb-0">Target Jobs:</p>
          <p class="mb-20">Prerequisite:</p>
        </div>
      </div>
    </>
  );
};

export default HeroSliderInfo;
