export function renderMortgage(container) {
    container.innerHTML = `
      <h2>מחשבון משכנתא</h2>
      <form id="mortgage-form">
        <label>סכום הלוואה (₪):<input type="number" id="m-amount" required></label>
        <label>ריבית שנתית (%):<input type="number" step="0.01" id="m-rate" required></label>
        <label>תקופה (שנים):<input type="number" id="m-years" required></label>
        <button type="submit">חשב</button>
      </form>
      <div class="result" id="mortgage-result"></div>
    `;
    const f = container.querySelector('#mortgage-form');
    f.addEventListener('submit', e => {
      e.preventDefault();
      const P = +f.querySelector('#m-amount').value;
      const annualRate = +f.querySelector('#m-rate').value / 100;
      const n = +f.querySelector('#m-years').value * 12;
      const r = annualRate / 12;
      // נוסחת שפיצר
      const M = (P * r * Math.pow(1+r, n)) / (Math.pow(1+r, n) - 1);
      const total = M * n;
      const interest = total - P;
      container.querySelector('#mortgage-result').innerHTML = `
        החזר חודשי: <strong>₪${M.toFixed(2)}</strong><br>
        סך תשלומים: <strong>₪${total.toFixed(2)}</strong><br>
        סך הריבית: <strong>₪${interest.toFixed(2)}</strong>
      `;
    });
  }
  