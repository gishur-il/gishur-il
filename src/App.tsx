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
import Contact from "./Contact";
import { useRef, createElement } from "react";
import Footer from "./Footer";

const App = () => {
  const contactRef = useRef(null);
  const scroll = () =>
    contactRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div>
      <Header scroll={scroll} />
      <Bini />
      <Family />
      <Commercial />
      <RealEstate />
      <Employment />
      <State />
      <Arbitration />
      <Orly />
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

const root = createRoot(document.getElementById("app"));
root.render(createElement(App));
