import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
function BtnShop(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);
  const location = useLocation();
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  //
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  //
  const closeDown = () => {
    setIsOpen(false);
  };
  return { isOpen, handleClick, closeDown };
}

export default BtnShop;
