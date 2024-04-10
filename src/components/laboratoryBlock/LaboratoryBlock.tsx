import { handleScroll } from "../../utils/scrollUtils";

import "./LaboratoryBlock.scss";

export default function LaboratoryBlock() {
  return (
    <section id="laboratory" className="wrapper-laboratory-section">
      <div className="laboratory-title-mobile">Лаборатория</div>
      <div className="laboratory-block">
        <div>
          <div className="laboratory-title-pc">Лаборатория</div>
          <div className="description-laboratory">
            Наша лаборатория предлагает широкий спектр медицинских исследований,
            проводимых опытными капибарами-лаборантами. Мы специализируемся на
            анализе биоматериалов, микробиологических исследованиях,
            генетической диагностике и многом другом. <br />
            <br />
            Мы используем современное оборудование и методики и гарантируем
            точность и надежность результатов.
          </div>
          <button onClick={() => handleScroll("apply")}>Оставить заявку</button>
        </div>
        <img src="/images/laboratory-img.svg" alt="logo" />
      </div>
    </section>
  );
}
