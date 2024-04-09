import "./Gallery.scss";

export default function Gallery() {
  return (
    <section id="gallery" className="wrapper-section">
      <div className="gallery-block">
        <h1>Галерея</h1>
        <div className="grid-container">
          <div className="grid-item large">
            <img src="../../../public/images/gallery-1.svg" alt="Description" />
            <div className="nested-grid">
              <img
                src="../../../public/images/gallery-2.svg"
                alt="Description"
                className="nested-item"
              />
              <img
                src="../../../public/images/gallery-3.svg"
                alt="Description"
                className="nested-item"
              />
            </div>
          </div>
          <div className="grid-item large">
            <img src="../../../public/images/gallery-4.svg" alt="Description" />
            <div className="nested-grid">
              <img
                src="../../../public/images/gallery-5.svg"
                alt="Description"
                className="nested-item"
              />
              <img
                src="../../../public/images/gallery-6.svg"
                alt="Description"
                className="nested-item"
              />
            </div>
            <div className="grid-item">
              <img
                src="../../../public/images/gallery-7.svg"
                alt="Description"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
