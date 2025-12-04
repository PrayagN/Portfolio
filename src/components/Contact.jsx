import React, { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/images/contact-img.svg";
// import 'animate.css';
import TrackVisibility from "react-on-screen";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
function Contact() {
  const serviceID = import.meta.env.VITE_ServiceID;
  const templateId = import.meta.env.VITE_TemplateID;
  const publicKey = import.meta.env.VITE_PublicKey;
  const [loader, setLoader] = useState(false)
  const form = useRef();
  const name = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const clearForm = () => {
    name.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  }
  const sendEmail = (e) => {
    setLoader(true)
    e.preventDefault();

    emailjs.sendForm(serviceID, templateId, form.current, publicKey)
      .then((result) => {
        toast.success("Message sent.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .catch((error) => {
        toast.error("Internal Server Error! Please try again later", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .finally(() => {
        setLoader(false);
        clearForm(); // Clear the form fields regardless of success or error
      });
  }
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={12} className="px-1">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          required
                          ref={name}
                        />
                      </Col>

                      <Col size={12} sm={12} className="px-1">
                        <input
                          type="email"
                          required
                          placeholder="Email Address"
                          name="from_email"
                          ref={emailRef}
                        />
                      </Col>
                      {/* <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col> */}
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          placeholder="Message"
                          name="message"
                          ref={messageRef}
                          required
                        ></textarea>
                        <button type="submit" className="button-33" disabled={loader}  >
                          {loader ? "Sending..." : "Send"}
                        </button>
                      </Col>

                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};


export default Contact;
