import classNames from "classnames/bind";
import style from "./collection.module.scss";
import colorNames from "../../components/common/ColorNames";
import ProductList from "./ProductList";
import { useState } from "react";
const cx = classNames.bind(style);
function Filter({ Products }) {
  const [showColor, setShowColor] = useState(true);
  const [selectedColor, setSelectedColor] = useState([]);
  const handleColor = () => {
    setShowColor((prev) => !prev);
  };
  const uniqueColors = [
    ...new Set(
      Products.reduce((acc, product) => {
        if (product.colors) {
          acc.push(...product.colors);
        }
        return acc;
      }, [])
    ),
  ];
  //function
  const selectProductColor = (color) => {
    setSelectedColor(color);
  };
  return (
    <div>
      <ProductList color={selectedColor} />
      {uniqueColors.length > 0 && (
        <div className={cx("sections_color")}>
          <div className={cx("heading_color")}>
            Color
            <i
              onClick={handleColor}
              className={cx("bx bx-chevron-down", "icon_color", {
                hidden: !showColor,
              })}
            ></i>
          </div>
          {showColor && (
            <div className={cx("subFilter")}>
              {uniqueColors.map((color, index) => (
                <div
                  key={index}
                  onClick={() => selectProductColor(color)}
                  style={{
                    backgroundColor: color,
                  }}
                  className={cx("filter_color")}
                >
                  <div className={cx("nameColor")}>
                    {colorNames[color] || color}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Filter;
