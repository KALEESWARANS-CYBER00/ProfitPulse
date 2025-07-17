import { useState } from 'react';
import InputForm from '../components/InputForm';
import ResultCard from '../components/ResultCard';
import { calculateInvestment } from '../utils/calculate';
import Modal from '../components/Modal';

const Calculator = () => {
  const [result, setResult] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleCalculate = (data) => {
    setResult(calculateInvestment(data));
    setShowModal(true);
  };

  return (
    <div className="page-container">

      <InputForm onCalculate={handleCalculate} />
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ResultCard result={result} />
        </Modal>
      )}
    </div>
  );
};

export default Calculator;
