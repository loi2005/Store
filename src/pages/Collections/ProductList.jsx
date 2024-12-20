import style from "./collection.module.scss";
import HandleToggle from "../../components/UI/Toggle/handleToogle";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import HandleColor from "../Home/components/Handle";
import { useLayout } from "./LayoutContext";
import IdxObject from "../../components/UI/smallItem/idxObject";
import Color from "./Color";
const cx = classNames.bind(style);
function ProductList({ currentPageProducts, HoverImage }) {
  const { layout } = useLayout();
  const { currentImage } = HandleColor();
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
                <Color product={product} />
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
