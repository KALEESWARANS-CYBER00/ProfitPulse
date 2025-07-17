import './ResultCard.css';

const ResultCard = ({ result }) => {
  if (!result) return null;

  return (
    <div className="result-card">
      <h3>📊 Results</h3>
      <p><strong>Future Value:</strong> ₹{result.finalAmount.toFixed(2)}</p>
      <p><strong>Total Interest:</strong> ₹{result.interest.toFixed(2)}</p>
    </div>
  );
};

export default ResultCard;
