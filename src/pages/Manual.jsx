import './manual.css';

const Manual = () => (
  <div className="manual-section">
    <h2>📘 <span className="highlight">User Manual</span></h2>
    <p className="manual-intro">
      Follow these simple steps to forecast your investments using <strong>ProfitPulse</strong>.
    </p>
    <ol className="manual-steps">
      <li><strong>Enter Investment Amount:</strong> Provide the lump sum or monthly SIP value.</li>
      <li><strong>Select Investment Type:</strong> Choose between Lump Sum or SIP mode.</li>
      <li><strong>Set Parameters:</strong> Input the expected annual return (%) and investment duration (in years).</li>
      <li><strong>Click Calculate:</strong> Instantly view your estimated returns and growth projection.</li>
    </ol>
    <p className="manual-note">
      💡 Tip: Use different values to compare scenarios and make smarter investment decisions.
    </p>
  </div>
);

export default Manual;
