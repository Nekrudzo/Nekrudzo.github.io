import React from "react";
import "./MapSection.css";

const MapSection = () => {
  return (
    <section className="lastSection">
      <div className="map">
        <a
          href="https://yandex.ru/maps/54/yekaterinburg/?utm_medium=mapframe&utm_source=maps"
          className="firstA"
        >
          Екатеринбург
        </a>
        <a
          href="https://yandex.ru/maps/54/yekaterinburg/house/ulitsa_krestinskogo_44/YkkYcAVlSUIGQFtsfXt5dnVmZg==/?ll=60.624334%2C56.788915&utm_medium=mapframe&utm_source=maps&z=17"
          className="SecondA"
        >
          Улица Крестинского, 44 — Яндекс Карты
        </a>
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=60.624334%2C56.788915&mode=whatshere&whatshere%5Bpoint%5D=60.624845%2C56.787924&whatshere%5Bzoom%5D=17&z=17"
          width="560"
          height="400"
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
      </div>
      <div className="policy">
        <a href="https://vk.com/doc-41256460_450831081?dl=5b3c3f0038003652ca">
          <p>Политика конфиденциальности</p>
        </a>
      </div>
    </section>
  );
};

export default MapSection;
