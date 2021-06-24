import React, { useState, useEffect, Fragment } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { MagnifyingGlass, DotsThreeOutlineVertical, X } from "phosphor-react";
import useWindowDimensions from "../hooks/windowDimensions";
import UseAnimations from "react-useanimations";
import menu from "react-useanimations/lib/menu4";

import classes from "../styles/css/components/navbar.module.css";

const Navbar = () => {
  const { width } = useWindowDimensions();
  const [isExpanded, setIsExpanded] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsExpanded(!(width <= 768));
    return () => {};
  }, [width]);

  return (
    <Fragment>
      <nav data-expanded={`${isExpanded}`}>
        <h3 className={classes.no_margin}>Pineapple</h3>
        {isExpanded && (
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
        )}
        {isExpanded ? (
          <MagnifyingGlass size={25} />
        ) : (
          <UseAnimations
            animation={menu}
            size={36}
            reverse={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            strokeColor="white"
            speed={2}
          />
        )}
      </nav>
      <AnimatePresence initial={false}>
        {!isExpanded && isOpen && (
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
      </AnimatePresence>
    </Fragment>
  );
};

export default Navbar;
