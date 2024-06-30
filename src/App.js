import React, { useState } from 'react';
import './App.css';
function App() {
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [newTransactionText, setNewTransactionText] = useState('');
  const [newTransactionAmount, setNewTransactionAmount] = useState('');

  const addTransaction = () => {
    if (newTransactionText && newTransactionAmount) {
      const amount = parseFloat(newTransactionAmount);
      const newTransaction = { text: newTransactionText, amount };
      setTransactions([...transactions, newTransaction]);
      if (amount < 0) {
        setExpense(expense + Math.abs(amount));
      } else {
        setIncome(income + amount);
      }
      setBalance(balance + amount);
      setNewTransactionText('');
      setNewTransactionAmount('');
    }
  };

  return (
    <div>
      <h3>YOUR BALANCE</h3>
      <h1>{balance.toFixed(2)} MAD</h1>
      <table border={1}>
        <tbody>
          <tr>
            <td><b>INCOME</b> <br/> {income.toFixed(2)} MAD</td>
            <td> | </td>
            <td><b>EXPENSE</b> <br/> {expense.toFixed(2)} MAD</td>
          </tr>
        </tbody>
      </table>
      <b>History</b>
      <table border={2}>
        <thead>
          <tr>
            <th>Text</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t, i) => (
            <tr key={i}>
              <td>{t.text}</td>
              <td> {t.amount.toFixed(2)} MAD</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <b>Add new transaction</b><br/>
        <hr/>
        <label>Text</label><br/>
        <input
            type="text"
            value={newTransactionText}
            onChange={(e) => setNewTransactionText(e.target.value)}
        /><br/>
        <label>
          Amount <br/> (negative-expense, positive-income)
        </label><br/>
        <input
            type="number"
            value={newTransactionAmount}
            onChange={(e) => setNewTransactionAmount(e.target.value)}
        /><br/>
        <button onClick={addTransaction}>Add transaction</button>
      </div>
    </div>
  );
}

export default App;
