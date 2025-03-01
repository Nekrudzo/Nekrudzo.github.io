import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
    const [ownershipForm, setOwnershipForm] = useState('ООО');
    const [taxSystem, setTaxSystem] = useState('ОСН');
    const [incomesPerMonth, setIncomesPerMonth] = useState(0);
    const [salesPerMonth, setSalesPerMonth] = useState(0);
  
    // Простая функция для расчетов
    const calculate = () => {
      let taxRate = 0;
      if (taxSystem === 'ОСН') {
        taxRate = 0.2; // Примерная ставка НДС для ОСН
      } else if (taxSystem === 'УСН') {
        taxRate = 0.06; // Примерная ставка для УСН
      }
  
      const incomeTax = incomesPerMonth * taxRate;
      const salesTax = salesPerMonth * taxRate;
  
      return {
        incomeTax: incomeTax.toFixed(2),
        salesTax: salesTax.toFixed(2),
      };
    };
  
    const { incomeTax, salesTax } = calculate();
  
    return (
      <div>
        <h1>Рассчёт стоимости обслуживания</h1>
        <form>
          <label>
            Форма собственности:
            <select value={ownershipForm} onChange={(e) => setOwnershipForm(e.target.value)}>
              <option value="ООО">Общество с ограниченной ответственностью</option>
              <option value="ИП">Индивидуальный предприниматель</option>
              {/* Добавьте другие варианты форм собственности по необходимости */}
            </select>
          </label>
  
          <br />
  
          <label>
            Система налогообложения:
            <select value={taxSystem} onChange={(e) => setTaxSystem(e.target.value)}>
              <option value="ОСН">Общая система налогообложения</option>
              <option value="УСН1">Упрощенная система налогообложения(доходы минус расходы)</option>
              <option value="УСН2">Упрощенная система налогообложения(доходы)</option>
              {/* Добавьте другие системы налогообложения по необходимости */}
            </select>
          </label>
  
          <br />

          <label>
          Применяется ли в Вашей организации совмещение налоговых режимов?
            <select value={taxSystem} onChange={(e) => setTaxSystem(e.target.value)}>
              <option value="Да">Да</option>
              <option value="Нет">Нет</option>
              {/* Добавьте другие системы налогообложения по необходимости */}
            </select>
          </label>

          <br />

          <label>
          Есть ли у Вашей организации обособленные подразделения?
            <select value={taxSystem} onChange={(e) => setTaxSystem(e.target.value)}>
              <option value="Да">Да</option>
              <option value="Нет">Нет</option>
              {/* Добавьте другие системы налогообложения по необходимости */}
            </select>
          </label>

          <br />

          <label>
          Есть ли импорт в поступлениях?
            <select value={taxSystem} onChange={(e) => setTaxSystem(e.target.value)}>
              <option value="Да">Да</option>
              <option value="Нет">Нет</option>
              {/* Добавьте другие системы налогообложения по необходимости */}
            </select>
          </label>

          <br />

          <label>
          Есть ли экспорт в поступлениях?
            <select value={taxSystem} onChange={(e) => setTaxSystem(e.target.value)}>
              <option value="Да">Да</option>
              <option value="Нет">Нет</option>
              {/* Добавьте другие системы налогообложения по необходимости */}
            </select>
          </label>

          <br />

          <label>
          Есть ли лизинг или факторинг?
            <select value={taxSystem} onChange={(e) => setTaxSystem(e.target.value)}>
              <option value="Лизиинг">Лизиинг</option>
              <option value="Факторинг">Факторинг</option>
              <option value="ЛиФ">Лизиинг и Факторинг</option>
              {/* Добавьте другие системы налогообложения по необходимости */}
            </select>
          </label>

          <br />

          <label>
          Кадровый учёт и заработная плата сотрудников
            <select value={taxSystem} onChange={(e) => setTaxSystem(e.target.value)}>
              <option value="<10">До 10</option>
              <option value="<20">До 20</option>
              <option value="<50">До 50</option>
              {/* Добавьте другие системы налогообложения по необходимости */}
            </select>
          </label>

          <br />

          <label>
          Хозяйственные платежи
          <p className="label-text">Если Вы хотите доверить нам функцию оплаты хозяйственных платежей (Вашим контрагентам), то укажите примерное количество таких платежей в месяц (налоговые платежи уже входят в базовое сопровождение)</p>
            <select value={taxSystem} onChange={(e) => setTaxSystem(e.target.value)}>
              <option value="<10">До 10</option>
              <option value="<20">До 20</option>
              <option value="<50">До 50</option>
              {/* Добавьте другие системы налогообложения по необходимости */}
            </select>
          </label>

          <br />
  
          <label>
            Количество документов в месяц:
            <input type="number" value={incomesPerMonth} onChange={(e) => setIncomesPerMonth(Number(e.target.value))} />
          </label>
          <span>Примерная стоимость обслуживания: {incomeTax} руб.</span>
        </form>
      </div>
    );
};
  
  export default Calculator;