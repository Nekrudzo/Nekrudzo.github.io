import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [ownershipForm, setOwnershipForm] = useState("ООО");
  const [taxSystem, setTaxSystem] = useState("ОСН");
  const [combTax, setCombTax] = useState("Да");
  const [separDev, setSeparDev] = useState("Да");
  const [haveImp, setHaveImp] = useState("Да");
  const [haveExp, sethaveExp] = useState("Да");
  const [haveLizOrFakt, setHaveLizOrFakt] = useState("Лизинг");
  const [persRec, setPersRec] = useState("10");
  const [docsPerMonth, setDocsPerMonth] = useState(0);

  // Простая функция для расчетов
  const calculate = () => {
    let taxRate = 0;
    if (taxSystem === "ОСН") {
      taxRate = 0.2; // Примерная ставка НДС для ОСН
    } else if (taxSystem === "УСН1") {
      taxRate = 0.06; // Примерная ставка для УСН
    } else if (taxSystem === "УСН2") {
      taxRate = 0.08;
    }

    const incomeTax = docsPerMonth * taxRate;

    return {
      incomeTax: incomeTax.toFixed(2),
    };
  };

  const { incomeTax } = calculate();

  return (
    <div className="calculatorSection" id="calculatorSection">
      <h1 className="calculator-tittle">Рассчёт стоимости обслуживания</h1>
      <div className="calculator">
        <form className="calculator-form">
          <label className="calculator-label">
            Форма собственности:
            <select
              value={ownershipForm}
              onChange={(e) => setOwnershipForm(e.target.value)}
            >
              <option value="ООО">
                Общество с ограниченной ответственностью
              </option>
              <option value="ИП">Индивидуальный предприниматель</option>
              {/* Добавьте другие варианты форм собственности по необходимости */}
            </select>
          </label>

          <br />

          <label className="calculator-label">
            Система налогообложения:
            <select
              value={taxSystem}
              onChange={(e) => setTaxSystem(e.target.value)}
            >
              <option value="ОСН">Общая система налогообложения</option>
              <option value="УСН1">
                Упрощенная система налогообложения(доходы минус расходы)
              </option>
              <option value="УСН2">
                Упрощенная система налогообложения(доходы)
              </option>
              {/* Добавьте другие системы налогообложения по необходимости */}
            </select>
          </label>

          <br />

          <label className="calculator-label">
            Применяется ли в Вашей организации совмещение налоговых режимов?
            <select
              value={taxSystem}
              onChange={(e) => setTaxSystem(e.target.value)}
            >
              <option value="Да">Да</option>
              <option value="Нет">Нет</option>
              {/* Добавьте другие системы налогообложения по необходимости */}
            </select>
          </label>

          <br />

          <label className="calculator-label">
            Есть ли у Вашей организации обособленные подразделения?
            <select
              value={taxSystem}
              onChange={(e) => setTaxSystem(e.target.value)}
            >
              <option value="Да">Да</option>
              <option value="Нет">Нет</option>
              {/* Добавьте другие системы налогообложения по необходимости */}
            </select>
          </label>

          <br />

          <label className="calculator-label">
            Есть ли импорт в поступлениях?
            <select
              value={taxSystem}
              onChange={(e) => setTaxSystem(e.target.value)}
            >
              <option value="Да">Да</option>
              <option value="Нет">Нет</option>
              {/* Добавьте другие системы налогообложения по необходимости */}
            </select>
          </label>

          <br />

          <label className="calculator-label">
            Есть ли экспорт в поступлениях?
            <select
              value={taxSystem}
              onChange={(e) => setTaxSystem(e.target.value)}
            >
              <option value="Да">Да</option>
              <option value="Нет">Нет</option>
              {/* Добавьте другие системы налогообложения по необходимости */}
            </select>
          </label>

          <br />

          <label className="calculator-label">
            Есть ли лизинг или факторинг?
            <select
              value={taxSystem}
              onChange={(e) => setTaxSystem(e.target.value)}
            >
              <option value="Лизиинг">Лизиинг</option>
              <option value="Факторинг">Факторинг</option>
              <option value="ЛиФ">Лизиинг и Факторинг</option>
              {/* Добавьте другие системы налогообложения по необходимости */}
            </select>
          </label>

          <br />

          <label className="calculator-label">
            Кадровый учёт и заработная плата сотрудников
            <select
              value={taxSystem}
              onChange={(e) => setTaxSystem(e.target.value)}
            >
              <option value="<10">До 10</option>
              <option value="<20">До 20</option>
              <option value="<50">До 50</option>
              {/* Добавьте другие системы налогообложения по необходимости */}
            </select>
          </label>

          <br />

          <label className="calculator-label">
            Хозяйственные платежи
            <p className="label-text">
              Если Вы хотите доверить нам функцию оплаты
              <br /> хозяйственных платежей (Вашим контрагентам), <br />
              то укажите примерное количество таких платежей <br /> в месяц{" "}
              (налоговые платежи уже входят в базовое <br />
              сопровождение)
            </p>
            <select
              value={taxSystem}
              onChange={(e) => setTaxSystem(e.target.value)}
            >
              <option value="<10">До 10</option>
              <option value="<20">До 20</option>
              <option value="<50">До 50</option>
              {/* Добавьте другие системы налогообложения по необходимости */}
            </select>
          </label>

          <br />

          <label className="calculator-label">
            Количество документов в месяц:
            <input
              type=""
              value={docsPerMonth}
              onChange={(e) => setDocsPerMonth(Number(e.target.value))}
            />
          </label>
          <span className="total">
            Примерная стоимость обслуживания: {docsPerMonth} руб.
          </span>
        </form>
      </div>
    </div>
  );
};

export default Calculator;
