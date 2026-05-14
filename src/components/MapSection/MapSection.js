import React, { useState, useEffect } from "react";
import "./MapSection.css";

const MapSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 650) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <section className="lastSection" id="lastSection">
      {/* Общий контейнер для карты и контактов */}
      <div className="flex-container">
        {/* Левая часть: Карта */}
        <div className="map-part">
          <div className="map-wrapper">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=60.624334%2C56.788915&mode=whatshere&whatshere%5Bpoint%5D=60.624845%2C56.787924&whatshere%5Bzoom%5D=17&z=17"
              className="map-frame"
              title="Наш офис на карте"
              allowFullScreen={true}
            ></iframe>
          </div>
        </div>

        {/* Правая часть: Контакты */}
        <div className="contacts-part">
          <div className="contacts-card">
            <h2 className="contacts-title">Наши контакты</h2>
            <p className="contacts-subtitle">
              Свяжитесь с нами любым удобным способом
            </p>

            <div className="contact-item">
              <div className="contact-icon phone">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="contact-info">
                <span className="contact-label">Телефон</span>
                <a href="tel:+73432861387" className="contact-value">
                  +7 (343) 286-13-87
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon email">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="contact-info">
                <span className="contact-label">Email</span>
                <a href="mailto:info@bubp.ru" className="contact-value">
                  info@bubp.ru
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon location">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="contact-info">
                <span className="contact-label">Адрес</span>
                <span className="contact-value">
                  Екатеринбург, ул. Крестинского 44, офис 505 (5 этаж)
                </span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon time">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="contact-info">
                <span className="contact-label">Часы работы</span>
                <span className="contact-value">
                  Пн-Пт: 9:00 - 18:00; Обед с 13:00 до 14:00
                </span>
              </div>
            </div>

            <div className="company-name">
              ООО "Бухгалтерский учёт без проблем"
            </div>
          </div>
        </div>
      </div>

      {/* Кнопка "Наверх" */}
      <button
        className={`back-to-top ${isVisible ? "visible" : ""}`}
        onClick={scrollToTop}
        title="Наверх"
        aria-label="Прокрутить наверх"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </section>
  );
};

export default MapSection;
