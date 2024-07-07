export default function ({
  menuOpen,
  menuClick,
}: {
  menuOpen: boolean;
  menuClick: Function;
}) {
  return (
    <div id="menu" className={menuOpen ? "open" : "hidden"}>
      <a onClick={(e) => menuClick(e, "bini")} href="#bini">
        ביני בר לב, עו"ד - מגשר
      </a>
      <a onClick={(e) => menuClick(e, "family")} href="#family">
        גישור בענייני משפחה
      </a>
      <a onClick={(e) => menuClick(e, "commercial")} href="#commercial">
        גישור מסחרי
      </a>
      <a onClick={(e) => menuClick(e, "real-estate")} href="#real-estate">
        גישור במקרקעין
      </a>
      <a onClick={(e) => menuClick(e, "labor")} href="#labor">
        גישור בענייני עבודה
      </a>
      <a onClick={(e) => menuClick(e, "state")} href="#state">
        {" "}
        גישור בין המדינה לפרטיים
      </a>
      <a onClick={(e) => menuClick(e, "arbitration")} href="#arbitration">
        בוררות
      </a>
      <a onClick={(e) => menuClick(e, "orly")} href="#orly">
        ניהול תפעולי – אורלי נאמן
      </a>
      <a onClick={(e) => menuClick(e, "contact")} href="#contact">
        צרו קשר
      </a>
    </div>
  );
}
