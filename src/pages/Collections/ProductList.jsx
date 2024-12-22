import style from "./collection.module.scss";
import HandleToggle from "../../components/UI/Toggle/handleToogle";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import HandleColor from "../Home/components/Handle";
import { useLayout } from "./LayoutContext";
import IdxObject from "../../components/UI/smallItem/idxObject";
import colorNames from "../../components/common/ColorNames";
import { useState } from "react";
const cx = classNames.bind(style);
function ProductList({ currentPageProducts, HoverImage }) {
  const { handleColor, selectedColor, currentImage } = HandleColor();
  const [hoverColor, setHoverColor] = useState("");
  const { layout } = useLayout();
  if (!currentPageProducts) return null;
  const { handleToggle, isToggle, selectProduct } = HandleToggle();
  return (
    <div className={cx("product-list")}>
      {isToggle && <IdxObject product={selectProduct} />}
      <div
        className={cx("display-product", {
          grid_layout: layout === "grid",
          list_Layout: layout === "list",
        })}
      >
        {currentPageProducts.map((product, index) => (
          <li key={index} className={cx("item")}>
            <div className={cx("image")}>
              <Link to="#" className={cx("link")}>
                <HoverImage
                  defaultImage={currentImage[product.id] || product.image}
                  hoverImage={product.hoverImages || product.image}
                />
              </Link>
              <div className={cx("icons")}>
                <i
                  onClick={() => handleToggle(product)}
                  className={cx("bx bx-show-alt", "icon")}
                ></i>
                <i className={cx("bx bx-shopping-bag", "icon")}></i>
              </div>
            </div>
            <div className={cx("detail")}>
              <p>
                <Link className={cx("link")}>{product.title}</Link>
              </p>
              <p>{product.price}</p>
              <div className={cx("colors")}>
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
              <div className={cx("models")}>
                {product.model &&
                  product.model.map((item, idx) => (
                    <p className={cx("model")} key={idx}>
                      {item}
                    </p>
                  ))}
              </div>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
