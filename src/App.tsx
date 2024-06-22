import * as React from "react";
import { createRoot } from "react-dom/client";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

const root = createRoot(document.getElementById("app"));
root.render(React.createElement(App));
