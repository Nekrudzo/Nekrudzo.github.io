import React, { useState, useEffect } from "react";
import "./MapSection.css"; // Импортируем CSS для стилей

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
      <div className="map">
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=60.624334%2C56.788915&mode=whatshere&whatshere%5Bpoint%5D=60.624845%2C56.787924&whatshere%5Bzoom%5D=17&z=17"
          width="850"
          height="650"
          frameborder="1"
          allowfullscreen="true"
          className="Framei"
        ></iframe>
      </div>
      <div className="contacts">
        <h1>Наши контакты:</h1>
        <p>+7 (343) 286-13-87</p>
        <p>Напишите руководителю: info@bubp.ru</p>
        <p>Екатеринбург, ул. Крестинского д. 44 офис 505 (5 этаж)</p>
        <p>Часы работы с 9-00 до 18-00.</p>
        <p>ООО "Бухгалтерский учёт без проблем"</p>
        <a
          href="#top"
          id="back-to-top"
          className={`back-to-top ${isVisible ? "visible" : ""}`}
          onClick={(event) => {
            event.preventDefault(); // Предотвращаем переход по ссылке
            scrollToTop();
          }}
          title="Наверх"
        >
          Наверх ▲
        </a>
      </div>
    </section>
  );
};

export default MapSection;
