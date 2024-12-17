// Home.js
import classNames from "classnames/bind";
import style from "./home.module.scss";
import { NavLink } from "react-router-dom";
import Time from "./TimeLeft";
import Slider from "./Browse-catalog";
import UseTrending from "./Trending-now/Usetrending";
import OurCollection from "./ourCollections/OurCollection";
import OnlyImg from "./OnlyImg";
import btn from "../../components/UI/btn.module.scss";
import Item2 from "./Item2";
import ShowComment from "./ShowComments/ShowComment";
import QandA from "./Q&A";
import Sub_email from "./Sub_email/index";
import Marquee from "./Sub_email/marquee";

const cx = classNames.bind(style);

function Home() {
  const { timeLeft } = Time();
  return (
    <div>
      <div className={cx("container")}>
        <header>
          <div className={cx("heading")}>
            <span className={cx("title")}>
              The Best Black Friday Offers Ever
            </span>
            <p className={cx("heading-title")}>
              Fulfill your dream list with up-to 20% OFF on all items.
              Limited-time deals.
            </p>
            <div className={cx("time-down")}>
              <div className={cx("time-box")}>
                <span className={cx("times")}>{timeLeft.days}</span>
                <p>days</p>
              </div>
              <div className={cx("time-box")}>
                <span className={cx("times")}>{timeLeft.hours}</span>
                <p>hours</p>
              </div>
              <div className={cx("time-box")}>
                <span className={cx("times")}>{timeLeft.minutes}</span>
                <p>minutes</p>
              </div>
              <div className={cx("time-box")}>
                <span className={cx("times")}>{timeLeft.seconds}</span>
                <p>seconds</p>
              </div>
            </div>
            <NavLink>
              <button className={btn.primary}>Shop now</button>
            </NavLink>
          </div>
        </header>
      </div>
      <div className={cx("content")}>
        <Slider />
        <UseTrending />
        <OurCollection />
        <OnlyImg />
        <Item2 />
        <ShowComment />
        <QandA />
        <Sub_email />
        <Marquee />
      </div>
    </div>
  );
}

export default Home;
