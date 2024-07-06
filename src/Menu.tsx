export default function ({ menuOpen, menuClick }) {
  return (
    <div id="menu" className={menuOpen ? "open" : "hidden"}>
      <a onClick={() => menuClick("bini")}> ביני בר לב, עו"ד - מגשר</a>
      <a onClick={() => menuClick("family")}>גישור בענייני משפחה</a>
      <a onClick={() => menuClick("commercial")}>גישור מסחרי</a>
      <a onClick={() => menuClick("real-estate")}>גישור במקרקעין</a>
      <a onClick={() => menuClick("labor")}>גישור בענייני עבודה</a>
      <a onClick={() => menuClick("state")}> גישור בין המדינה לפרטיים</a>
      <a onClick={() => menuClick("arbitration")}>בוררות</a>
      <a onClick={() => menuClick("orly")}>ניהול תפעולי – אורלי נאמן</a>
      <a onClick={() => menuClick("contact")}>צרו קשר</a>
    </div>
  );
}
