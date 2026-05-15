import React from "react";
import "./YandexForm.css";

const YandexForm = () => {
  return (
    <section className="yandex-form-section" id="calculatorSection">
      <div className="form-wrapper">
        <h2 className="form-title">Заказать консультацию</h2>
        <p className="form-subtitle">
          Оставьте данные, и мы рассчитаем стоимость для вас
        </p>

        {/* Вставь свой iframe от Яндекс Форм ниже */}
        <div className="yandex-form-container">
          <script src="https://forms.yandex.ru/_static/embed.js"></script>
          <iframe
            src="https://forms.yandex.ru/u/6a06f95e95add52c5d419a5d?iframe=1"
            frameborder="0"
            title="Форма обратной связи"
            className="yandex-form-iframe"
            scrolling="no"
            allowTransparency={true}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default YandexForm;
