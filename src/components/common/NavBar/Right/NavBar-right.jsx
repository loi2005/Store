import { Link } from "react-router-dom";
import style from "./Barright.module.scss";
import classNames from "classnames/bind";
import LookUp from "./Lookup/Lookup";
import Search from "./Lookup/Look";
import { Country } from "../../../../services/api";
const cx = classNames.bind(style);
function NavBarRight() {
  const { isLookUp, handleSearch } = LookUp(false);
  const { countriesCurrencies } = Country("assets/countries.json");
  return (
    <nav>
      <div className={cx("navbar")}>
        {isLookUp && <Search />}

        <ul className={cx("navbar-list")}>
          <li className={cx("navbar-items")}>
            <Link className={cx("link")}>
              <i onClick={handleSearch} class="bx bx-search"></i>
            </Link>
          </li>

          <li className={cx("navbar-items")}>
            <select className={cx("link", "option")}>
              {countriesCurrencies.map((countriesCurrency, index) => (
                <option key={index}>{countriesCurrency.name}</option>
              ))}
            </select>
          </li>

          <li className={cx("navbar-items")}>
            <Link className={cx("link")} to="/login">
              <i class="bx bx-user"></i>
            </Link>
          </li>
          <li className={cx("navbar-items")}>
            <Link className={cx("link")} to="/cart">
              <i class="bx bx-cart"></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBarRight;
