import { useState } from 'react';
import './InputForm.css';

const InputForm = ({ onCalculate }) => {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [type, setType] = useState('lump');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate({
      amount: +amount,
      rate: +rate,
      years: +years,
      type,
    });
  };

 return (
  <div className="form-container">
    <form onSubmit={handleSubmit}>
      <h2> Investment Calculator</h2>
      <input
        type="number"
        placeholder="Initial Amount (₹)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Annual Interest Rate (%)"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Time (Years)"
        value={years}
        onChange={(e) => setYears(e.target.value)}
        required
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="lump">Lump Sum</option>
        <option value="sip">SIP (Monthly)</option>
      </select>
      <button type="submit">Calculate</button>
    </form>
  </div>
);
};

export default InputForm;
