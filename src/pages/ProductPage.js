import React, { useState } from "react";

import ThreeModel from "../components/ThreeModel";
import products from "../data";
import styles from "../styles/css/pages/productPage.module.css";

const ProductPage = () => {
  const indexFocus = 0;

  return (
    <section id={styles.product}>
      <div id={styles.focus}>
        <div id={styles.model}>
          <ThreeModel path={products[indexFocus].model} focus={true} />
        </div>
        <div id={styles.content}>
          <h2>{products[indexFocus].name}</h2>
          <p>{products[indexFocus].description}</p>
          <h3>₹ {products[indexFocus].price}</h3>
        </div>
      </div>
      <ul>
        <li>
          <div>
            <ThreeModel path={products[indexFocus + 1].model} focus={false} />
          </div>
        </li>
        <li>
          <div>
            <ThreeModel
              path={products[indexFocus + 2].model}
              focus={false}
              zoom={5}
            />
          </div>
        </li>
        <li>
          <div>
            <ThreeModel path={products[indexFocus + 3].model} focus={false} />
          </div>
        </li>
        {/* <li>
          <div onClick={() => setIndexFocus(indexFocus + 4)}>
            <ThreeModel path={products[indexFocus + 4].model} focus={false} />
          </div>
        </li> */}
      </ul>
    </section>
  );
};

export default ProductPage;
