// --- ניהול טאבים עליונים ---
document.querySelectorAll('.tabs button').forEach(btn=>{
    btn.addEventListener('click',()=>{
      // הסרת active מכל הכפתורים והפאנלים
      document.querySelectorAll('.tabs button, .panel').forEach(el=>el.classList.remove('active'));
      // הוספת ללבחירה
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.add('active');
      // איפוס תוצאות
      document.querySelectorAll('.results').forEach(r=>r.textContent = '');
    });
  });
  
  // --- ניהול subtabs זכאות ---
  document.querySelectorAll('.subtabs button').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.subtabs button, .elig-form').forEach(el=>el.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('form-' + btn.dataset.elig).classList.add('active');
      document.getElementById('eligibilityResults').textContent = '';
    });
  });
  // אתחל subtabs
  document.querySelector('#form-family').classList.add('active');
  
  // --- חישוב משכנתא ---
  function calculateMortgage(){
    const P = +loanAmount.value;
    const n = +loanTerm.value * 12;
    const r = +loanRate.value / 100 / 12;
    const m = (P * r) / (1 - Math.pow(1 + r, -n));
    mortgageResults.textContent = `החזר חודשי: ₪${m.toFixed(0)}`;
  }
  
  // --- חישוב זכאות משפחה ---
  function calculateFamily(){
    const score = marry_years.value*10
                  + children.value*50
                  + brothersH.value*20
                  + brothersW.value*20;
    const ok = score >= 600 ? 'כן' : 'לא';
    eligibilityResults.textContent = `ניקוד: ${score} · זכאי? ${ok}`;
  }
  
  // --- חישוב זכאות רווק ---
  function calculateSingle(){
    const score = +age.value*5
                  + +siblings.value*20
                  + +service.value*2;
    const ok = score >= 300 ? 'כן' : 'לא';
    eligibilityResults.textContent = `ניקוד: ${score} · זכאי? ${ok}`;
  }
  