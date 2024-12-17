import style from "./style.module.scss";
import classNames from "classnames/bind";
function OnlyImg() {
  const cx = classNames.bind(style);
  const imgs = [
    {
      id: 1,
      img: "../../../assets/images/pexels-pavel-danilyuk-8038337.jpg",
      title: "Build to Endure",
    },
    {
      id: 2,
      img: "../../../assets/images/pexels-pavel-danilyuk-8038334.jpg",
      title: "Unparalleled Design",
    },
    {
      id: 3,
      img: "../../../assets/images/pexels-pavel-danilyuk-8001283.jpg",
      title: "Seamless Connectively",
    },
  ];
  return (
    <div className={cx("onlyImg")}>
      <div className={cx("onlyImg-heading")}>
        <p className={cx("heading-name")}>Our Signature Headphones</p>
        <p className={cx("sub-name")}>A Melody for Your Ears</p>
      </div>
      <div className={cx("list-img")}>
        {imgs.map((img) => (
          <div className={cx("items-img")}>
            <img className={cx("item")} src={img.img} />
            <div className={cx("title")}>{img.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OnlyImg;
