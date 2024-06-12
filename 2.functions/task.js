const arr = [];
// Задача №1
function getArrayParams(...arr) {
  
  let min = arr[0];// начало счетчика
  let max = arr[0];// начало счетчика
  let sum = 0;
  
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    } 
    if(arr[i] < min) {
      min = arr[i];
    } 
    //sum += arr[i];
    sum = arr.reduce((acc, curr) => acc + curr, 0)
  }

  let avg = sum / arr.length;
  avg = Number(avg.toFixed(2));

  return { min: min, max: max, avg: avg };
}

getArrayParams();

// Задача №2

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0; // Возвращаем 0, если массив пустой
}
return arr.reduce((acc, curr) => acc + curr, 0);
}
summElementsWorker();//Насадка суммирования элементов

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let maxWorker = Math.max.apply(null, arr);
  let minWorker = Math.min.apply(null, arr);
  let differenceMaxMin = maxWorker - minWorker;
  return differenceMaxMin;
}
differenceMaxMinWorker(); //Насадка вычисления разницы максимального и минимального элементов

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0; // четные
  let sumOddElement = 0; // нечетные
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i]; // накапливает четные числа
    } else {
      sumOddElement += arr[i]; // накапливает нечетные числа
    }
  }
  const differenceEvenOdd = sumEvenElement - sumOddElement;
  return differenceEvenOdd;
}
differenceEvenOddWorker(); //Насадка вычисления разницы сумм чётных и нечётных элементов

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
   return 0; // Возвращаем 0, если массив пустой
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }

  if (countEvenElement === 0) {
  return 0; // В случае, если нет чётных элементов, возвращаем 0, чтобы избежать деления на 0.
  }
  return sumEvenElement / countEvenElement;
}
averageEvenElementsWorker(); //Насадка вычисления среднего значения чётных элементов

// Задача №3
function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity; // начальное значение максимума

  for (let arr of arrOfArr) {
    const result = func(...arr); // применяем функцию-насадку к текущему массиву данных
    if (result > maxWorkerResult) { // проверяем, больше ли полученный результат текущего максимума
      maxWorkerResult = result; // если да, обновляем максимум
    }
  }

  return maxWorkerResult; // возвращаем максимальный результат
}

makeWork(arr, summElementsWorker); 
makeWork(arr, differenceMaxMinWorker);
makeWork(arr, differenceEvenOddWorker); 
makeWork(arr, averageEvenElementsWorker); 
