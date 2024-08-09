import React, { useEffect, useRef ,useState} from 'react';
import { gsap } from 'gsap';
import '../assets/styles/Loader.css';
import { useNavigate } from 'react-router-dom';
import img from "../assets/images/highlightingimage.jpeg";

const Loader = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const subTextRef = useRef(null);
  const dotsRef = useRef(null);
  const [dots, setDots] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Animation sequence
    const tl = gsap.timeline();

    tl.fromTo(
      imageRef.current,
      { opacity: 0, scale: 1.2 },
      { opacity: 1, scale: 1, duration: 1.5, ease: 'power2.out' }
    )
      .fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
        '-=0.5' // Overlapping with image animation
      )
      .fromTo(
        subTextRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
        '-=0.5' // Delayed appearance of subtext
      );

    // Animate the dots
    const dotsInterval = setInterval(() => {
      setDots(prevDots => (prevDots.length < 3 ? prevDots + '.' : ''));
    }, 500); // Change dots every 0.5 seconds

    // Redirect after animation and dots
    const redirectTimeout = setTimeout(() => {
      clearInterval(dotsInterval);
      navigate('/home');
    }, 5000); // Redirect after 5 seconds

    return () => {
      clearInterval(dotsInterval);
      clearTimeout(redirectTimeout);
    };
  }, [navigate]);

  return (
    <div className="loader-container">
      <img 
        src={img} 
        alt="John Wick" 
        className="loader-image" 
        ref={imageRef}
      />
      <div className="loader-overlay">
        <h1 className="loader-text" ref={textRef}>Consider this a professional courtesy.</h1>
        <p className="loader-subtext" ref={subTextRef}>
          Loading your look<span ref={dotsRef}>{dots}</span>
        </p>
      </div>
    </div>
  );
};

export default Loader;