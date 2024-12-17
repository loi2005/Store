import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Compare from "../pages/Compare/Compare";
import BlackFriday from "../pages/BlackFriday/BlackFriday";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Login from "../pages/Login/Login";
import Cart from "../pages/Cart/Cart";
import Collection from "../pages/Collections/collection";
function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/blackFriday" element={<BlackFriday />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/collection" element={<Collection />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
