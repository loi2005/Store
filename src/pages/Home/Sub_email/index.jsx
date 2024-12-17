import btn from "../../../components/UI/btn.module.scss";
import style from "./sum_.module.scss";
import classNames from "classnames/bind";
import CheckEmail from "./checkEmail";
function Sub_email() {
  const { email, message, clickCheckEmail, setEmail } = CheckEmail();
  const cx = classNames.bind(style);
  return (
    <div className={cx("email-container")}>
      <div className={cx("email-wrapper")}>
        <div className={cx("email-content")}>
          <p className={cx("heading")}>EXCLUSIVE COMMUNITY</p>
          <p className={cx("empty")}>Newsletter</p>
          <p className={cx("title")}>
            Be the first to know about new arrivals, sales, and promotions by
            subscribing to our newsletter today!
          </p>
          <div className={cx("btn-input")}>
            <input
              className={cx("Input")}
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email address"
            />
            <button onClick={clickCheckEmail} className={btn.primary}>
              Subscribe
            </button>
            {message && <p className={cx("mess")}>{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sub_email;
