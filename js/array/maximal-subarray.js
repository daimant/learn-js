"use strict";

//На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
//  Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
//  Функция getMaxSubSum(arr) должна возвращать эту сумму.
//
//  Например:
//getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
//getMaxSubSum([2, -1, 2, 3, -9]) = 6
//getMaxSubSum([-1, 2, 3, -9, 11]) = 11
//getMaxSubSum([-2, -1, 1, 2]) = 3
//getMaxSubSum([100, -9, 2, -3, 5]) = 100
//getMaxSubSum([1, 2, 3]) = 6 (берём все)
//
//Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:
//getMaxSubSum([-1, -2, -3]) = 0
//
//Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.

function getMaxSubSum(arr) {
  let maxSum = 0;
  let subSum = 0;

  for (let i = 0; i < arr.length; i++) {
    subSum += arr[i];

    if (subSum > maxSum) {
      maxSum = subSum;
    }

    if (subSum < 0) {
      subSum = 0;
    }
  }

  //for (let i = 0; i < arr.length; i++) {
  //  if (arr[i] > subSum) {
  //    subSum = arr[i];
  //
  //    for (let j = i + 1; j < arr.length; j++) {
  //      if (arr[i] + arr[j] > subSum) {
  //        subSum += arr[j];
  //      } else if (arr[i] + arr[j] + arr[ j + 1 ] > subSum) {
  //        subSum += arr[j] + arr[j + 1];
  //        j++;
  //      } else break;
  //    }
  //  }
  //}
  return maxSum;
}

console.log(getMaxSubSum([1, -2, 3, 4, -9, 6])); // = 7
console.log(getMaxSubSum([-1, 2, 3, -9])); // = 5 (сумма выделенных)
console.log(getMaxSubSum([2, -1, 2, 3, -9])); // = 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // = 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // = 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // = 100
console.log(getMaxSubSum([1, 2, 3])); // = 6 (берём все)
