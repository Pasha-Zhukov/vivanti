import "./Slider.scss";

export default function Slider() {
  return (
    <div className="slider">
      <img
        className="slider-img"
        src="../../../public/images/slider-img.svg"
        alt="slider"
      />
      <h1 className="slider-text">
        <div>
          <div className="slider-title">точные результаты</div>
          <div className="slider-subtitle">точно в срок</div>
        </div>
      </h1>
    </div>
  );
}
