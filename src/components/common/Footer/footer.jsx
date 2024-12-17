import style from "./footer.module.scss";
import classNames from "classnames/bind";
import ScrollTop from "./backTo";
import { Foot } from "../../../services/api";
import { Link } from "react-router-dom";
import CheckEmail from "../../../pages/Home/Sub_email/checkEmail";
function Footer() {
  const cx = classNames.bind(style);
  const { foots } = Foot();
  const { email, message, clickCheckEmail, setEmail } = CheckEmail();
  return (
    <div className={cx("footer")}>
      <div className={cx("undo")}>
        <button onClick={ScrollTop}>
          Back to top
          <i class="bx bx-up-arrow-alt"></i>
        </button>
      </div>
      <div className={cx("foot-container")}>
        {/* about us */}
        <div className={cx("about")}>
          <p className={cx("name-category")}>About US</p>
          {foots.aboutUS &&
            Object.values(foots.aboutUS).map((item, index) => (
              <div>
                <p className={cx("about-logo")}>{item.logo}</p>
                <p className={cx("about-text")}>{item.text}</p>
              </div>
            ))}
        </div>
        <div>
          {/* contact */}
          <p className={cx("name-category")}> Contact US</p>
          {foots.contactUS &&
            Object.values(foots.contactUS).map((item, index) => (
              <div>
                <p>
                  <Link className={cx("link")}>
                    <i className={cx("bx bx-phone", "icon")}></i>
                    {item.phone}
                  </Link>
                </p>
                <p>
                  <Link className={cx("link")}>
                    {" "}
                    <i className={cx("bx bx-envelope", "icon")}></i>
                    {item.email}
                  </Link>
                </p>
              </div>
            ))}
        </div>
        {/* follow us */}
        <div>
          <p className={cx("name-category")}>Follow Us</p>
          <ul className={cx("list", "list-items")}>
            <li className={cx("item")}>
              <i class="bx bxl-facebook"></i>
            </li>
            <li className={cx("item")}>
              <i class="bx bxl-twitter"></i>
            </li>
            <li className={cx("item")}>
              <i class="bx bxl-instagram"></i>
            </li>
            <li className={cx("item")}>
              <i class="bx bxl-youtube"></i>
            </li>
          </ul>
        </div>
        {/* stay in touch  */}
        <div className={cx("stay")}>
          <span className={cx("name-category")}>Stay in touch </span>
          <p className={cx("stay-mess")}>
            Sign up for newsletter and get 20% sale coupon{" "}
          </p>
          <input
            className={cx("stay-input")}
            type="text"
            placeholder="Enter you email address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {message && <p>{message}</p>}
          <button className={cx("btn")} onClick={clickCheckEmail}>
            Subscribe
          </button>
        </div>
        <div>
          <p className={cx("name-category")}>Our Collections</p>
          <ul className={cx("list")}>
            {/* our collections */}

            {foots.ourCollections &&
              Object.values(foots.ourCollections).map((item, index) => (
                <li>
                  <Link className={cx("link")}>{item}</Link>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <p className={cx("name-category")}>Sale</p>
          <ul className={cx("list")}>
            {/* sale */}

            {foots.sale &&
              Object.values(foots.sale).map((item, index) => (
                <li>
                  <Link className={cx("link")}>{item}</Link>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <p className={cx("name-category")}>Our Company</p>
          <ul className={cx("list")}>
            {/* our company */}

            {foots.ourCompany &&
              Object.values(foots.ourCompany).map((item, index) => (
                <li>
                  <Link className={cx("link")}>{item}</Link>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <p className={cx("name-category")}>Other</p>
          <ul className={cx("list")}>
            {/* other */}

            {foots.other &&
              Object.values(foots.other).map((item, index) => (
                <li>
                  <Link className={cx("link")}>{item}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Footer;
