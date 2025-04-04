import React from "react";
import "./App.css";
import SliderSection from "./SliderSection";
import Calculator from "./Calculator";
import MapSection from "./MapSection";

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav className="header-nav">
          <a className="main-logo" href="https://bubp.ru/">
            <img src="/mainLogo.png" alt="mainLogo" />
          </a>
          <ol className="links-list">
            <li className="link">
              <a className="nav-links" href="#slider-section">
                О НАС
              </a>
            </li>
            <li className="link">
              <a className="nav-links" href="#calculatorSection">
                ТАРИФЫ
              </a>
            </li>
            <li className="link">
              <a className="nav-links" href="#lastSection">
                КОНТАКТЫ
              </a>
            </li>
          </ol>
          <div className="contact-info">
            <div className="address">
              г. Екатеринбург, ул. Крестинского, д. 44 оф. 505
            </div>
            <div className="phone">Тел.: +7 (343) 286-13-87</div>
          </div>
        </nav>
      </header>
      <section className="callUs">
        <video loop muted autoPlay playsinline preload="auto" id="myVideo">
          <source src="/BackVideo.mp4" type="video/mp4" />
          Ваш браузер не поддерживает HTML5 видео.
        </video>
        <div className="mainText">
          <h1 className="mainText-tittle">
            Бухгалтерское обслуживание для ИП и ООО
          </h1>
          <p className="mainText-text">
            Сдайте бухгалтерский или налоговый отчёт без ошибок и за 1 день!
          </p>
        </div>
      </section>
      <SliderSection />
      <Calculator />
      <MapSection />
      <footer>
        <div className="policy-form">
          <a
            href="https://vk.com/doc-41256460_450831081?dl=5b3c3f0038003652ca"
            target="_blank"
            rel="noopener noreferrer"
            className="policy"
          >
            <p>Политика конфиденциальности</p>
          </a>
        </div>
        <p className="footer-text">
          Designed by{" "}
          <a
            href="https://www.freepik.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="policy"
          >
            Freepik
          </a>
        </p>
        <p className="footer-text">© 2025 nekrudzo</p>
      </footer>
    </div>
  );
}

export default App;
