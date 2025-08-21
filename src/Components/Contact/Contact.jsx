import React from "react";
import "./Contact.css";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "bcf205d3-fb7f-4a6f-b5cb-ce77fa241587");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("email sent successfully");
    }
  };

  return (
    <div id="contact" className="contact container text-center">
      <div className="contact-title mb-5">
        <h1>Get in Touch</h1>
      </div>
      <div className="row g-5 align-items-start">
        <div className="col-12 col-lg-5 text-start contact-left">
          <h1>Contact Information</h1>
          <div className="contact-details">
            <div className="contact-detail">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/carbon-copy/64/ff0000/gmail-new.png"
                alt="gmail"
              />
              <p>adityakumar2004jsr@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/dotty/64/ff0000/phone.png"
                alt="phone"
              />
              <p>+91 6206905269</p>
            </div>
            <div className="contact-detail">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/pastel-glyph/64/ff0000/marker--v2.png"
                alt="location"
              />
              <p>Bhubaneshwar, Odisha</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-7">
          <form onSubmit={onSubmit} className="contact-right text-start">
            <label>Your Name</label>
            <input
              required
              type="text"
              placeholder="Enter your name"
              name="name"
            />
            <label>Your Email</label>
            <input
              required
              type="email"
              placeholder="Enter your Email"
              name="email"
            />
            <label>Write your message here</label>
            <textarea
              required
              name="message"
              rows="6"
              placeholder="Enter your message"
            ></textarea>
            <button type="submit" className="contact-submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
