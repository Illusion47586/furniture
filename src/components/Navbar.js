import React, { useState, useEffect, Fragment } from "react";

import {
  motion,
  AnimatePresence,
  useViewportScroll,
  AnimateSharedLayout,
} from "framer-motion";
import { MagnifyingGlass, DotsThreeOutlineVertical, X } from "phosphor-react";
import UseAnimations from "react-useanimations";
import menu from "react-useanimations/lib/menu4";

import useWindowDimensions from "../hooks/windowDimensions";
import classes from "../styles/css/components/navbar.module.css";

const Navbar = () => {
  const { isPerfect } = useWindowDimensions();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollYProgress } = useViewportScroll();
  scrollYProgress.onChange(() => setIsScrolled(scrollYProgress.get() > 0.01));

  return (
    <Fragment>
      <motion.nav
        data-expanded={`${!isPerfect}`}
        data-scrolled={`${isScrolled}`}
        layout
        transition={{ duration: 0.3 }}
        onClick={isScrolled || isPerfect ? () => setIsOpen(!isOpen) : () => {}}
      >
        {!isScrolled && !isPerfect && (
          <>
            <h3 className={classes.no_margin}>Pineapple</h3>
            <ul className={classes.no_margin}>
              <li>
                <a href="/">About us</a>
              </li>
              <li>
                <a href="/">Projects</a>
              </li>
              <li>
                <a href="/">Services</a>
              </li>
              <li>
                <a href="/">Shop</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </>
        )}
        {!isPerfect && !isScrolled ? (
          <MagnifyingGlass size={25} />
        ) : (
          <UseAnimations
            animation={menu}
            size={40}
            reverse={isOpen}
            strokeColor="white"
            speed={2}
          />
        )}
      </motion.nav>

      {/* menu for mobile devices */}
      {isPerfect && isOpen && (
        <motion.div
          className={classes.menu}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          <ul className={classes.no_margin}>
            <motion.li
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
            >
              <a href="/">About us</a>
            </motion.li>
            <motion.li
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
            >
              <a href="/">Projects</a>
            </motion.li>
            <motion.li
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
            >
              <a href="/">Services</a>
            </motion.li>
            <motion.li
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
            >
              <a href="/">Shop</a>
            </motion.li>
            <motion.li
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
            >
              <a href="/">Contact</a>
            </motion.li>
          </ul>
        </motion.div>
      )}
    </Fragment>
  );
};

export default Navbar;
