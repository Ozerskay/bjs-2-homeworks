"use strict"
function solveEquation(a, b, c) {
  let d = b** -4*a*c;
  let x1, x2;
  let arr = [];
    if (d == 0) {
    return x1 = -b/(2*a);
  } else if (d > 0) {
   arr.push(-b + Math.sqrt(d) ) / (2*a);
   arr.push(-b - Math.sqrt(d) )/(2*a);
  }
  return d;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

    if (isNaN(percent)) || isNaN(contribution) || (isNaN(amount)) || (isNaN(countMonths)) {
      return false;
    } 
    let P = percent / 100 / 12;
    let S = amount - contribution;
    let M = S * (P + (P / (Math.pow(1 + P, countMonths) - 1)));
    return Number(sum.toFixed(2));
}