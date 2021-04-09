// Calculates the maximum affordable monthly house payment
function calculateMaxAffordableHousePayment() {
  // Fetch the values of the aproppriate form inputs
  const grossMonthlyIncome = document.getElementById("familyGrossIncome").value;
  const expenses = document.getElementById("expenses").value;

  // Parse the input
  const parsedGrossMonthlyIncome = parseFloat(grossMonthlyIncome);
  const parsedTotalExpenses = parseFloat(expenses);

  var maxAffordableHousePayment = 0;
  var percentageUsed = 0.29;
  if (
    parsedTotalExpenses * 0.29 <
    (parsedGrossMonthlyIncome - parsedTotalExpenses) * 0.39
  ) {
    maxAffordableHousePayment = parsedTotalExpenses * 0.29;
  } else {
    maxAffordableHousePayment =
      (parsedGrossMonthlyIncome - parsedTotalExpenses) * 0.39;
    percentageUsed = 0.39;
  }

  // Instead of returning, render it onto the screen.
  document.getElementById("result").value =
    Number.isNaN(maxAffordableHousePayment) || maxAffordableHousePayment < 0
      ? "0.0"
      : "$" + maxAffordableHousePayment.toFixed(2);
  document.getElementById("percentageUsed").value = percentageUsed + "%";
}
