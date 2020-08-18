document.getElementById('loan-form').addEventListener('submit', function (e) {

  document.querySelector('#results').style.display = 'none';
  document.querySelector('#loading').style.display = 'block';

  setTimeout(calculateResults, 2000);

  e.preventDefault();

});

function calculateResults(e) {

  const amount = document.querySelector('#amount');
  const interest = document.querySelector('#interest');
  const years = document.querySelector('#years');
  const monthlyPayment = document.querySelector('#monthly-payment');
  const totalPayment = document.querySelector('#total-payment');
  const totalInterest = document.querySelector('#total-interest');

  const calculatedAmount = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedYears = parseFloat(years.value) * 12;

  const x = Math.pow(1 + calculatedInterest, calculatedYears);
  const monthly = (calculatedAmount * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedYears).toFixed(2);
    totalInterest.value = ((monthly * calculatedYears) - calculatedAmount).toFixed(2);

    document.querySelector('#results').style.display = 'block';
    document.querySelector('#loading').style.display = 'none';

  } else {
    showError('Please check your numbers');
  }

}


function showError(error) {

  document.querySelector('#results').style.display = 'none';
  document.querySelector('#loading').style.display = 'none';

  const errorDiv = document.createElement('div');

  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  errorDiv.className = 'alert alert-danger';

  errorDiv.appendChild(document.createTextNode(error));

  card.insertBefore(errorDiv, heading);

  setTimeout(clearError, 3000);



}

function clearError() {
  document.querySelector('.alert').remove();
}