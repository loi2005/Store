import { useState } from "react";
import { UseFetch } from "../../../services/api";
const HandleColor = (index, productId) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [currentIndexImg, setCurrentIndexImg] = useState(0);
  const [currentImage, setCurrentImage] = useState({});
  const { products } = UseFetch("/assets/products.json");
  //current image
  const scrollImage = (index) => {
    setCurrentIndexImg(index);
  };

  const handleColor = (index, productId) => {
    if (selectedColor?.index === index && selectedColor?.id === productId) {
      setSelectedColor(null);
      setCurrentImage("");
    } else {
      setSelectedColor({ index, id: productId });
      const colorImage = products.find((product) => product.id === productId)
        ?.colorProducts[index];
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
