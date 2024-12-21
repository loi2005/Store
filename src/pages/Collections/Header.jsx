import style from "./collection.module.scss";
import classNames from "classnames/bind";
import { useLayout } from "./LayoutContext";
const cx = classNames.bind(style);

function Header({ categoryName, totalItems }) {
  const { layout, setLayout } = useLayout();
  return (
    <div className={cx("header")}>
      <div className={cx("heading")}>
        <p className={cx("caption")}>{categoryName}</p>
      </div>
      <div className={cx("content-heading")}>
        <div className={cx("amount")}>{totalItems} Products</div>
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
    </div>
  );
}
export default Header;
