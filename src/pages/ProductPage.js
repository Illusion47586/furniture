import React from "react";

import fridge from "../assets/models/fridge.glb";
import sofa from "../assets/models/sofa.glb";
import ThreeModel from "../components/ThreeModel";
import styles from "../styles/css/pages/productPage.module.css";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum nunc at sapien mattis condimentum. Vestibulum ac risus eu lorem iaculis congue. Quisque vel vestibulum tellus. Quisque iaculis faucibus felis. Donec sagittis felis non orci faucibus sodales quis eu ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut dolor vel magna rutrum porta eu sit amet neque. Integer nunc ligula, facilisis vel urna eu, convallis placerat sem. Donec leo erat, scelerisque vel tortor a, vestibulum scelerisque libero.";

const ProductPage = () => {
  return (
    <section id={styles.product}>
      <div id={styles.focus}>
        <div id={styles.model}>
          <ThreeModel path={fridge} focus={true} />
        </div>
        <div id={styles.content}>
          <p>{lorem}</p>
        </div>
      </div>
      <ul>
        <li>
          <div>
            <ThreeModel path={sofa} focus={false} />
          </div>
        </li>
        <li>
          <div></div>
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
