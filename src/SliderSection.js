import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderSection.css";

const SliderSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    fade: true,
    cssEase: "linear",
  };

  return (
    <section className="slider-section" id="slider-section">
      <Slider {...settings}>
        <div className="slide">
          <img src="/slide1.jpg" alt="Slide1" />
          <div className="overlay">
            <h1 className="slide-tittle">Почему стоит выбрать нас:</h1>
            <p className="slide-text">
              НАДЕЖНОСТЬ - все договорённости зафиксированы в договоре. Мы
              всегда на связи.
            </p>
            <a
              href="https://vk.com/buhuchetbp"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <p>Наш ВК:</p>
              <img src="/vk-icon.svg" alt="VK" />
            </a>
          </div>
        </div>
        <div className="slide">
          <img src="/slide2.jpg" alt="Slide2" />
          <div className="overlay">
            <h1 className="slide-tittle">ГОСОРГАНЫ</h1>
            <p className="slide-text">
              - взаимодействия с контролирующими органами мы берем на себя
            </p>
            <h2 className="slide-tittle">ЛУЧШИЕ ЦЕНЫ</h2>
            <p className="slide-text">
              - Прозрачная стоимость услуг. Зависит только от объёма Вашей
              деятельности.
            </p>
            <a
              href="https://www.instagram.com/buhuchet.bp/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <p>Наш инстаграмм:</p>
              <img src="/insta-icon.svg" alt="Instagram" />
            </a>
          </div>
        </div>
        <div className="slide">
          <img src="/slide3.jpg" alt="Slide3" />
          <div className="overlay">
            <h1 className="slide-tittle">ИННОВАЦИОННЫЕ ТЕХНОЛОГИИ</h1>
            <p className="slide-text">
              - мы делаем всю работу по бухгалтерии, но Вы можете в любой момент
              проверить или скорректировать нашу работу через удалённые
              программы
            </p>
            <h2 className="slide-tittle">ВЫСОКАЯ КВАЛИФИКАЦИЯ</h2>
            <p className="slide-text">
              - опыт работы каждого из членов нашей команды от 7 лет и больше и
              десятки пройденных налоговых проверок, в том числе и выездных.
            </p>
            <a
              href="https://t.me/bubpekb"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <p>Наш телеграмм:</p>
              <img src="/telegram-icon.svg" alt="Telegram" />
            </a>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default SliderSection;
