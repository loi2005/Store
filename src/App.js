import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import { LayoutProvider } from "./pages/Collections/LayoutContext";
function App() {
  return (
    <div className="App">
      <LayoutProvider>
        <AppRouter />
      </LayoutProvider>
    </div>
  );
}

export default App;
