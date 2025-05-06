export function renderLoan(container) {
    container.innerHTML = `
      <h2>מחשבון הלוואה</h2>
      <form id="loan-form">
        <label>סכום הלוואה (₪):<input type="number" id="l-amount" required></label>
        <label>ריבית שנתית (%):<input type="number" step="0.01" id="l-rate" required></label>
        <label>תקופה (שנים):<input type="number" id="l-years" required></label>
        <button type="submit">חשב</button>
      </form>
      <div class="result" id="loan-result"></div>
    `;
    const f = container.querySelector('#loan-form');
    f.addEventListener('submit', e => {
      e.preventDefault();
      const P = +f.querySelector('#l-amount').value;
      const annualRate = +f.querySelector('#l-rate').value / 100;
      const n = +f.querySelector('#l-years').value * 12;
      const r = annualRate / 12;
      const M = (P * r * Math.pow(1+r, n)) / (Math.pow(1+r, n) -1);
      const total = M * n;
      const interest = total - P;
      container.querySelector('#loan-result').innerHTML = `
        החזר חודשי: <strong>₪${M.toFixed(2)}</strong><br>
        סך תשלומים: <strong>₪${total.toFixed(2)}</strong><br>
        סך הריבית: <strong>₪${interest.toFixed(2)}</strong>
      `;
    });
  }
  