import style from "./sum_.module.scss";
import classNames from "classnames/bind";
function Marquee() {
  const cx = classNames.bind(style);
  return (
    <div className={cx("marquee-container")}>
      <div className={cx("marquee")}>
        <div className={cx("marquee-wrapper")}>
          <p className={cx("marquee-text")}>
            A question? Visit our contact page to send us a message
          </p>
          <p className={cx("marquee-text")}>
            A question? Visit our contact page to send us a message
          </p>
          <p className={cx("marquee-text")}>
            A question? Visit our contact page to send us a message
          </p>
          <p className={cx("marquee-text")}>
            A question? Visit our contact page to send us a message
          </p>
        </div>
      </div>
      <div className={cx("support")}>
        <ul className={cx("support-list")}>
          <li className={cx("support-item")}>
            <i className={cx("bx bx-cart", "icon")}></i>
            <span className={cx("support-heading")}>Free Shipping</span>
            <p className={cx("support-title")}>
              Free worldwide shipping on all orders of $50
            </p>
          </li>
          <li className={cx("support-item")}>
            <i className={cx("bx bx-support", "icon")}></i>
            <span className={cx("support-heading")}>Customer Support</span>
            <p className={cx("support-title")}>
              Our support team is available 24/7
            </p>
          </li>
          <li className={cx("support-item")}>
            <i className={cx("bx bx-message-alt-detail", "icon")}></i>
            <span className={cx("support-heading")}>Secure Payment</span>
            <p className={cx("support-title")}>
              All payments are processed securely
            </p>
          </li>
          <li className={cx("support-item")}>
            <i className={cx("bx bxs-package", "icon")}></i>
            <span className={cx("support-heading")}>Designed by Electro</span>
            <p className={cx("support-title")}>
              Products designed and developed by us.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Marquee;
