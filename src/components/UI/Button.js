import { useState } from "react";

const Btn_Pre_Next = (totalCards) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? 0 : currentIndex - 1);
  };
  const handleNext = () => {
    setCurrentIndex(currentIndex === totalCards - 1 ? 0 : currentIndex + 1);
  };
  return { handlePrev, handleNext, currentIndex, setCurrentIndex };
};

export default Btn_Pre_Next;
