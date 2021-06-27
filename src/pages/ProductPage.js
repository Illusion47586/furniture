import React from "react";

import ThreeModel from "../components/ThreeModel";
import products from "../data";
import styles from "../styles/css/pages/productPage.module.css";

const ProductPage = () => {
  const currentData = products["The Damn Good Sofa"];

  return (
    <section id={styles.product}>
      <div id={styles.focus}>
        <div id={styles.model}>
          <ThreeModel path={currentData.model} focus={true} />
        </div>
        <div id={styles.content}>
          <h2>The Damn Good Sofa</h2>
          <p>{currentData.description}</p>
          <h3>₹ {currentData.price}</h3>
        </div>
      </div>
      <ul>
        <li>
          <div></div>
        </li>
        <li>
          <div>{/* <ThreeModel path={oven} focus={false} /> */}</div>
        </li>
        <li>
          <div></div>
        </li>
        <li>
          <div></div>
        </li>
      </ul>
    </section>
  );
};

export default ProductPage;
