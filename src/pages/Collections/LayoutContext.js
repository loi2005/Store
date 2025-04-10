import { useContext, createContext, useState } from "react";

//create context
const LayoutContext = createContext();
//create provider to provide date for all children components
export const LayoutProvider = ({ children }) => {
  const [layout, setLayout] = useState("grid");
  return (
    <LayoutContext.Provider value={{ layout, setLayout }}>
      {children}
    </LayoutContext.Provider>
  );
};
export const useLayout = () => useContext(LayoutContext);
