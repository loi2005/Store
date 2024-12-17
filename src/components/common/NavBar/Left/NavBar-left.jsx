import { NavLink } from "react-router-dom";
import style from "./Barleft.module.scss";
import classNames from "classnames/bind";
import "boxicons/css/boxicons.min.css";
import BtnShop from "../ListShop/BtnShop";
import DropDownList from "../ListShop/DropdownList/DropDownList";
import ScrollList from "./scrollList";
const cx = classNames.bind(style);

function NavBarLeft() {
  const { isOpen, handleClick, closeDown } = BtnShop();
  return (
    <nav>
      <div className={cx("navbar")}>
        <ul className={cx("navbar-list")}>
          <li className={cx("navbar-items")}>
            <NavLink className={cx("link")} to="/home">
              AUDIO
            </NavLink>
          </li>
          <li className={cx("navbar-items")}>
            <button
              onClick={handleClick}
              className={cx("link", { active: isOpen })}
              to="/shop"
            >
              Shop
              <i className={cx("bx bx-chevron-down", { rotate: isOpen })}></i>
            </button>
          </li>
          <div></div>
          <li className={cx("navbar-items")}>
            <NavLink
              className={({ isActive }) =>
                isActive ? cx("link", "active") : cx("link")
              }
              to="/blackFriday"
            >
              Black Friday
            </NavLink>
          </li>
          <li className={cx("navbar-items")}>
            <NavLink
              to="/compare"
              className={({ isActive }) =>
                isActive ? cx("link", "active") : cx("link")
              }
            >
              Compare
            </NavLink>
          </li>

          <li className={cx("navbar-items")}>
            <NavLink
              className={({ isActive }) =>
                isActive ? cx("link", "active") : cx("link")
              }
              to="/aboutUs"
            >
              About Us
            </NavLink>
          </li>
          <div
            className={cx("Shop-list", { show: isOpen, navHidden: !isOpen })}
          >
            {isOpen && <DropDownList />}
            <ScrollList ToggleDown={closeDown} />
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default NavBarLeft;
