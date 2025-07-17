import './manual.css';

const Manual = () => (
  <div className="manual-section">
    <h2>📘 <span className="highlight">User Manual</span></h2>
    <p className="manual-intro">
      Follow these simple steps to forecast your investments using <strong>ProfitPulse</strong>.
    </p>
    <ol className="manual-steps">
      <li>
        <strong>Enter Investment Amount:</strong> Provide either a one-time investment amount or a monthly SIP value.
      </li>
      <li>
        <strong>Select Investment Type:</strong> Choose between <em>One-Time Investment</em> or <em>Recurring SIP</em>.
      </li>
      <li>
        <strong>Set Parameters:</strong> Input the expected annual return rate (%) and investment duration (in years).
      </li>
      <li>
        <strong>Click Calculate:</strong> Instantly view your projected future value and total interest earned.
      </li>
    </ol>
    <p className="manual-note">
      💡 <strong>Tip:</strong> Experiment with different values to compare scenarios and optimize your investment strategy.
    </p>
  </div>
);

export default Manual;
