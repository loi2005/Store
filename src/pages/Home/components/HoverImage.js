import { useState } from "react";
import PropTypes from "prop-types"; //PropTypes là một công cụ kiểm tra kiểu dữ liệu (type-checking) được tích hợp trong React.

function HoverImage({ defaultImage, hoverImage }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <img
      src={isHovered ? hoverImage : defaultImage}
      alt=""
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
}
HoverImage.ProTypes = {
  defaultImage: PropTypes.string.isRequired,
  hoverImage: PropTypes.string.isRequired,
};

export default HoverImage;
