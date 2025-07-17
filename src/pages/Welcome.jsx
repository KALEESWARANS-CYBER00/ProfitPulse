import { useNavigate } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <section className="welcome-section">
      <h1>🚀 Welcome to ProfitPulse</h1>
      <p>Your Smart Investment Calculator</p>
      <div className="welcome-buttons">
        <button onClick={() => navigate('/calculator')}>Start Calculator</button>
        <button onClick={() => navigate('/about')}>About</button>
        <button onClick={() => navigate('/manual')}>Manual</button>
      </div>
    </section>
  );
};

export default Welcome;
