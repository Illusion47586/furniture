import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "phosphor-react";

import classes from "../styles/css/components/discount.module.css";

const variants = {
  hidden: { x: 320, transition: { duration: 0.5 } },
  visible: { x: 0, transition: { delay: 0.3, duration: 1 } },
};

const DiscountCard = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={classes.discount}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
        >
          <div className={classes.code_container}>
            <img
              alt="discount"
              src="https://images.unsplash.com/photo-1517705008128-361805f42e86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=679&q=80"
            />
            <div className={classes.code}>
              <p>NEW30</p>
            </div>
          </div>
          <div className={classes.discount_content}>
            <h3>Welcome sale!</h3>
            <p>Ha free h loot lo, 30% off hai aa jaao</p>
          </div>

          <div className={classes.close} onClick={() => setIsVisible(false)}>
            <X size={18} color="white" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DiscountCard;
