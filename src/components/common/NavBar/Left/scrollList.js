import { useEffect, useState } from "react";

function ScrollList({ ToggleDown }) {
  const [toggleList, setToggleList] = useState(0);
  const handleScroll = () => {
    if (window.scrollY > toggleList || window.scrollY < toggleList)
      ToggleDown();
    setToggleList(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [toggleList, ToggleDown]);
  return null;
}

export default ScrollList;
