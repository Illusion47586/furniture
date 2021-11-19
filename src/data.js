import chair from "./assets/models/chair.glb";
import fridge from "./assets/models/fridge.glb";
import oven from "./assets/models/oven.glb";
import sofa from "./assets/models/sofa.glb";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum nunc at sapien mattis condimentum. Vestibulum ac risus eu lorem iaculis congue. Quisque vel vestibulum tellus.";

const products = [
  {
    name: "The Damn Good Sofa",
    description: lorem,
    price: 21000,
    model: fridge,
  },
  {
    name: "The Damn Good Oven",
    description: lorem,
    price: 21000,
    model: oven,
  },
  {
    name: "The Damn Good Chair",
    description: lorem,
    price: 21000,
    model: chair,
  },
  {
    name: "The Damn Good Fridge",
    description: lorem,
    price: 21000,
    model: sofa,
  },
  //   {
  //     name: "The Damn Good Sofa",
  //     description: lorem,
  //     price: 21000,
  //     model: sofa,
  //   },
];

export default products;
