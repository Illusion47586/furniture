import React, { useState } from "react";

import { ArrowUp } from "phosphor-react";
import UseAnimations from "react-useanimations";
import arrowUp from "react-useanimations/lib/arrowUp";
import scrollDown from "react-useanimations/lib/scrollDown";

import useWindowDimensions from "../hooks/windowDimensions";
import hero from "../images/hero.jpg";
import hero2 from "../images/hero2.png";
import hero3 from "../images/hero3.jpg";
import hero4 from "../images/hero4.jpg";
import hero5 from "../images/hero5.jpg";
import styles from "../styles/css/pages/homePage.module.css";

const images = [hero, hero2, hero3, hero4, hero5];

const HomePage = () => {
  const { isPerfect } = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = images.length;

  const next = () => {
    const newIndex = (currentIndex + 1) % length;
    console.log(currentIndex, "->", newIndex);
    setCurrentIndex(newIndex);
  };

  const prev = () => {
    const newIndex = currentIndex === 0 ? length - 1 : currentIndex - 1;
    console.log(currentIndex, "->", newIndex);
    setCurrentIndex(newIndex);
  };

  return (
    <section id={styles.main}>
      <div id={styles.carousel}>
        {images.map((image, index) => (
          <img
            src={image}
            alt="hero"
            id={`hero${index}`}
            active={currentIndex === index ? "active" : "inactive"}
          />
        ))}
        <div id={styles.overlay}></div>
      </div>

      {!isPerfect && (
        <div className={styles.carouselControl} id={styles.prev} onClick={prev}>
          <h4>Previous</h4>
          <ArrowUp weight="bold" color="white" />
        </div>
      )}

      {!isPerfect && (
        <div className={styles.carouselControl} id={styles.next} onClick={next}>
          <h4>Next</h4>
          <UseAnimations
            animation={arrowUp}
            size={20}
            autoPlay
            strokeColor="white"
            speed={2}
          />
        </div>
      )}

      <div id={styles.title}>
        <h1>Your OneStop shop</h1>
        <p>Everything from furniture to home appliances, all in one place.</p>

        <button id={styles.explore}>Explore</button>
      </div>
    </section>
  );
};

export default HomePage;
