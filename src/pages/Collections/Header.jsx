import style from "./collection.module.scss";
import classNames from "classnames/bind";
import { useLayout } from "./LayoutContext";
import { useState } from "react";
import "boxicons/css/boxicons.min.css";
const cx = classNames.bind(style);

function Header({ categoryName, totalItems }) {
  const { layout, setLayout } = useLayout();
  const [isDropList, setIsDropList] = useState(false);
  const dropOptions = [
    "Featured",
    "Best Selling",
    "Alphabetically,A-Z",
    "Alphabetically,Z-A",
    "Price,low to high",
    "Price,high to low",
  ];
  const handleDownList = () => {
    setIsDropList((prev) => !prev);
  };
  const handleeeee = (index) => {
    console.log(index);
  };
  return (
    <div className={cx("header")}>
      <div className={cx("heading")}>
        <p className={cx("caption")}>{categoryName}</p>
      </div>
      <div className={cx("content-heading")}>
        <div className={cx("amount")}>{totalItems} Products</div>
        <div className={cx("option")}>
          <div onClick={handleDownList} className={cx("list-option")}>
            Select option
            <i
              className={cx("bx bx-chevron-down", "icon_drop", {
                active: isDropList,
              })}
            ></i>
          </div>
          <div className={cx("select-items")}>
            {isDropList &&
              dropOptions.map((option, index) => (
                <div
                  onClick={() => handleeeee(index)}
                  className={cx("itemOfList")}
                  key={index}
                >
                  {option}
                </div>
              ))}
          </div>
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
