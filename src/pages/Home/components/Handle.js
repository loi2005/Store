import { useState } from "react";
import { UseFetch, Shop } from "../../../services/api";

const HandleColor = (index, productId) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [currentIndexImg, setCurrentIndexImg] = useState(0);
  const [currentImage, setCurrentImage] = useState({});
  const { products } = UseFetch("/assets/products.json");
  const { goods } = Shop();
  //current image
  const scrollImage = (index) => {
    setCurrentIndexImg(index);
  };

  const handleColor = (index, productId, categoryName) => {
    if (selectedColor?.index === index && selectedColor?.id === productId) {
      setSelectedColor(null);
      setCurrentImage("");
    } else {
      setSelectedColor({ index, id: productId });
      const colorImage = goods[categoryName].find(
        (product) => product.id === productId
      )?.colorProducts[index];
      setCurrentImage((prev) => ({ ...prev, [productId]: colorImage || "" }));
    }
  };
  return {
    handleColor,
    selectedColor,
    currentImage,
    currentIndexImg,
    scrollImage,
  };
};

export default HandleColor;
