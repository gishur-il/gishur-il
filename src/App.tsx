import * as React from "react";
import { createRoot } from "react-dom/client";
import Header from "./Header";
import Bini from "./Bini";
import Family from "./Family";
import Commercial from "./Commercial";
import RealEstate from "./RealEstate";
import Employment from "./Labor";
import State from "./State";
import Arbitration from "./Arbitration";
import Orly from "./Orly";

const App = () => {
  return (
    <div>
      <Header />
      <Bini />
      <Family />
      <Commercial />
      <RealEstate />
      <Employment />
      <State />
      <Arbitration />
      <Orly />
    </div>
  );
};

const root = createRoot(document.getElementById("app"));
root.render(React.createElement(App));
