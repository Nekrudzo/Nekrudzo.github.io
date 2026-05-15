import React from "react";
import { useEffect } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import SliderSection from "./components/SliderSection/SliderSection";
import MapSection from "./components/MapSection/MapSection";
import YandexForm from "./components/YandexForm/YandexForm";
import Footer from "./components/Footer/Footer";
import backVideo from "./assets/videos/BackVideo.mp4";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY > 50) {
        header?.classList.add("scrolled");
      } else {
        header?.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <Header />
      <section className="callUs">
        {/* Видео фон */}
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="auto"
          className="hero-video"
          id="myVideo"
        >
          <source src={backVideo} type="video/mp4" />
        </video>
        {/* Затемняющий оверлей */}
        <div className="hero-overlay"></div>
        {/* Контент */}
        <div className="hero-content">
          <h1 className="mainText-tittle">
            Бухгалтерское обслуживание <br />
            для ИП и ООО
          </h1>
          <p className="mainText-text">
            Сдайте бухгалтерский или налоговый отчёт без ошибок и за 1 день!
          </p>
          <a href="#contactSection" className="hero-cta">
            Рассчитать стоимость
          </a>
        </div>
        {/* Стрелка-подсказка */}
        <a
          href="#slider-section"
          className="scroll-hint"
          aria-label="Прокрутить вниз"
        >
          <span></span>
        </a>
      </section>

      <SliderSection />
      <MapSection />
      <YandexForm />
      <Footer />
    </div>
  );
}

export default App;
