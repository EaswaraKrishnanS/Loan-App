export const useEMICalculator = (principal, rate, term) => {
  const R = rate / 12 / 100;
  const N = term * 12;
  const EMI = (principal * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
  return Math.round(EMI);
};
