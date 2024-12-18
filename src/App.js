import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppRouter from "./router/AppRouter";
function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
