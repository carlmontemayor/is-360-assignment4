function calculateLoanPayment() {
  // Take in and parse inputs
  const loanAmount = parseFloat(document.getElementById("loanAmount").value);
  const numberOfPeriods = parseFloat(
    document.getElementById("numberOfPeriods").value
  );
  const interestRate = parseFloat(
    document.getElementById("interestRate").value
  );

  // We have to convert the values
  const numberOfPeriodsInMonths = numberOfPeriods * 12;
  const interestRateInPercentages = interestRate / 1200;
  const monthlyPayment =
    (loanAmount * interestRateInPercentages) /
    (1 -
      Math.pow(1 / (1 + interestRateInPercentages), numberOfPeriodsInMonths));

  document.getElementById("result").value = Number.isNaN(monthlyPayment)
    ? "$0.0"
    : "$" + monthlyPayment.toFixed(2);
}
