import CardSlider from "../components/cardSlider/cardSlider";
import { Categories } from "../../../services/api";
import { useState } from "react";
import classNames from "classnames/bind";
import CP from "../components/cardSlider/component-style.module.scss";
import style from "./collection.module.scss";
import btn from "../../../components/UI/btn.module.scss";
function OurCollection() {
  const [currentCategory, setCurrentCategory] = useState("mouse");
  const { listProducts } = Categories();
  const cx = classNames.bind(style);
  const categoryProducts = listProducts[currentCategory] || [];
  return (
    <div>
      <div className={cx("container")}>
        <div className={CP.heading}>
          <span className={CP.title}>Our Collections</span>
          <p className={CP.event}>Find What You Need</p>
        </div>
        <div className={cx("btn-group")}>
          <button
            className={cx("btn", { btn_active: currentCategory === "mouse" })}
            onClick={() => setCurrentCategory("mouse")}
          >
            Mouse
          </button>
          <button
            className={cx("btn", {
              btn_active: currentCategory === "microPhone",
            })}
            onClick={() => setCurrentCategory("microPhone")}
          >
            MicroPhone
          </button>
          <button
            className={cx("btn", {
              btn_active: currentCategory === "homeAudio",
            })}
            onClick={() => setCurrentCategory("homeAudio")}
          >
            Home Audio
          </button>
        </div>
        <div className={cx("cards")}>
          <CardSlider products={categoryProducts} />
        </div>
      </div>
      <button style={{ margin: "100px 0 " }} className={btn.primary}>
        Shop Now
      </button>
      <div className={cx("collapsible")}>
        <img
          className={cx("collapsible-img")}
          src="../../../assets/images/8.png"
          alt=""
        />
        <div className={cx("collapsible-content")}>
          <p className={cx("collapsible-content-heading")}>
            Experience an immersive sound
          </p>
          <p className={cx("collapsible-content-title")}>
            Immerse yourself in a world of captivating sound Immerse yourself in
            a world of captivating sound with our immersive audio experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurCollection;
