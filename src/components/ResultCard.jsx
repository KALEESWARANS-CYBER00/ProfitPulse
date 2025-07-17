import './ResultCard.css';

const ResultCard = ({ result }) => {
  if (!result) return null;

  const formatCurrency = (amount) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 2,
    }).format(amount);

  return (
    <div className="result-card" role="region" aria-label="Calculation Results">
      <h3 className="result-title">📊 Results</h3>
      <p>
        <strong>Future Value:</strong> {formatCurrency(result.finalAmount)}
      </p>
      <p>
        <strong>Total Interest:</strong> {formatCurrency(result.interest)}
      </p>
    </div>
  );
};

export default ResultCard;
