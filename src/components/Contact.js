import React, { useRef, useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Import an up arrow icon
import "../styles/Contact.css";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [showArrow, setShowArrow] = useState(false); // State to manage arrow visibility

  useEffect(() => {
    const contactSection = document.getElementById("contact");
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowArrow(entry.isIntersecting); // Show arrow only when Contact section is visible
      },
      { threshold: 0.5 }
    );

    if (contactSection) {
      observer.observe(contactSection);
    }

    return () => {
      if (contactSection) {
        observer.unobserve(contactSection);
      }
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "vijay's", // Replace with your EmailJS Service ID
        "template_vqsn8j8", // Replace with your Template ID
        form.current,
        "s-OjtRcMWpJQeY0je" // Replace with your Public Key
      )
      .then(
        (result) => {
          setPopupMessage(
            "Thank you for reaching out! I’m excited to connect and will respond to your message promptly."
          );
          setShowPopup(true);
        },
        (error) => {
          setPopupMessage(
            "Oops! Something went wrong. Please try again later."
          );
          setShowPopup(true);
        }
      );

    e.target.reset();
  };

  const scrollToHero = () => {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading">Let's Connect</h2>
      <p className="contact-subtext">
        I’d love to hear from you! Please fill out the form below, and I’ll get
        back to you shortly.
      </p>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="user_name"
            placeholder="Enter Your Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="user_email"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter Your Message"
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          <strong>Submit</strong>
        </button>
      </form>

      {/* Floating Arrow Button */}
      {showArrow && (
        <button className="scroll-to-top" onClick={scrollToHero}>
          <FaArrowUp />
        </button>
      )}

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>{popupMessage}</p>
            <button
              onClick={() => setShowPopup(false)}
              className="close-button"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
