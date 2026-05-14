import React, { useState } from "react";
import "./Calculator.css"; // CSS теперь в той же папке — путь не меняем

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

    if (ownerShipForm === "ООО") finalSum += 3500;
    else if (ownerShipForm === "ИП") finalSum += 1500;

    if (taxSystem === "ОСН") finalSum += 8500;
    else if (taxSystem === "УСН1") finalSum += 4500;
    else if (taxSystem === "УСН2") finalSum += 6500;

    if (ownerShipForm === "ИП" && combTax === "Да") finalSum *= 1.2;
    if (ownerShipForm === "ООО" && separDev === "Да") finalSum *= 1.2;
    if (haveImp === "Да") finalSum *= 1.2;
    if (haveExp === "Да") finalSum *= 1.2;
    if (haveLizOrFakt !== "Нет") finalSum *= 1.15;

    finalSum += persRec * 550;
    finalSum += busPayments * 65;
    finalSum += docsPerMonth * 65;

    return finalSum;
  };

  const finalSum = calculate();

  return (
    <div className="calculatorSection" id="calculatorSection">
      <h1 className="calculator-tittle">Расчёт стоимости обслуживания</h1>
      <div className="calculator">
        <form className="calculator-form">
          {/* ... весь код формы без изменений ... */}
          <label className="calculator-label">
            Форма собственности:
            <br />
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
          {/* ... остальные поля формы ... */}
          <span className="total">
            Примерная стоимость обслуживания: {finalSum.toFixed(2)} руб.
          </span>
        </form>
      </div>
    </div>
  );
};

export default Calculator;
