import * as React from "react";
import { createRoot } from "react-dom/client";
import Header from "./Header";
import Bini from "./Bini";
import Family from "./Family";

const App = () => {
  return (
    <div>
      <Header />
      <Bini />
      <Family />
    </div>
  );
};

const root = createRoot(document.getElementById("app"));
root.render(React.createElement(App));
