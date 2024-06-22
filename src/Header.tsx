import * as React from "react";
// @ts-ignore
import logo from "./gishur-logo-brighter.png";

export default function () {
  return (
    <header>
      <div className="frame">
        <div className="horizontal">
          <img src={logo} alt="גישור ישראל" />
          <h1>גישור ישראל</h1>
        </div>

        <div className="content">
          <h2>נכנסים במחלוקות מסיימים בהבנות</h2>
          <button>צרו קשר</button>
        </div>
      </div>
    </header>
  );
}
