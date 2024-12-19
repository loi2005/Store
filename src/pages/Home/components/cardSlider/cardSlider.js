import HoverImage from "../HoverImage";
import style from "./component-style.module.scss";
import classNames from "classnames/bind";
import Btn_Pre_Next from "../../../../components/UI/Button";
import IdxObject from "../../../../components/UI/smallItem/idxObject";
import HandleToggle from "../../../../components/UI/Toggle/handleToogle";
function CardSlider({ products }) {
  const CP = classNames.bind(style);
  const totalCards = 2;
  if (totalCards <= 0) {
    console.log("error");
  }
  const { handlePrev, handleNext, currentIndex } = Btn_Pre_Next(totalCards);
  const { selectProduct, isToggle, handleToggle } = HandleToggle();
  return (
    <div>
      {isToggle && <IdxObject product={selectProduct} />}
      <div
        className={CP("Products")}
        style={{ transform: `translateX(-${currentIndex * 720}px)` }}
      >
        {/* all */}
        {Object.values(products).map((product) => (
          <div key={product.id} className={CP("item")}>
            <HoverImage
              defaultImage={product.image}
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
              {/* model */}
              <div className={CP("model-list")}>
                {product.model && product.model.length > 0 && (
                  <div>
                    {product.model.map((item, index) => (
                      <span className={CP("model-item")} key={index}>
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className={CP("btn-left", "btn", { hidden_left: currentIndex === 0 })}
        onClick={handlePrev}
      >
        <i className="bx bx-left-arrow-alt"></i>
      </button>
      <button
        className={CP("btn-right", "btn", { hidden_right: currentIndex === 1 })}
        onClick={handleNext}
      >
        <i className="bx bx-right-arrow-alt"></i>
      </button>
    </div>
  );
}

export default CardSlider;
