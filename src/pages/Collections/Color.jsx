import { useState } from "react";
import HandleColor from "../Home/components/Handle";
import style from "./collection.module.scss";
import colorNames from "../../components/common/ColorNames";
import classNames from "classnames/bind";

const cx = classNames.bind(style);
function Colors({ product }) {
  const [hoverColor, setHoverColor] = useState("");
  const { handleColor, selectedColor } = HandleColor();
  return (
    <div>
      <div className={cx("color-list")}>
        {/* color */}
        {product.colors &&
          product.colors.map((color, index) => (
            <div
              className={cx("color-item", {
                show_color:
                  selectedColor?.index === index &&
                  selectedColor?.id === product.id,
              })}
              key={`${product.id}-${color}-${index}`}
              onMouseEnter={() => setHoverColor({ color, index })}
              onMouseLeave={() => setHoverColor("")}
              onClick={() => handleColor(index, product.id)}
            >
              <span
                className={cx("color-circle")}
                style={{ backgroundColor: color }}
              ></span>
              {hoverColor.color === color && hoverColor.index === index && (
                <div className={cx("color-name")}>
                  {colorNames[color] || color}
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Colors;
