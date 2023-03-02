"use strict"
function solveEquation(a, b, c) {
  let D = b** -4*a*c;
  let x1, x2;
  let arr = [];
  if (D < 0) {
    console.log("Корней нет")
  } else if (D == 0) {
    return x1 = -b/(2*a);
  } else if (D > 0) {
    x1 = (-b + Math.sqrt(d) ) / (2*a);
    x2 = (-b - Math.sqrt(d) )/(2*a);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

    if (isNaN(percent)) {
      return false;
    }
    if (isNaN(contribution)) {
      return false;
    }
    if (isNaN(amount)) {
      return false;
    }
    let P = percent / 100 / 12;
    let S = amount - contribution;
    let M = S * (P + (P / (Math.pow(1 + P, countMonths) - 1)));
    let sum = M * countMonths - contribution;
    return sum.toFixed(2);
    return Number(sum);

}