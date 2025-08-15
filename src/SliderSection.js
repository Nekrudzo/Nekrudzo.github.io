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
    autoplaySpeed: 4000,
    arrows: true,
    fade: true,
    cssEase: "linear",
    adaptiveHeight: false,
  };

  return (
    <section className="slider-section" id="slider-section">
      <Slider {...settings} adaptiveHeight={false}>
        <div className="slide slide1">
          <div className="overlay">
            <h1 className="slide-tittle">Почему стоит выбрать нас:</h1>
            <p className="slide-text">
              НАДЕЖНОСТЬ - все договорённости зафиксированы в договоре. Мы
              всегда на связи.
            </p>
            <div className="social-links">
              <a
                href="https://vk.com/buhuchetbp"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link vk"
              >
                <img src="/vk-icon.svg" alt="VK" className="social-icon" />
                <span>Мы в ВКонтакте</span>
              </a>

              <a
                href="https://t.me/bubpekb"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link tg"
              >
                <img
                  src="/telegram-icon.svg"
                  alt="Telegram"
                  className="social-icon"
                />
                <span>Наш Telegram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="slide slide2">
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
            <div className="social-links">
              <a
                href="https://vk.com/buhuchetbp"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link vk"
              >
                <img src="/vk-icon.svg" alt="VK" className="social-icon" />
                <span>Мы в ВКонтакте</span>
              </a>

              <a
                href="https://t.me/bubpekb"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link tg"
              >
                <img
                  src="/telegram-icon.svg"
                  alt="Telegram"
                  className="social-icon"
                />
                <span>Наш Telegram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="slide slide3">
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
            <div className="social-links">
              <a
                href="https://vk.com/buhuchetbp"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link vk"
              >
                <img src="/vk-icon.svg" alt="VK" className="social-icon" />
                <span>Мы в ВКонтакте</span>
              </a>

              <a
                href="https://t.me/bubpekb"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link tg"
              >
                <img
                  src="/telegram-icon.svg"
                  alt="Telegram"
                  className="social-icon"
                />
                <span>Наш Telegram</span>
              </a>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default SliderSection;
