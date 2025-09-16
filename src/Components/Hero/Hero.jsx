import React from "react";
import profile_img from "../../assets/profile.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Hero.css";
import cvFile from "../../assets/Aditya-Kumar.pdf"

const Hero = () => {
  return (
    <section id="home" className="container text-center py-4 mb-5 ">
      <div className="">
        <img
          src={profile_img}
          alt="Profile"
          className="hero-img img-fluid"
        />
      </div>


      <h1 className="fw-bold display-4 mb-3">
        I'm <span className="text-danger">Aditya Kumar</span>
      </h1>


      <p className="mx-auto fs-5 lh-lg w-75 mt-5">
        CSE Undergrad, Software Engineer and Full Stack Developer
      </p>


      <div className="d-flex justify-content-center flex-wrap gap-3 mt-4">
        <AnchorLink
          offset={50}
          href="#contact"
          className="btn btn-lg rounded-pill text-white hero-connect"
        >
          Get in touch
        </AnchorLink>

        <a target="_blank"
          href={cvFile}
          className="btn btn-lg rounded-pill border border-light text-white hero-resume"
        >
          My Resume
        </a>
      </div>

      <div className="d-flex justify-content-center flex-wrap gap-3 mt-3 mb-5">
        <a target="_blank" href="https://www.linkedin.com/in/aditya-kumar-051973262"><img width="50" height="50" src="https://img.icons8.com/ios/50/b31010/linkedin.png" alt="linkedin"/></a>
        <a target="_blank" href="https://github.com/Me-Aditya-Kumar"><img width="50" height="50" src="https://img.icons8.com/ios/50/b31010/github.png" alt="github"/></a>
      </div>
    </section>
  );
};

export default Hero;
