import style from "./collection.module.scss";
import classNames from "classnames/bind";
import { useLayout } from "./LayoutContext";
import { useState } from "react";
import "boxicons/css/boxicons.min.css";
import ProductList from "./ProductList";
const cx = classNames.bind(style);
function Header({ categoryName, totalItems, currentPageProducts }) {
  const { layout, setLayout } = useLayout();
  const [currentIndex, setCurrentIndex] = useState(currentPageProducts);
  const [index, setIndex] = useState(0);
  const dropOptions = [
    "Featured",
    "Best Selling",
    "Alphabetically,A-Z",
    "Alphabetically,Z-A",
    "Price,low to high",
    "Price,high to low",
  ];
  const handleChangeOption = (index) => {
    console.log("index", index);
    const sorted = [...currentPageProducts].sort((a, b) => a.price - b.price);
    setCurrentIndex(sorted);
    setIndex(index);
  };
  return (
    <div className={cx("header")}>
      <ProductList products={currentIndex} idx={index} />
      <div className={cx("heading")}>
        <p className={cx("caption")}>{categoryName}</p>
      </div>
      <div className={cx("content-heading")}>
        <div className={cx("amount")}>{totalItems} Products</div>
        <div className={cx("options")}>
          <select
            onClick={(e) => handleChangeOption(e.target.selectedIndex)}
            className={cx("option")}
          >
            {dropOptions.map((item, index) => (
              <option className={cx("item-option")} key={index}>
                {item}
              </option>
            ))}
          </select>
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
    </div>
  );
}
export default Header;
