import style from "./com.module.scss";
import Btn_Pre_Next from "../Button";
import classNames from "classnames/bind";
function Comment({ commens }) {
  const CP = classNames.bind(style);
  const totalCards = 2;
  const { handlePrev, handleNext, currentIndex } = Btn_Pre_Next(totalCards);
  return (
    <div className={CP("container")}>
      <div>
        <span className={CP("heading")}>What our customers say</span>
        <div
          className={CP("wrapper")}
          style={{ transform: `translateX(-${currentIndex * 1458}px)` }}
        >
          {Object.values(commens).map((commen) => (
            <div className={CP("content")} key={commen.id}>
              <p className={CP("comment-detail")}>{commen.detail}</p>
              <div className={CP("proFile")}>
                <div className={CP("comment-img")}>
                  <img className={CP("img")} src={commen.img} />
                </div>
                <div className={CP("info")}>
                  <p className={CP("comment-name")}>{commen.Name}</p>
                  <span className={CP("comment-job")}>{commen.job}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className={CP("btn-left", "btn", { hidden_left: currentIndex === 0 })}
          onClick={handlePrev}
        >
          <i className="bx bx-left-arrow-alt"></i>
        </button>
        <button
          className={CP("btn-right", "btn", {
            hidden_right: currentIndex === 1,
          })}
          onClick={handleNext}
        >
          <i className="bx bx-right-arrow-alt"></i>
        </button>
      </div>
    </div>
  );
}

export default Comment;
