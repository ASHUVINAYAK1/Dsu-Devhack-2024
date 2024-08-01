import React, { useState, useEffect } from "react";
import "../styles/backtotop.css";
import { IoIosArrowUp } from "react-icons/io";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div 
      className={`backToTop ${isVisible ? 'show' : ''}` } 
      onClick={scrollToTop}

    >
      <IoIosArrowUp className="arrow-icon" />
    </div>
  );
};

export default BackToTop;
