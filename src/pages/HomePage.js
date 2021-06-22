import React, { useState } from "react";

import { List, ArrowUp, Circle } from "phosphor-react";
import UseAnimations from "react-useanimations";
import Navbar from "../components/Navbar";
import menu from "react-useanimations/lib/menu4";
import arrowUp from "react-useanimations/lib/arrowUp";
import scrollDown from "react-useanimations/lib/scrollDown";
import DiscountCard from "../components/DiscountCard";

import styles from "../styles/css/pages/homePage.module.css";

const HomePage = () => {
  return (
    <section id={styles.main}>
      <Navbar />

      <div className={styles.carouselControl} id={styles.prev}>
        <h4>Previous</h4>
        <ArrowUp weight="bold" color="white" />
      </div>

      <div className={styles.carouselControl} id={styles.next}>
        <h4>Next</h4>
        <UseAnimations
          animation={arrowUp}
          size={20}
          autoPlay
          strokeColor="white"
          speed={2}
        />
      </div>

      <div id={styles.title}>
        <h1>Your OneStop shop</h1>
        <p>Everything from furniture to home appliances, all in one place.</p>

        <button id={styles.explore}>Explore</button>
      </div>

      <div className={styles.discount}>
        <DiscountCard />
      </div>
    </section>
  );
};

export default HomePage;
