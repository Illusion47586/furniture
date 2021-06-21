import React from "react";

import Navbar from "./components/Navbar";
import Sofa from "./components/Sofa";

import ThreeModel from "./components/ThreeModel";

const App = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          width: 400,
          height: 400,
          backgroundColor: "#E7E7E6",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <ThreeModel>
          <Sofa />
        </ThreeModel>
      </div>
    </div>
  );
};

export default App;
