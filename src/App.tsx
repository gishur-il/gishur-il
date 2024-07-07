import { render } from "preact";
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
import Footer from "./Footer";

export default function () {
  const scroll = (id: string) => {
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

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
      <Contact />
      <Footer />
    </div>
  );
}
