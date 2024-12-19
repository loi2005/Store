import { useState } from "react";
import style from "./small.module.scss";
import classNames from "classnames/bind";
import Btn_Pre_Next from "../Button";
import HandleColor from "../../../pages/Home/components/Handle";
function IdxObject({ product }) {
  const { selectedColor, currentIndexImg, scrollImage } = HandleColor();
  const [amount, setAmount] = useState(1);
  const [showItem, setShowItem] = useState(true);
  const cx = classNames.bind(style);
  const totalCards = product.totalProduct.length;
  const { handlePrev, handleNext, currentIndex } = Btn_Pre_Next(totalCards);
  const handlePlusAmount = () => {
    setAmount((prev) => prev + 1);
  };
  const handleExclusionAmount = () => {
    if (amount <= 1) {
      return;
    }
    setAmount((prev) => prev - 1);
  };
  const handleShow = () => {
    setShowItem(false);
  };
  /// exchange object to array
  if (!product) return null;

  return (
    showItem && (
      <div className={cx("overlay")}>
        <div className={cx("container")}>
          {/* image */}
          <div className={cx("container-image")}>
            <div
              style={{
                transform: `translateX(-${currentIndex * 730}px)`,
              }}
              className={cx("box-img")}
            >
              <div
                className={cx("sub-box-img")}
                style={{ transform: `translateX(-${currentIndexImg * 730}px)` }}
              >
                {product.totalProduct &&
                  Object.values(product.totalProduct).map((item, index) => (
                    <img key={index} className={cx("img")} src={item} />
                  ))}
              </div>
            </div>
            <div
              className={cx("btn-left", "btn-prev", {
                hidden: currentIndex === 0,
              })}
            >
              <i onClick={handlePrev} className={cx("bx bx-chevron-left")}></i>
            </div>
            <div
              className={cx("btn-right", "btn-next", {
                hiddenr: currentIndex === product.totalProduct.length - 1,
              })}
            >
              <i onClick={handleNext} class="bx bx-chevron-right"></i>
            </div>
          </div>
          {/* exit */}
          {/* content */}
          <div className={cx("container-content")}>
            <div className={cx("box-icon")}>
              <span className={cx("icon")}>
                <i onClick={handleShow} className={cx("bx bx-x")}></i>
              </span>
            </div>
            <p className={cx("content-title")}>{product.title}</p>
            <div className={cx("item")}>
              {product.model &&
                Object.values(product.model).map((item) => (
                  <p className={cx("content-item")}>{item}</p>
                ))}
            </div>
            <p>{product.price}</p>
            {/* color */}
            <div className={cx("circle-item")}>
              {product.colors &&
                product.colors.map((color, index) => (
                  <div
                    className={cx("Color", {
                      show_color:
                        selectedColor?.index === index &&
                        selectedColor?.id === product.id,
                    })}
                    key={`${product.id}-${color}-${index}`}
                    onClick={() => scrollImage(index, product.id)}
                  >
                    <p
                      className={cx("color-item")}
                      style={{
                        backgroundColor: color,
                      }}
                    ></p>
                  </div>
                ))}
            </div>
            {/* btn */}
            <div className={cx("box-btn")}>
              <div className={cx("btn")}>
                <button
                  className={cx("btn-down")}
                  onClick={handleExclusionAmount}
                >
                  -
                </button>
                <p className={cx("amount")}>{amount}</p>
                <button className={cx("btn-up")} onClick={handlePlusAmount}>
                  +
                </button>
              </div>
              <button className={cx("card")}>Add to card </button>
            </div>
            <div className={cx("btn-buy")}>
              <button className={cx("bought")}>Buy it now</button>
            </div>
            {/* description */}
            <div>
              <p className={cx("des")}>{product.descriptionProduct}</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
export default IdxObject;
