
import React, { useState, useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import '../../css/main.css';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const isAtBottom = scrollPosition >= document.body.offsetHeight;
      setShowButton(isAtBottom);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`scroll-to-top ${showButton ? 'show' : ''}`}
      onClick={scrollToTop}
    >
      <IoIosArrowUp />
    </button>
  );
};

export default ScrollToTop;