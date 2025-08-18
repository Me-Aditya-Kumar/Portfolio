import React from "react";
import "./Certifications.css";
import Certifications_Data from "../../assets/certifications_data.js";

function Certifications() {
  return (
    <div id="certifications" className="container py-5">
      <div className="text-center mb-5">
        <h1 className="cert-h1">Certifications</h1>
      </div>

      <div className="row g-4">
        {Certifications_Data.map((certificate, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <a
              href={certificate.c_link}
              target="_blank"
              className="cert-card position-relative d-block"
            >
              <div className="cert-img-container rounded">
                <img
                  src={certificate.c_img}
                  alt={certificate.c_name}
                  className="img-fluid cert-img"
                />
              </div>
              <div className="cert-overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-3 rounded">
                <h5 className="text-white fw-bold">{certificate.c_name}</h5>
                <p className="text-white mb-0">{certificate.c_desc}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
