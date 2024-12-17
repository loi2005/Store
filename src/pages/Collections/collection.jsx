import style from "./collection.module.scss";
import { useLocation } from "react-router-dom";
import classNames from "classnames/bind";
import { ThreeDots, Circles, Bars, TailSpin } from "react-loader-spinner";
function Collection() {
  const location = useLocation();
  const { products, categoryName } = location.state || {}; // Use object default instead of an array
  const cx = classNames.bind(style);
  return (
    <div className={cx("container")}>
      <div className={cx("heading")}>
        <p className={cx("caption")}>{categoryName}</p>
      </div>
      <div className={cx("content")}>
        <div>filter</div>
        {products && products.length > 0 ? (
          <div className={cx("container_products")}>
            <div></div>
            <div>
              <ul>
                {products.map((product, index) => (
                  <li key={index}>
                    <div className={cx("image")}>
                      <img
                        className={cx("img")}
                        src={product.image}
                        alt={product.title}
                      />
                    </div>
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                    <p>{product.model}</p>
                  </li> // Assuming product is a string like "SKB2561"
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className={cx("overlay")}>
            <div className={cx("spinner")}>
              <Circles
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
