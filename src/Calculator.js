import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [ownerShipForm, setOwnerShipForm] = useState("ООО");
  const [taxSystem, setTaxSystem] = useState("ОСНО");
  const [combTax, setCombTax] = useState("Нет");
  const [separDev, setSeparDev] = useState("Нет");
  const [haveImp, setHaveImp] = useState("Нет");
  const [haveExp, sethaveExp] = useState("Нет");
  const [haveLizOrFakt, setHaveLizOrFakt] = useState("Нет");
  const [persRec, setPersRec] = useState(0);
  const [busPayments, setBusPayments] = useState(0);
  const [docsPerMonth, setDocsPerMonth] = useState(0);

  const calculate = () => {
    let finalSum = 0;

    // Форма собственности
    if (ownerShipForm === "ООО") {
      finalSum += 3500;
    } else if (ownerShipForm === "ИП") {
      finalSum += 1500;
    }

    // Система налогообложения
    if (taxSystem === "ОСНО") {
      finalSum += 8500;
    } else if (taxSystem === "УСН1") {
      finalSum += 4500;
    } else if (taxSystem === "УСН2") {
      finalSum += 6500;
    }

    // Совмещение режимов
    if (ownerShipForm === "ИП" && combTax === "Да") {
      finalSum *= 1.2;
    }

    // Обособленные подразделения
    if (ownerShipForm === "ООО" && separDev === "Да") {
      finalSum *= 1.2;
    }

    // Импорт
    if (haveImp === "Да") {
      finalSum *= 1.2;
    }

    //Экспорт
    if (haveExp === "Да") {
      finalSum *= 1.2;
    }

    //Лизинг, Факторинг
    if (haveLizOrFakt !== "Нет") {
      finalSum *= 1.15;
    }

    //Кадровый учет
    finalSum += persRec * 550;

    //Хозяйственные платежи
    finalSum += busPayments * 65;

    //Количество документов в месяц
    finalSum += docsPerMonth * 65;

    return finalSum;
  };

  const finalSum = calculate();

  return (
    <div className="calculatorSection" id="calculatorSection">
      <h1 className="calculator-tittle">Расчёт стоимости обслуживания</h1>
      <div className="calculator">
        <form className="calculator-form">
          <label className="calculator-label">
            Форма собственности:
            <select
              value={ownerShipForm}
              onChange={(e) => setOwnerShipForm(e.target.value)}
              className="calculator-select"
            >
              <option value="ООО">
                Общество с ограниченной ответственностью
              </option>
              <option value="ИП">Индивидуальный предприниматель</option>
            </select>
          </label>

          <br />

          <label className="calculator-label">
            Система налогообложения:
            <select
              value={taxSystem}
              onChange={(e) => setTaxSystem(e.target.value)}
              className="calculator-select"
            >
              <option value="ОСН">Общая система налогообложения</option>
              <option value="УСН1">
                Упрощенная система налогообложения(доходы минус расходы)
              </option>
              <option value="УСН2">
                Упрощенная система налогообложения(доходы)
              </option>
            </select>
          </label>

          <br />

          <label className="calculator-label">
            Применяется ли в Вашей организации совмещение налоговых режимов?
            <select
              value={combTax}
              onChange={(e) => setCombTax(e.target.value)}
              className="calculator-select"
            >
              <option value="Да">Да</option>
              <option value="Нет">Нет</option>
            </select>
          </label>

          <br />

          <label className="calculator-label">
            Есть ли у Вашей организации обособленные подразделения?
            <select
              value={separDev}
              onChange={(e) => setSeparDev(e.target.value)}
              className="calculator-select"
            >
              <option value="Да">Да</option>
              <option value="Нет">Нет</option>
            </select>
          </label>

          <br />

          <label className="calculator-label">
            Есть ли импорт в поступлениях?
            <select
              value={haveImp}
              onChange={(e) => setHaveImp(e.target.value)}
              className="calculator-select"
            >
              <option value="Да">Да</option>
              <option value="Нет">Нет</option>
            </select>
          </label>

          <br />

          <label className="calculator-label">
            Есть ли экспорт в поступлениях?
            <select
              value={haveExp}
              onChange={(e) => sethaveExp(e.target.value)}
              className="calculator-select"
            >
              <option value="Да">Да</option>
              <option value="Нет">Нет</option>
            </select>
          </label>

          <br />

          <label className="calculator-label">
            Есть ли лизинг или факторинг?
            <select
              value={haveLizOrFakt}
              onChange={(e) => setHaveLizOrFakt(e.target.value)}
              className="calculator-select"
            >
              <option value="Лизиинг">Лизиинг</option>
              <option value="Факторинг">Факторинг</option>
              <option value="ЛиФ">Лизиинг и Факторинг</option>
            </select>
          </label>

          <br />

          <label className="calculator-label">
            Количество наёмных сотрудников:
            <input
              type="number"
              value={persRec}
              onChange={(e) => setPersRec(Number(e.target.value))}
              className="calculator-input"
            />
          </label>

          <br />

          <label className="calculator-label">
            Хозяйственные платежи:
            <input
              type="number"
              value={busPayments}
              onChange={(e) => setBusPayments(Number(e.target.value))}
              className="calculator-input"
            />
            <p className="label-text">
              Если Вы хотите доверить нам функцию оплаты
              <br /> хозяйственных платежей (Вашим контрагентам), <br />
              то укажите примерное количество таких платежей <br /> в месяц{" "}
              (налоговые платежи уже входят в базовое <br />
              сопровождение)
            </p>
          </label>

          <br />

          <label className="calculator-label">
            Количество документов в месяц:
            <input
              type="number"
              value={docsPerMonth}
              onChange={(e) => setDocsPerMonth(Number(e.target.value))}
              className="calculator-input"
            />
          </label>
          <span className="total">
            Примерная стоимость обслуживания: {finalSum.toFixed(2)} руб.
          </span>
        </form>
      </div>
    </div>
  );
};

export default Calculator;
