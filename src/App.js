import React from 'react';
import MortgageCalculator from './components/MortgageCalculator';
import LoanCalculator from './components/LoanCalculator';
import RetirementCalculator from './components/RetirementCalculator';
import InvestmentCalculator from './components/InvestmentCalculator';
import BudgetPlanner from './components/BudgetPlanner';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>CreditCompass</h1>
      <MortgageCalculator />
      <LoanCalculator />
      <RetirementCalculator />
      <InvestmentCalculator />
      <BudgetPlanner />
    </div>
  );
}

export default App;
