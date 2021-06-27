import React from "react";

import DiscountCard from "./components/DiscountCard";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
// import NewSofa from "./components/NewSofa";
// import Sofa from "./components/Sofa";

// import ThreeModel from "./components/ThreeModel";

const App = () => {
  return (
    // <div>
    <>
      <HomePage />
      <ProductPage />

      <Navbar />

      <DiscountCard />
    </>
    // </div>
  );
};

// <div
//   style={{
//     width: 400,
//     height: 400,
//     backgroundColor: "#E7E7E6",
//     display: "flex",
//     justifyContent: "flex-end",
//   }}
// >
//   <ThreeModel>
//     {/* <Sofa /> */}
//     <NewSofa />
//   </ThreeModel>
// </div>;

export default App;
