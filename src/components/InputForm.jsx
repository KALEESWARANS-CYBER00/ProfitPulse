import { useState } from 'react';
import './InputForm.css';
import Toast from './Toast';

const InputForm = ({ onCalculate }) => {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [type, setType] = useState('lump');
  const [toastMessage, setToastMessage] = useState('');

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!amount || !rate || !years) {
    setToastMessage('All fields are required.');
    return;
  }

  const parsedAmount = parseFloat(amount);
  const parsedRate = parseFloat(rate);
  const parsedYears = parseFloat(years);


  if (isNaN(parsedAmount) || isNaN(parsedRate) || isNaN(parsedYears)) {
    setToastMessage('Please enter valid numeric values.');
    return;
  }

  if (parsedAmount <= 0) {
    setToastMessage('Amount must be greater than 0.');
    return;
  }

  if (parsedRate <= 0 || parsedRate > 100) {
    setToastMessage('Interest rate must be between 0 and 100%.');
    return;
  }

  if (parsedYears <= 0 || parsedYears > 100) {
    setToastMessage('Duration must be between 1 and 100 years.');
    return;
  }

  setToastMessage('');

  onCalculate({
    amount: parsedAmount,
    rate: parsedRate,
    years: parsedYears,
    type,
  });
};


  return (
    <div className="form-container">
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage('')} />
      )}

      <form onSubmit={handleSubmit} className="investment-form" noValidate>
        <h2 className="form-title">Investment Calculator</h2>

        <div className="form-group">
          <label htmlFor="amount">Initial Amount (₹)</label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="0"
            step="any"
            placeholder="e.g., 100000"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="rate">Annual Interest Rate (%)</label>
          <input
            id="rate"
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            min="0"
            step="any"
            placeholder="e.g., 8"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="years">Investment Duration (Years)</label>
          <input
            id="years"
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            min="1"
            step="1"
            placeholder="e.g., 5"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="type">Investment Type</label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="lump">Lump Sum</option>
            <option value="sip">SIP (Monthly)</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">
          Calculate
        </button>
      </form>
    </div>
  );
};

export default InputForm;
