# Loan Calculator
 JS simple project for beginners

## Inspiration
This app is based on courses by Brad Traversy from Udemy

## What I Did To Make The Project Even Better


## What I learned
* method: value, toFixed, insertBefore(), setTimeout()
* function: parseFloat, Math.pow, isFinite

- calls a function or evaluates an expression after a specified number of milliseconds
- parseFloat : function parses an argument and returns a floating point number
- Math.pow : function returns the base to the exponent power

## How to build
<strong> [ Step 1. Calculator & Error ] </strong>

1. Listen for submit
* add event to ID:loan-form after submit call calculateResults
2. Calculate Results
* define function calculateResults
* define UI Variables
ID: amount, interest, years, monthly-payment, total-payment
total-interest
* plus : amount.value, interest.value, years.value
* parses an argument and returns a floating point number       

* Blocking default click handling

3. compute monthly payment - refer to video

4. define showError
* define variable and create a div 
* define variables class:card, class:heading
* add class 'alert alert-danger'
* create text node and append to div
* insert error above heading
* clear error after 3 seconds

5. clear error
* define function 'clearError'
  - remove class alert

[Loader & UserExperience]
1. show loader in HTML
2. hide id:loading, results
3. remove syntax preventDefault
4. fix ID:loan-form replace calculateResults to event funtion
* hide ID:results
* show ID:loading
* set timer after 2 seconds
5. show results & hide loader in IF statement of function calculateResults
6. Hide results & Hdie loader in contents of function showError

