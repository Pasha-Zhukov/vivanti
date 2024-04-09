import Nav from "../nav/Nav";

import "./Header.scss";

export default function Header() {
  return (
    <header>
      <div className="wrapper">
        <div className="header-logo-title">
          <img src="../../../images/logo.svg" alt="logo" />
          <div className="main_title">Современные методики диагностики</div>
        </div>
        <Nav />
        <div className="contacts">
          <img src="../../../public/images/phone.svg" alt="phone" />
          <div>
            <div className="phone">+7 123 456 7890</div>
            <div className="text">Звонок бесплатный</div>
          </div>
        </div>
      </div>
    </header>
  );
}
