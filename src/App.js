import React from "react";
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
