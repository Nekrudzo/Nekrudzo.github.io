import React from "react";
import "./App.css";
import ContactForm from "./ContactForm";
import SliderSection from "./SliderSection";
import Calculator from "./Calculator";
import MapSection from "./MapSection";

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav className="header-nav">
          <a className="main-logo" href="">
            <img src="/mainLogo.png" alt="mainLogo" />
          </a>
          <ol className="links-list">
            <li className="link">
              <a className="nav-links" href="#">
                О НАС
              </a>
            </li>
            <li className="link">
              <a className="nav-links" href="#">
                ТАРИФЫ
              </a>
            </li>
            <li className="link">
              <a className="nav-links" href="#">
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
        <div className="container">
          <h1 className="input-text">
            Оставьте заявку и мы свяжемся с Вами чтобы предложить наиболее
            выгодные условия обслуживания
          </h1>
          <ContactForm />
        </div>
      </section>
      <SliderSection />
      <Calculator />
      <MapSection />
    </div>
  );
}

export default App;
