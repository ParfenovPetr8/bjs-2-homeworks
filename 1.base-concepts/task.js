"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
  let sq;// один корень при условии d=0
  let sq1;// 1-ый корень при d>0
  let sq2;// 2-ой корень при d>0

  if (d === 0) {
    sq = -b / (2 * a);
    arr.push(sq);
  } else if (d > 0) {
    sq1 = (-b + Math.sqrt(d)) / (2 * a);
    sq2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(sq1, sq2);
  }

  return arr; // возвращает пустой маасив и заканчивает
}

solveEquation(2, 3, 4);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = percent / (12 * 100);// процентная ставка в месяц (от 0 до 1)
  let n = 12;// 12 месяцев в году;
  let S = amount - contribution ;//тело кредита = сумма кредита - первоначальный взнос;    
  let M = S * (P + (P / ((Math.pow((1 + P), n) - 1)))// Ежемесячная оплата
  Let E = M * countMonths;// общая сумма, которую придётся заплатить клиенту
}

calculateTotalMortgage(10, 0, 50000, 12)