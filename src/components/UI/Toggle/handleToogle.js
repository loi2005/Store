import { useState } from "react";
const HandleToggle = () => {
  const [selectProduct, setSelectProduct] = useState(null);
  const [isToggle, setIsToggle] = useState(false);
  //set layout

  const handleToggle = (product) => {
    setSelectProduct(product);
    setIsToggle((prev) => !prev);
  };
  return { selectProduct, isToggle, handleToggle };
};
export default HandleToggle;
