import React, { useState, useEffect } from "react";
import "./Header.css";
import mainLogo from "../../assets/logos/mainLogo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Блокировка скролла при открытом меню
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Эффект сжатия шапки при скролле
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        {/* Логотип */}
        <a href="https://bubp.ru/" className="logo-link" onClick={closeMenu}>
          <img src={mainLogo} alt="Логотип" className="logo-img" />
          <span className="logo-text">
            Бухгалтерский учёт
            <br />
            без проблем
          </span>
        </a>

        {/* Навигация + Телефон */}
        <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a
                href="#slider-section"
                className="nav-link"
                onClick={closeMenu}
              >
                О НАС
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contactSection"
                className="nav-link"
                onClick={closeMenu}
              >
                ТАРИФЫ
              </a>
            </li>
            <li className="nav-item">
              <a href="#lastSection" className="nav-link" onClick={closeMenu}>
                КОНТАКТЫ
              </a>
            </li>
          </ul>
          <a
            href="tel:+73432861387"
            className="header-phone"
            onClick={closeMenu}
          >
            +7 (343) 286-13-87
          </a>
          <a href="#contactSection" className="header-cta" onClick={closeMenu}>
            Бесплатная консультация
          </a>
        </nav>

        {/* Бургер-кнопка */}
        <button
          className={`burger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Открыть меню"
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
