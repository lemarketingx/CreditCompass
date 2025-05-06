import { renderMortgage }    from './mortgageCalculator.js';
import { renderLoan }        from './loanCalculator.js';
import { renderPension }     from './pensionCalculator.js';
import { renderInvestment }  from './investmentCalculator.js';
import { renderBudget }      from './budgetCalculator.js';
import { renderSalary }      from './salaryCalculator.js';
import { renderTax }         from './taxCalculator.js';
import { renderInsurance }   from './insuranceCalculator.js';

const modules = {
  mortgage:   renderMortgage,
  loan:       renderLoan,
  pension:    renderPension,
  investment: renderInvestment,
  budget:     renderBudget,
  salary:     renderSalary,
  tax:        renderTax,
  insurance:  renderInsurance,
};

const navButtons = document.querySelectorAll('nav button');
const mainEl      = document.getElementById('main');

navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // סימון כפתור נבחר
    navButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    // טעינת המודול
    const key = btn.dataset.calc;
    mainEl.innerHTML = '';
    modules[key](mainEl);
  });
});

// טעינה ראשונית
modules.mortgage(mainEl);
