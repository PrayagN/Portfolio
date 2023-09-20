import React, { useState, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function ScrollButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const buttonStyle = {
    position: "fixed",
    bottom: "3rem",
    right: "3rem",
    padding: "1rem",
    borderRadius: "50%",
    backgroundColor: "#854CE6",
    color: "white",
    opacity: showButton ? 1 : 0,

    transition: "opacity 0.3s ease-in-out ",
  };
  return (
    <>
      <button style={buttonStyle} onClick={scrollToTop}>
        <KeyboardArrowUpIcon />
      </button>
    </>
  );
}

export default ScrollButton;
