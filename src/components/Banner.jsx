import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/images/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";
import me from '../assets/images/me.jfif';
import hero from '../assets/images/Prayag.jpeg';
import { resume } from "../data/constants";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Full Stack Developer",
    "FastAPI & Python Engineer",
    "React & GenAI Architect"
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>Prayag N — Full Stack Developer &amp; Systems Engineer</h1>
                  <div
                    className="banner-subheading"
                    style={{ fontSize: "32px", fontWeight: 700, margin: "16px 0 20px" }}
                    aria-hidden="true"
                  >
                    Hi! I'm{" "}
                    <span className="txt-rotate">
                      <span className="wrap">{text || "Full Stack Developer"}</span>
                    </span>
                  </div>
                  <p>
                   Full Stack &amp; Systems Engineer with 3 years of experience specializing in the Python (FastAPI) and React (TypeScript) ecosystems to architect secure, high-performance generative AI automation pipelines. Proven track record in building modular, node-based visual interfaces, scalable microservices, and enterprise RAG workflows for 65,000+ active users. Strong background in database optimization, system security, and deploying performant API contracts in fast-paced startup environments.
                  </p>
                  <div
                    className="banner-cta-group"
                    style={{
                      display: "flex",
                      gap: "16px",
                      marginTop: "28px",
                      flexWrap: "wrap",
                      alignItems: "center",
                    }}
                  >
                    <a
                      href={resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                      aria-label="View Prayag N Resume"
                    >
                      <button
                        className="tagline"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "10px",
                          cursor: "pointer",
                          marginBottom: 0,
                        }}
                      >
                        View Resume <ArrowRightCircle size={22} />
                      </button>
                    </a>
                    <a
                      href="#connect"
                      style={{ textDecoration: "none" }}
                      aria-label="Contact Prayag N"
                    >
                      <button
                        className="navbar-connect"
                        style={{
                          padding: "10px 24px",
                          fontSize: "18px",
                          fontWeight: 600,
                          borderRadius: "8px",
                          color: "#fff",
                        }}
                      >
                        Let’s Talk
                      </button>
                    </a>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={4}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  style={{ display: 'flex', justifyContent: 'center' }}
                >
                  <img
                    src={hero}
                    alt="Prayag N - Full Stack &amp; AI Systems Engineer"
                    width="300"
                    height="300"
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
