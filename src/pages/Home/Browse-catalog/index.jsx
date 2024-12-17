import { useState } from "react";
import style from "./index.module.scss";
import classNames from "classnames/bind";
import img1 from "../../../assets/images/8.png";
import img2 from "../../../assets/images/9.png";
import img3 from "../../../assets/images/1.png";
import img4 from "../../../assets/images/headphone.jpg";
import img5 from "../../../assets/images/homeaudio.jpg";
import img6 from "../../../assets/images/3.png";
import img7 from "../../../assets/images/mouse.jpg";
import { NavLink } from "react-router-dom";
const cx = classNames.bind(style);
function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      title: "card 1",
      description: "New Arrival",
      imgUrl: img1,
    },
    {
      title: "card 2",
      description: "Black Friday",
      imgUrl: img2,
    },
    {
      title: "card 3",
      description: "Amplifiers",
      imgUrl: img3,
    },
    {
      title: "card 4",
      description: "HeadPhones",
      imgUrl: img4,
    },
    {
      title: "card 5",
      description: "Home Audio",
      imgUrl: img5,
    },
    {
      title: "card 6",
      description: "Microphones",
      imgUrl: img6,
    },
    {
      title: "card 7",
      description: "Mouses",
      imgUrl: img7,
    },
  ];
  const totalCards = cards.length - 5;
  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? 0 : currentIndex - 1);
  };
  const handleNext = () => {
    setCurrentIndex(currentIndex === totalCards - 1 ? 0 : currentIndex + 1);
  };
  return (
    <div className={cx("card-container")}>
      <p className={cx("heading")}>Browse our catalog</p>
      <div
        className={cx("card-slider")}
        style={{ transform: `translateX(-${currentIndex * 570}px)` }}
      >
        {cards.map((card, index) => (
          <div className={cx("item")} key={index}>
            <NavLink className={cx("link")}>
              <img
                className={cx("img-browse")}
                src={card.imgUrl}
                alt={card.title}
              />
              <p>{card.description}</p>
            </NavLink>
          </div>
        ))}
      </div>
      <button
        className={cx("prev", "btn", { hidden_left: currentIndex === 0 })}
        onClick={handlePrev}
      >
        <i className="bx bx-left-arrow-alt"></i>
      </button>
      <button
        className={cx("next", "btn", { hidden_right: currentIndex === 1 })}
        onClick={handleNext}
      >
        <i className="bx bx-right-arrow-alt"></i>
      </button>
    </div>
  );
}

export default Slider;
