import { useState } from "react";

const Btn_Pre_Next = (totalCards) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? 0 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const handleNext = () => {
    const newIndex = currentIndex === totalCards - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return { handlePrev, handleNext, currentIndex, setCurrentIndex };
};

export default Btn_Pre_Next;
