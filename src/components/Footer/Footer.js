import React from "react";
import "./Footer.css";

// Импортируем иконки соцсетей (те же, что и везде)
import vkIcon from "../../assets/icons/vk-icon.svg";
import telegramIcon from "../../assets/icons/telegram-icon.svg";
import mainLogo from "../../assets/logos/mainLogo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Левая колонка: Лого и копирайт */}
        <div className="footer-col left-col">
          <a href="https://bubp.ru/" className="footer-logo-link">
            <img src={mainLogo} alt="Логотип" className="footer-logo" />
            <span className="footer-brand-name">
              Бухгалтерский учёт без проблем
            </span>
          </a>
          <p className="copyright">
            © {new Date().getFullYear()} ООО "Бухгалтерский учёт без проблем"
          </p>
          <p className="copyright">
            Designed by{" "}
            <a
              href="https://www.magnific.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Freepik
            </a>
          </p>
        </div>

        {/* Центральная колонка: Ссылки */}
        <div className="footer-col center-col">
          <a
            href="https://vk.com/doc-41256460_450831081?dl=5b3c3f0038003652ca"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Политика конфиденциальности
          </a>
        </div>

        <div className="footer-col right-col">
          <div className="footer-social-links">
            <a
              href="https://vk.com/buhuchetbp"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="ВКонтакте"
            >
              <img src={vkIcon} alt="VK" />
            </a>
            <a
              href="https://t.me/bubpekb"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Telegram"
            >
              <img src={telegramIcon} alt="Telegram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
