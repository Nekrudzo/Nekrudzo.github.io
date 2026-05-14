import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderSection.css";

import vkIcon from "../../assets/icons/vk-icon.svg"; // Проверь путь к иконкам!
import telegramIcon from "../../assets/icons/telegram-icon.svg";

const slides = [
  {
    id: 1,
    className: "slide-1", // Уникальный класс
    title: "Почему стоит выбрать нас:",
    text: "НАДЕЖНОСТЬ — все договорённости зафиксированы в договоре.",
  },
  {
    id: 2,
    className: "slide-2",
    title: "ГОСОРГАНЫ",
    text: "Взаимодействия с контролирующими органами мы берём на себя",
    subtitle: "ЛУЧШИЕ ЦЕНЫ",
    subtitleText: "Прозрачная стоимость услуг.",
  },
  {
    id: 3,
    className: "slide-3",
    title: "ИННОВАЦИОННЫЕ ТЕХНОЛОГИИ",
    text: "Мы делаем всю работу, а вы можете проверить результат удалённо.",
    subtitle: "ВЫСОКАЯ КВАЛИФИКАЦИЯ",
    subtitleText: "Опыт работы каждого члена команды от 7 лет.",
  },
];

const SliderSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    fade: true,
  };

  return (
    <section className="slider-section" id="slider-section">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className={`slide ${slide.className}`}>
            <div className="overlay">
              <div className="slide-content">
                <h1 className="slide-title">{slide.title}</h1>
                <p className="slide-text">{slide.text}</p>

                {slide.subtitle && (
                  <>
                    <h2 className="slide-subtitle">{slide.subtitle}</h2>
                    <p className="slide-text">{slide.subtitleText}</p>
                  </>
                )}
              </div>

              <div className="social-links">
                <a
                  href="https://vk.com/buhuchetbp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link vk"
                >
                  <img src={vkIcon} alt="VK" className="social-icon" />
                  <span>ВКонтакте</span>
                </a>
                <a
                  href="https://t.me/bubpekb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link tg"
                >
                  <img
                    src={telegramIcon}
                    alt="Telegram"
                    className="social-icon"
                  />
                  <span>Telegram</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SliderSection;
