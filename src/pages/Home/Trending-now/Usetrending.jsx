import { useState } from "react";
import HoverImage from "../components/HoverImage";
import classNames from "classnames/bind";
//scss
import style from "./trending.module.scss";
import btn from "../../../components/UI/btn.module.scss";
import CPstyle from "../components/cardSlider/component-style.module.scss";
// scss
/// json
import { UseFetch, Promos } from "../../../services/api";
import Handle from "../components/Handle";
import Btn_Pre_Next from "../../../components/UI/Button";
//smaal itme
import SmallItem from "../../../components/UI/smallItem";
const cx = classNames.bind(style);
const CP = classNames.bind(CPstyle);
function UseTrending() {
  const [hoverColor, setHoverColor] = useState("");
  const { products } = UseFetch("/assets/products.json");
  const { promos } = Promos("/assets/promo.json");
  const { handleColor, selectedColor, currentImage } = Handle();
  const totalCards = products.length - 9;
  const { handlePrev, handleNext, currentIndex } = Btn_Pre_Next(totalCards);
  const promo1 = promos.promo1;
  const promo2 = promos.promo2;
  //smll item
  const [selectProduct, setSelectProduct] = useState(null);
  const [isToggle, setIsToggle] = useState(false);
  const handleToggle = (product) => {
    setSelectProduct(product);
    setIsToggle((prev) => !prev);
  };
  const colorNames = {
    "#ffc0cb": "Pink",
    "#ee82ee": "Violet",
    "#add8e6": "Light blue",
    "#ffa500": "Orange",
    "#808080": "Gray",
    "#90ee90": "Light green",
    "#ff0000": "Red",
    "#008000": "Green",
    "#0000ff": "Blue",
  };

  //
  if (!promos || !promo1 || !promo2) {
    console.log("don't load....");
    return <div>Loading...</div>;
  }

  return (
    <div className={CP("content")}>
      <div className={CP("heading")}>
        {isToggle && <SmallItem product={selectProduct} />}
        <p className={CP("title")}>Special year-end deals</p>
        <span className={CP("event")}>Trending now</span>
      </div>
      <div style={{ position: "relative" }}>
        <div
          className={CP("Products")}
          style={{ transform: `translateX(-${currentIndex * 1450}px)` }}
        >
          {/* all */}
          {products.map((product) => (
            <div key={product.id} className={CP("item")}>
              <HoverImage
                defaultImage={currentImage[product.id] || product.image}
                hoverImage={product.hoverImages || product.image}
              />
              <div className={CP("icons")}>
                <i
                  onClick={() => handleToggle(product)}
                  className={CP("bx bx-show-alt", "icon")}
                ></i>
                <i className={CP("bx bx-shopping-bag ", "icon")}></i>
              </div>
              <div className={CP("details")}>
                <p className={CP("product-name")}>{product.title}</p>
                <p className={CP("product-price")}>{product.price}</p>
                <div className={cx("color-list")}>
                  {/* color */}
                  {product.colors &&
                    product.colors.map((color, index) => (
                      <div
                        className={cx("color-item", {
                          show_color:
                            selectedColor?.index === index &&
                            selectedColor?.id === product.id,
                        })}
                        key={`${product.id}-${color}-${index}`}
                        onMouseEnter={() => setHoverColor({ color, index })}
                        onMouseLeave={() => setHoverColor("")}
                        onClick={() => handleColor(index, product.id)}
                      >
                        <span
                          className={cx("color-circle")}
                          style={{ backgroundColor: color }}
                        ></span>
                        {hoverColor.color === color &&
                          hoverColor.index === index && (
                            <div className={cx("color-name")}>
                              {colorNames[color] || color}
                            </div>
                          )}
                      </div>
                    ))}
                </div>
                {/* model */}
                <div className={cx("model-list")}>
                  {product.model.map((item, index) => (
                    <span className={CP("model-item")} key={index}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          //
        </div>
        <button
          className={CP("btn-left", "btn", { hidden_left: currentIndex === 0 })}
          onClick={handlePrev}
        >
          <i className="bx bx-left-arrow-alt"></i>
        </button>
        <button
          className={CP("btn-right", "btn", {
            hidden_right: currentIndex === 2,
          })}
          onClick={handleNext}
        >
          <i className="bx bx-right-arrow-alt"></i>
        </button>
      </div>

      <button className={`${btn.primary} ${style.btn_explore}`}>
        Explore All
      </button>
      {/* animation */}
      <div className={cx("animate-container")}>
        <div className={cx("animate-marquee")}>
          <p className={cx("animate-marquee_letter")}>
            Up To 20% For Black Friday
          </p>
          <p className={cx("animate-marquee_letter")}>
            Up To 20% For Black Friday
          </p>
          <p className={cx("animate-marquee_letter")}>
            Up To 20% For Black Friday
          </p>
          <p className={cx("animate-marquee_letter")}>
            Up To 20% For Black Friday
          </p>
        </div>
      </div>
      {/* (image and video)  with text*/}

      <div className={cx("imgVideo")}>
        <div className={cx("imgText")}>
          <img className={cx("imgText-img")} src={promo1.img} />
          <div className={cx("imgText-content")}>
            <span className={cx("discount")}>{promo1.discount}</span>
            <span className={cx("option")}>{promo1.option}</span>
            <p className={cx("detail")}>{promo1.detail}</p>
            <button className={btn.primary}>Shop Now</button>
          </div>
        </div>
        <div className={cx("VideoText")}>
          <div className={cx("VideoText-content")}>
            <span className={cx("discount")}>{promo2.discount}</span>
            <span className={cx("option")}>{promo2.option}</span>
            <p className={cx("detail")}>{promo2.detail}</p>
            <button className={btn.primary}>Shop Now</button>
          </div>
          <video className={cx("video")} controls src={promo2.video}></video>
        </div>
      </div>
    </div>
  );
}

export default UseTrending;
