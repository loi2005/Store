import style from "./lookup.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
const cx = classNames.bind(style);

function Search() {
  const [isSearchVisible, setIsSearchVisible] = useState(true);
  const handleClose = () => {
    setIsSearchVisible(false);
  };
  return (
    isSearchVisible && (
      <div>
        <div className={cx("container")}>
          <div className={cx("heading")}>
            <select>
              <option>All Products</option>
            </select>
            <div className={cx("enter")}>
              <input
                className={cx("input")}
                placeholder="Search..."
                type="text"
              />
              <span className={cx("icon-search")}>
                <i class={cx("bx bx-search")}></i>
              </span>
            </div>
            <div className={cx("cancel")}>
              <i onClick={handleClose} className={cx("bx bx-x")}></i>
            </div>
          </div>
        </div>
        <div className={cx("overPlay")}></div>
      </div>
    )
  );
}

export default Search;
