import NavBarLeft from "./NavBar/Left/NavBar-left";
import NavBarRight from "./NavBar/Right/NavBar-right";
import style from "./common.module.scss";

function Common() {
  return (
    <div className={style.navbar}>
      <div>
        <NavBarLeft />
      </div>
      <div>
        <NavBarRight />
      </div>
    </div>
  );
}

export default Common;
