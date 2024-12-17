import { useEffect, useState } from "react";
function ScrollY() {
  const [showNavBar, setShowNavBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  // event scroll
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavBar(false);
    } else {
      setShowNavBar(true);
    }
    setLastScrollY(window.scrollY);
  };
  // lang nge su kien
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return showNavBar;
}

export default ScrollY;
