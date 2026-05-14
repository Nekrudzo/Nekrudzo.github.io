import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    type: "ooo",
    tax: "osno",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  //  Форматирование телефона в маску +7 (___) ___-__-__
  const formatPhone = (value) => {
    const digits = value.replace(/\D/g, "");
    if (digits.length === 0) return "";

    // Нормализуем: 8 заменяем на 7, добавляем 7 если пользователь начал с 9
    let clean = digits.startsWith("8") ? "7" + digits.slice(1) : digits;
    if (!clean.startsWith("7")) clean = "7" + clean;

    let formatted = "+7";
    if (clean.length > 1) formatted += ` (${clean.slice(1, 4)}`;
    if (clean.length > 4) formatted += `) ${clean.slice(4, 7)}`;
    if (clean.length > 7) formatted += `-${clean.slice(7, 9)}`;
    if (clean.length > 9) formatted += `-${clean.slice(9, 11)}`;

    return formatted;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      setFormData({ ...formData, phone: formatPhone(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    setError("");
  };

  const handleRadioChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Валидация
    if (!formData.name.trim()) return setError("Введите ваше имя");
    if (formData.phone.replace(/\D/g, "").length < 11)
      return setError("Введите корректный номер телефона");

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/submit.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          companyType: formData.type === "ooo" ? "ООО" : "ИП",
          taxSystem:
            formData.tax === "osno"
              ? "ОСНО"
              : formData.tax === "usn_plus"
                ? "УСН (Доходы)"
                : "УСН (Доходы-Расходы)",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSent(true);
        setFormData({ name: "", phone: "", type: "ooo", tax: "osno" });
        setTimeout(() => setIsSent(false), 5000);
      } else {
        setError(data.message || "Произошла ошибка при отправке");
      }
    } catch (err) {
      console.error(err);
      setError("Ошибка сети. Проверьте подключение к интернету.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSent) {
    return (
      <section className="contact-section" id="contactSection">
        <div className="success-message">
          <div className="success-icon">✓</div>
          <h2>Заявка отправлена!</h2>
          <p>Мы свяжемся с вами в ближайшее время для уточнения деталей.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-section" id="contactSection">
      <div className="form-wrapper">
        <h2 className="form-title">Заказать консультацию</h2>
        <p className="form-subtitle">
          Оставьте данные, и мы рассчитаем стоимость для вас
        </p>

        <form onSubmit={handleSubmit} className="custom-form">
          <div className="form-group">
            <label>Ваше имя</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Иван Иванов"
              required
            />
          </div>

          <div className="form-group">
            <label>Телефон</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+7 (___) ___-__-__"
              required
            />
          </div>

          <div className="form-group radio-group">
            <label>Форма собственности</label>
            <div className="radio-options">
              <label className="radio-card">
                <input
                  type="radio"
                  name="type"
                  value="ooo"
                  checked={formData.type === "ooo"}
                  onChange={() => handleRadioChange("type", "ooo")}
                />
                <span>ООО</span>
              </label>
              <label className="radio-card">
                <input
                  type="radio"
                  name="type"
                  value="ip"
                  checked={formData.type === "ip"}
                  onChange={() => handleRadioChange("type", "ip")}
                />
                <span>ИП</span>
              </label>
            </div>
          </div>

          <div className="form-group radio-group">
            <label>Система налогообложения</label>
            <div className="radio-options">
              <label className="radio-card">
                <input
                  type="radio"
                  name="tax"
                  value="osno"
                  checked={formData.tax === "osno"}
                  onChange={() => handleRadioChange("tax", "osno")}
                />
                <span>ОСНО</span>
              </label>
              <label className="radio-card">
                <input
                  type="radio"
                  name="tax"
                  value="usn_plus"
                  checked={formData.tax === "usn_plus"}
                  onChange={() => handleRadioChange("tax", "usn_plus")}
                />
                <span>УСН (Доходы)</span>
              </label>
              <label className="radio-card">
                <input
                  type="radio"
                  name="tax"
                  value="usn_minus"
                  checked={formData.tax === "usn_minus"}
                  onChange={() => handleRadioChange("tax", "usn_minus")}
                />
                <span>УСН (Д-Р)</span>
              </label>
            </div>
          </div>

          {error && <div className="form-error">{error}</div>}

          <button type="submit" className="submit-btn" disabled={isLoading}>
            {isLoading ? <span className="loader"></span> : "Отправить заявку"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
