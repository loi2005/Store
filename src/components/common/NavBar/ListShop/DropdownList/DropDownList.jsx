import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import style from "./downList.module.scss";
import classNames from "classnames/bind";
import img from "../../../../../assets/images/pexels-pavel-danilyuk-8001284(1).jpg";
import { Circles } from "react-loader-spinner";
const cx = classNames.bind(style);
function DropDownList() {
  const [goods, setGoods] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);
  // MenuList dùng làm fallback
  const MenuList = {
    Amplifiers: ["SKB2561", "SKB2565", "SKB2562"],
    Headphones: ["SN2363", "SN2333", "SN2322"],
    homeAudio: ["WJ8703", "WJ6481", "WJ3481"],
    mouse: ["SM8953", "SM5312", "SM8953"],
    microPhone: ["MR6868", "MR2938", "MR3731"],
  };
  // Fetch goods (categories) từ API
  useEffect(() => {
    const getGoods = async () => {
      try {
        const res = await fetch("/assets/categories.json");
        const data = await res.json();
        setGoods(data.categories || MenuList);
      } catch (error) {
        setGoods(MenuList);
      } finally {
        setLoading(false);
      }
    };
    getGoods();
  }, []);
  const handleClick = (categoryName) => {
    const categoryProducts = goods[categoryName];
    setIsNavigating(true);
    const timer = setTimeout(() => {
      navigate(`/collection/${categoryName}`, {
        state: { products: categoryProducts, categoryName },
      });
    }, 3000);
    return () => clearTimeout(timer);
  };

  if (loading) {
    return (
      <div className={cx("spinner")}>
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="loading-spinner"
        />
        <p>Loading goods...</p>
      </div>
    );
  }
  return (
    <div className={cx("container")}>
      {isNavigating && (
        <div className={cx("spinner")}>
          <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="navigating-spinner"
          />
          <p>Redirecting...</p>
        </div>
      )}

      <div className={cx("container-content")}>
        {Object.entries(MenuList).map(([category, items], index) => (
          <div key={index}>
            <h4>
              <NavLink
                onClick={() => handleClick(category)}
                className={cx("link")}
              >
                {category}
              </NavLink>
            </h4>
            <div>
              {items.map((item, idx) => (
                <p key={idx}>
                  <NavLink className={cx("link")}>{item}</NavLink>
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={cx("image")}>
        <img className={cx("img")} src={img} alt="" />
      </div>
    </div>
  );
}

export default DropDownList;
