export default function ({ menuOpen }) {
  return (
    <div id="menu" className={menuOpen ? "open" : "hidden"}>
      <a> ביני בר לב, עו"ד - מגשר</a>
      <a>גישור בענייני משפחה</a>
      <a>גישור מסחרי</a>
      <a>גישור במקרקעין</a>
      <a>גישור בענייני עבודה </a>
      <a> גישור בין המדינה לפרטיים</a>
      <a>בוררות</a>
      <a>ניהול תפעולי – אורלי נאמן</a>
      <a>צרו קשר</a>
    </div>
  );
}
