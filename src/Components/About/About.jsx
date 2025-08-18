import React from "react";
import "./About.css";
import profile_img from "../../assets/profile_img.jpg";

const About = () => {
  return (
    <section id="about" className="container py-3" >
      <div className="text-center mb-4">
        <h1 className="about-h1">About Me</h1>
      </div>

      <div className="row align-items-center gy-5">
        <div className="col-lg-5 text-center">
          <img src="https://placehold.co/400x600" alt="Profile" /*className="about-img img-fluid rounded"*/ />
        </div>

        <div className="col-lg-7">
          <div className="about-para mb-3">
            <p>
              I’m Aditya Kumar, a B.Tech CSE student passionate about building
              reliable, user-focused software. I work with Java, Python, and web
              technologies (PHP, MySQL, HTML, CSS, JavaScript/Bootstrap),
              applying them across internships and academic projects to ship
              practical solutions. I’m looking to join a tech-driven team as a
              software engineer where I can contribute from day one, keep
              learning modern tools, and deliver meaningful impact.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>HTML, CSS & Bootstrap</p>
              <hr className="skill-bar" style={{width:"90%"}} />
            </div>
            <div className="about-skill ">
              <p>React JS</p>
              <hr className="skill-bar " style={{width:"70%"}} />
            </div>
            <div className="about-skill">
              <p>Java</p>
              <hr className="skill-bar" style={{width:"75%"}} />
            </div>
            <div className="about-skill">
              <p>Python</p>
              <hr className="skill-bar" style={{width:"65%"}} />
            </div>
            <div className="about-skill">
              <p>C++</p>
              <hr className="skill-bar" style={{width:"60%"}} />
            </div>
            <div className="about-skill">
              <p>MySQL</p>
              <hr className="skill-bar" style={{width:"70%"}} />
            </div>
          </div>
        </div>
      </div>

      <div className="row text-center mt-4 gy-4">
        <div className="col-md-4">
          <div className="about-achievement p-2">
            <h1>Various Projects</h1>
            <p>Web, Python, C++</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="about-achievement p-2">
            <h1>Multiple Certifications</h1>
            <p>Java, Python, Database</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="about-achievement p-2">
            <h1>Active Participations</h1>
            <p>Hackathons and Tech Events</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
