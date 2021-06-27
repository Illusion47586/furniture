import React from "react";

import styles from "../styles/css/components/loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.lds_grid}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
