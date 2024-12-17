import style from "./style.module.scss";
import classNames from "classnames/bind";
function Item2() {
  const cx = classNames.bind(style);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("heading")}>
        <p className={cx("heading-first")}>Hear the Difference</p>
        <p className={cx("heading-second")}>
          Our new earbuds: Empowering Mobility
        </p>
        <p className={cx("heading-third")}>
          Crafted with durable shatter-resistant sapphire glass and Kevlar®
          fiber
        </p>
      </div>
      <div className={cx("container")}>
        <img
          className={cx("img")}
          src="../../../assets/images/pexels-pavel-danilyuk-8038326.jpg"
        ></img>
        <i className={cx("bx bxs-bolt", "icon", "icon-bolt")}></i>
        <div className={cx("recharge", "content")}>
          <div className={cx("title")}>
            <i className={cx("bx bxs-bolt", "sub-icon")}></i>
            <p className={cx("name")}>Fast Wireless Charging</p>
            <p className={cx("body")}>
              SN7324 incorporates Power Delivery charging technology, along with
              high-capacity batteries and efficient charging circuitry.
            </p>
          </div>
        </div>
        <i className={cx("bx bx-check-shield", "icon", "icon-shield")}></i>
        <div className={cx("protection", "content")}>
          <div className={cx("title")}>
            <i className={cx("bx bx-check-shield", "sub-icon")}></i>
            <p className={cx("name")}>Durable Sapphire Glass</p>
            <p className={cx("body")}>
              Built with Sapphire glass, engineered to resist shattering,
              provides unparalleled durability for long-lasting use.
            </p>
          </div>
        </div>
        <i className={cx("bx bx-bluetooth", "icon", "icon-bluetooth")}></i>
        <div className={cx("bluetooth", "content")}>
          <div className={cx("title")}>
            <i className={cx("bx bx-bluetooth", "sub-icon")}></i>
            <p className={cx("name")}>Advanced Antenna Technology</p>
            <p className={cx("body")}>
              Latest antenna technology, high-quality Bluetooth chipsets, and
              reliable signal amplifiers ensure a seamless and drop-free
              wireless experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item2;
