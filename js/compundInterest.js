function computeCompoundInterest() {
  const initialInvestmentAmount = document.getElementById(
    "initialInvestmentAmount"
  ).value;
  const numberOfPeriods = document.getElementById("numberOfPeriods").value;
  const interestRatePerPeriod = document.getElementById("interestRatePerPeriod")
    .value;

  const numberOfMonths = numberOfPeriods * 12;
  const ratePerYear = interestRatePerPeriod / 100;

  const compoundInterestResult =
    initialInvestmentAmount / Math.pow(1 + ratePerYear / 12, numberOfMonths);

  document.getElementById("result").value =
    "$" + compoundInterestResult.toFixed(2);
}
