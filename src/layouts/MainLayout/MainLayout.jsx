// MainLayout.js
import { Outlet } from "react-router-dom";
import Common from "../../components/common/Common";
import style from "./MainLayout.module.scss";
import ScrollY from "../components/scroll";
import Footer from "../../components/common/Footer/footer";

function MainLayout() {
  const showNavBar = ScrollY();
  return (
    <div className={style.container}>
      <div
        className={`${style.header} ${showNavBar ? style.show : style.hidden}`}
      >
        <Common />
      </div>
      <div className={style.body}>
        <Outlet />
      </div>
      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
