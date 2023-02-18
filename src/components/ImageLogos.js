import React from "react";
import fb from "../assets/images/fb.jpg";
import insta from "../assets/images/Insta.jpg";
import youtube from "../assets/images/youtubeLogo.jpg";

const ImageLogos = () => {
  return (
    <ul>
      <li>
        <a
          href="https://www.facebook.com/HackerBookBangalore"
          target="_blank"
          rel="noreferrer"
        >
          <img src={fb} alt="Facebook Logo" width="28" height="28" />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/hackerbook_technologies/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={insta} alt="Facebook Logo" width="28" height="28" />
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/channel/UCU8J3ceY6Cg49izG7f9q-EA"
          target="_blank"
          rel="noreferrer"
        >
          <img src={youtube} alt="Facebook Logo" width="28" height="28" />
        </a>
      </li>
      <li>
        <i
          class="bi bi-upload"
          style={{ color: "lavender", fontSize: "18px" }}
        ></i>
      </li>
    </ul>
  );
};

export default ImageLogos;
