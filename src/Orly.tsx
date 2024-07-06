// @ts-ignore
import orly from "./images/orly.jpg";

export default function () {
  return (
    <section className="orly" id="orly">
      <div className="frame">
        <div className="horizontal">
          <div className="content">
            <h3>ניהול תפעולי – אורלי נאמן</h3>
            <p>
              ניהול התפעול של גישור ישראל על כל המורכבות שלו מובל החל מראשית
              2007 על ידי אורלי נאמן שמסירותה ונאמנותה לרבבות בהם טיפלה ומטפלת
              הפכו לשם דבר. החל ממסירת מידע לגבי חלופות הגישור והבוררות השונות,
              דרך תיאומי הפגישות וכלה בפתרון מאות שאלות מגוונות שאת חלקן פוגשים
              רבים מהמגושרים במהלך הדרך. מובטח לכם טיפול מקצועי ומסור. מוזמנים
              להתקשר.
            </p>
          </div>

          <img src={orly} alt={"אורלי נאמן"} />
        </div>
      </div>
    </section>
  );
}
