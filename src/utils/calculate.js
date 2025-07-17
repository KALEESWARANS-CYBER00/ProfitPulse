export const calculateInvestment = ({ amount, rate, years, type }) => {
  const r = rate / 100;
  let finalAmount = 0;

  if (type === 'lump') {
    // Compound Interest: A = P(1 + r)^t
    finalAmount = amount * Math.pow(1 + r, years);
  } else {
    // SIP Formula: A = P × [(1 + r)^n – 1] / r
    const monthlyRate = r / 12;
    const n = years * 12;
    finalAmount = amount * ((Math.pow(1 + monthlyRate, n) - 1) / monthlyRate) * (1 + monthlyRate);
  }

  const invested = type === 'lump' ? amount : amount * 12 * years;
  const interest = finalAmount - invested;

  return { finalAmount, interest };
};
