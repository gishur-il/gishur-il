// @ts-ignore
import telAviv from "./images/tel-aviv.jpg";
// @ts-ignore
import jerusalem from "./images/jerusalem.jpg";

export default function () {
  return (
    <section className="contact" id="contact">
      <div className="frame">
        <div className="content">
          <h3>צרו קשר</h3>

          <div className="phone">
            <a href="tel:1-800-249249">1-800-249249</a>
          </div>
          <div>
            <a href="mailto:orly@gishur-israel.com">orly@gishur-israel.com</a>
          </div>

          <div className="branches">
            <div className="branch">
              <h4>סניף ירושלים</h4>
              <div className="phone">
                <a href="tel:02-5661199">02-5661199</a>
              </div>

              <a
                href="https://www.google.ca/maps/place/%D7%91%D7%95%D7%A2%D7%96+1,+%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D%E2%80%AD/"
                target="_blank"
              >
                <img src={jerusalem} alt="סניף ירושלים" />
              </a>
              <p>רח' בועז 1</p>
              <p>מיקוד: 9350425</p>
              <p>פקס: 02-5663355</p>
            </div>

            <div className="branch">
              <h4>סניף תל אביב</h4>
              <div className="phone">
                <a href="tel:03-5661133">03-5661133</a>
              </div>

              <a
                href="https://www.google.ca/maps/place/%D7%9E%D7%92%D7%93%D7%9C+%D7%A8%D7%A1%D7%99%D7%98%D7%9C%E2%80%AD/@32.0798437,34.7957496,17z/"
                target="_blank"
              >
                <img src={telAviv} alt="סניף תל אביב" />
              </a>
              <p>דרך בגין 156 - בנין רסיטל קומה 26</p>
              <p>מיקוד: 6492108</p>
              <p>פקס: 03-5661188</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
