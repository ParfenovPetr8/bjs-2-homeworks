"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  
  if (discriminant === 0) {
    let squareRoot = -b / (2 * a);
    arr.push(squareRoot);
  } else if (discriminant > 0) {
    let squareRootFirst = (-b + Math.sqrt(discriminant)) / (2 * a);
    let squareRootSecond = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(squareRootFirst, squareRootSecond);
  }

  return arr;
}

solveEquation();

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let interestRateMonth = percent / (12 * 100);
  let P = interestRateMonth; 
  let n = countMonths; 
  let loanBody = amount - contribution;
  let S = loanBody; 
  let monthlyPayment = S * (P + P / (Math.pow(1 + P, n) - 1));
  let totalAmount = monthlyPayment * countMonths;
  return Number(totalAmount.toFixed(2));
}

calculateTotalMortgage();