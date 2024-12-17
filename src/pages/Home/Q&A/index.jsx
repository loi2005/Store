import style from "./q&a.module.scss";
import classNames from "classnames/bind";
import btn from "../../../components/UI/btn.module.scss";
import { QA } from "../../../services/api";
import { useState } from "react";

function QandA() {
  const cx = classNames.bind(style);
  const { isFAQs } = QA();
  const [isShow, setIsShow] = useState(null);
  //function
  const handleShowAnswer = (questionID) => {
    setIsShow((prevID) => (prevID === questionID ? null : questionID));
  };
  return (
    <div className={cx("Q-A_container")}>
      <div className={cx("Q-A_des")}>
        <span className={cx("topic")}>Got questions? We've got answers!</span>
        {Object.values(isFAQs).map((isFAQ) => (
          <p className={cx("more-topic")} key={isFAQ.id}>
            {isFAQ.des}
          </p>
        ))}
        <div>
          <button className={btn.primary}>Contact Us</button>
        </div>
      </div>
      <div className={cx("ques_ans")}>
        <ul className={cx("list")}>
          {Object.values(isFAQs)
            .filter((isFAQ) => isFAQ.question)
            .map((isFAQ) => (
              <div>
                <li
                  className={cx("item")}
                  onClick={() => handleShowAnswer(isFAQ.id)}
                  key={isFAQ.id}
                >
                  <span>
                    {isFAQ.question}
                    <i
                      className={cx("bx bxs-chevron-down", "icon", {
                        show: isFAQ.id === isShow,
                      })}
                    ></i>
                  </span>
                </li>
                {isFAQ.id === isShow && (
                  <p className={cx("ans")}>{isFAQ.answer}</p>
                )}
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default QandA;
