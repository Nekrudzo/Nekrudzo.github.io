import React, { useState, useRef } from "react";
import { useIMask } from "react-imask";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    ooo: true,
    ip: false,
    osno: true,
    usnPlus: false,
    usnMinus: false,
  });

  const [errors, setErrors] = useState({});

  const phoneRef = useRef(null);

  useIMask(phoneRef, {
    mask: "+{7} (000) 000-00-00",
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Пожалуйста, введите ваше имя";
    }

    const phonePattern = /^\+7\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$/;
    if (!phonePattern.test(formData.phone)) {
      newErrors.phone =
        "Пожалуйста, введите корректный номер телефона в формате +7 (___) ___-__-__";
    }

    if (!formData.ooo && !formData.ip) {
      newErrors.selfOwnership = "Пожалуйста, выберите форму собственности";
    }

    if (!formData.osno && !formData.usnPlus && !formData.usnMinus) {
      newErrors.taxSystem = "Пожалуйста, выберите систему налогообложения";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const dataToSend = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      selfOwnership: {
        ooo: formData.ooo,
        ip: formData.ip,
      },
      taxSystem: {
        osno: formData.osno,
        usnPlus: formData.usnPlus,
        usnMinus: formData.usnMinus,
      },
    };

    fetch("https://example.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Заявка успешно отправлена!");
          setFormData({
            name: "",
            phone: "",
            ooo: true,
            ip: false,
            osno: true,
            usnPlus: false,
            usnMinus: false,
          });
          setErrors({});
        } else {
          alert(
            "Произошла ошибка при отправке заявки. Пожалуйста, попробуйте снова."
          );
        }
      })
      .catch((error) => {
        console.error("Ошибка:", error);
        alert(
          "Произошла ошибка при отправке заявки. Пожалуйста, попробуйте снова."
        );
      });
  };

  return (
    <form
      id="container-form"
      className="container-form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        id="name"
        name="name"
        className="name-input"
        placeholder="Ваше имя"
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && <div className="error">{errors.name}</div>}
      <input
        ref={phoneRef}
        type="tel"
        id="phone"
        name="phone"
        className="phone-input"
        placeholder="+7 (___) ___-__-__"
        value={formData.phone}
        onChange={handleChange}
      />
      {errors.phone && <div className="error">{errors.phone}</div>}
      <div className="self-form">
        <label>Форма собственности</label>
        <div className="form-item">
          <input
            type="checkbox"
            id="ooo-box"
            name="ooo"
            className="checkbox"
            checked={formData.ooo}
            onChange={handleChange}
          />
          <p>OOO</p>
        </div>
        <div className="form-item">
          <input
            type="checkbox"
            id="ip-box"
            name="ip"
            className="checkbox"
            checked={formData.ip}
            onChange={handleChange}
          />
          <p>ИП</p>
        </div>
      </div>
      {errors.selfOwnership && (
        <div className="error">{errors.selfOwnership}</div>
      )}
      <div className="tax-form">
        <label>Система налогообложения</label>
        <div className="form-item">
          <input
            type="checkbox"
            id="osno-box"
            name="osno"
            className="checkbox"
            checked={formData.osno}
            onChange={handleChange}
          />
          <p>ОСНО</p>
        </div>
        <div className="form-item">
          <input
            type="checkbox"
            id="ysnPlus-box"
            name="usnPlus"
            className="checkbox"
            checked={formData.usnPlus}
            onChange={handleChange}
          />
          <p>УСН (доходы)</p>
        </div>
        <div className="form-item">
          <input
            type="checkbox"
            id="ysnMinus-box"
            name="usnMinus"
            className="checkbox"
            checked={formData.usnMinus}
            onChange={handleChange}
          />
          <p>УСН (доходы минус расходы)</p>
        </div>
      </div>
      {errors.taxSystem && <div className="error">{errors.taxSystem}</div>}
      <div className="callBut">
        <button className="callMeButton" id="callMeButton" type="submit">
          Перезвоните мне
        </button>
      </div>
      <div className="policy">
        <p>
          Нажимая эту кнопку, я даю согласие на обработку персональных данных и
          соглашаюсь с{" "}
          <a
            href="https://vk.com/doc-41256460_450831081?dl=5b3c3f0038003652ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            политикой конфиденциальности
          </a>
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
