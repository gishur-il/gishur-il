import * as React from "react";
import { createRoot } from "react-dom/client";
import Header from "./Header";
import Bini from "./Bini";

const App = () => {
  return (
    <div>
      <Header />
      <Bini />
    </div>
  );
};

const root = createRoot(document.getElementById("app"));
root.render(React.createElement(App));
