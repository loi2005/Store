import { useState } from "react";

function LookUp(initialState = false) {
  const [isLookUp, setIsLookUp] = useState(initialState);
  const handleSearch = () => {
    setIsLookUp((prev) => !prev);
  };

  return { isLookUp, handleSearch, setIsLookUp };
}

export default LookUp;
