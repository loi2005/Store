import style from "./collection.module.scss";
import { useLocation } from "react-router-dom";
import classNames from "classnames/bind";
import { TailSpin } from "react-loader-spinner";
import HoverImage from "../Home/components/HoverImage";
import { Link } from "react-router-dom";
import HandleToggle from "../../components/UI/Toggle/handleToogle";
import IdxObject from "../../components/UI/smallItem/idxObject";
function Collection() {
  const location = useLocation();
  const { selectProduct, isToggle, handleToggle, setLayout, layout } =
    HandleToggle();
  const { products, categoryName } = location.state || {};
  const cx = classNames.bind(style);
  const amount = () => {
    if (products && products.length > 0) return products.length;
  };
  return (
    <div className={cx("container")}>
      {isToggle && <IdxObject product={selectProduct} />}
      <div className={cx("heading")}>
        <p className={cx("caption")}>{categoryName}</p>
      </div>
      <div className={cx("content")}>
        <div className={cx("content-heading")}>
          <div className={cx("amount")}>{amount()} Products</div>
          <div className={cx("option")}>
            <label>default</label>
          </div>
          <div className={cx("chosen")}>
            <i
              onClick={() => setLayout("list")}
              className={cx("bx bx-list-ul", "icon_option", {
                active: layout === "list",
              })}
            ></i>
            <i
              onClick={() => setLayout("grid")}
              className={cx("bx bxs-dashboard", "icon_option", {
                active: layout === "grid",
              })}
            ></i>
          </div>
        </div>
        {products && products.length > 0 ? (
          <div className={cx("container_products")}>
            <div className={cx("filter")}>
              <p>sdfsdf</p>
            </div>
            <ul className={cx("listItem")}>
              <div
                className={cx("display-product", {
                  grid_layout: layout === "grid",
                  list_Layout: layout === "list",
                })}
              >
                {products.map((product, index) => (
                  <li key={index} className={cx("item")}>
                    <div className={cx("image")}>
                      <Link className={cx("link")}>
                        <HoverImage
                          defaultImage={product.image}
                          hoverImage={product.hoverImages || product.image}
                        />
                      </Link>
                      <div className={cx("icons")}>
                        <i
                          onClick={() => handleToggle(product)}
                          className={cx("bx bx-show-alt", "icon")}
                        ></i>
                        <i className={cx("bx bx-shopping-bag ", "icon")}></i>
                      </div>
                    </div>
                    <div className={cx("detail")}>
                      <p>
                        <Link className={cx("link")}>{product.title}</Link>
                      </p>
                      <p>{product.price}</p>
                      <div className={cx("models")}>
                        {product.model &&
                          product.model.map((item, index) => (
                            <p className={cx("model")} key={index}>
                              {item}
                            </p>
                          ))}
                      </div>
                      <p>{product.colors}</p>
                    </div>
                  </li>
                ))}
              </div>
            </ul>
          </div>
        ) : (
          <div className={cx("overlay")}>
            <div className={cx("spinner")}>
              <TailSpin
                height="80"
                width="80"
                color="#fff"
                ariaLabel="loading-spinner"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Collection;
