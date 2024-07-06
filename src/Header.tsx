import { useState } from "react";
// @ts-ignore
import logo from "./images/gishur-logo-brighter.png";
import Menu from "./Menu";

export default function ({ scroll }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={menuOpen ? "menu-open" : ""}>
      <div className="frame">
        <div className="horizontal top">
          <img src={logo} alt="גישור ישראל" />
          <h1>גישור ישראל</h1>

          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className={menuOpen ? "hamburger open" : "hamburger"}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <Menu menuOpen={menuOpen} />

        <div className="content">
          <h2>נכנסים במחלוקות מסיימים בהבנות</h2>
          <button onClick={() => scroll()}>צרו קשר</button>
        </div>
      </div>
    </header>
  );
}
