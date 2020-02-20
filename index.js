//1.1

function EvenNumber (num1, num2) {
  if (num1 % 2==0) {
    return num1 * num2
} 
  else {
    return num1 + num2;
}
}
// console.log(EvenNumber(6,5));

// 1.2

function GetPoint (num1, num2) {
    if (num1 == 0,num2 == 0) {
        return "начало координат"
     }
    else if (num1 > 0, num2 > 0) {
        return "1-ая четверть"
     }
    else if (num1 < 0, num2 > 0) {
        return "2-ая четверть"
     }
    else if (num1 < 0, num2 < 0) {
        return "3-я четверть"
     }
    else if (num1 > 0, num2 < 0) {
        return "4-я четверть"
     }
 }
// console.log(GetPoint(5,-9));

// 1.3

function PosNumSum (num1, num2, num3) {
    if (num1 > 0 && num2 > 0 && num3 > 0) {
        return num1 + num2 + num3
    } 
    if (num1 < 0 && num2 > 0 && num3 > 0) {
        return num2 + num3
    }
    if (num1 > 0 && num2 < 0 && num3 > 0) {
        return num1 + num3
    }
    if (num1 > 0 && num2 > 0 && num3 < 0) {
        return num1 + num2
    }
}    

// console.log(PosNumSum(1,-2,3));


// 1.4
function getMaxValue (num1, num2, num3) {
    if (num1 + num2 + num3 > num1 * num2 * num3) {
        return (num1 + num2 + num3) + 3
    }
    if (num1 + num2 + num3 < num1 * num2 * num3) {
        return  num1*num2*num3 +3
    }
    if (num1 + num2 + num3 == num1 * num2 * num3) {
        return "результат одинаков"
    }
}
// console.log(getMaxValue(1,2,3));

// 1.5
function getStudRat (n)     {

    if (n > 0 && n < 19) {
        return "F"
    }
    else if (n > 20 && n < 39) {
        return "E"
    }
    else if (n > 40 && n < 59) {
        return "D"
    }
    else if (n > 60 && n < 74) {
        return "C"
    }
    else if (n > 75 && n < 89) {
        return "B"
    }
    else if (n > 90 && n < 100) {
        return "A"
    }
}
// console.log(getStudRat(13));


//  2.1 Найти сумму четных чисел и их количество в диапазоне от 1 до 99 */

function getSumQ () {
    let sum = 0;
    let quantity = 0;
    let i = 1;

    for (i = 1; i < 99; i += 2) {
        sum = sum + i;
        quantity ++;
    }
    return `sum ${sum} and quantity ${quantity}`;
}
 
// console.log(getSumQ());


// 2.2 Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)

function getPrimeNum (n) {
 let result = 0;
 let i = 2;
   
 for (i = 2; i < n; i ++) {
     if (n % i == 0) return result = "slojnoye "
    } 
    return result = "simple"
}
// console.log (getPrimeNum(5);



function prime (n){         
    let result = "simple";


    for (i = 2; i < n; i++) {
        if (n % i == 0)     {
            result = "complicated"; break;
        }
        else {
            return result;
        }
    }
        return result;
}      

// console.log(prime(42));

// 2.4 Вычислить факториал числа n. n! = 1*2*…*n-1*n;!

function findFact (n) {
    let result = 1;
    let i = 1;

   for (i = 1; i <= n; i++) { 
        result *= i ;
       
         
    }
    return result
} 
//  console.log(findFact(3));

// 2.5 Посчитать сумму цифр заданного числа

function sumDigNum (n) {
  let result = 0;
  let i = 0;

while (n >= 0){
    i = n % 10
    n = ( n - i ) / 10;
    result += i;

    if (!n)     {
    return result;
    }
}  
}
     
// console.log(sumDigNum(85));

// 2.6 ⦁	Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.(i-ostatok)

function reverseNum (num) {
    let result = 0;
    let i = 0;

  while (num >= 0) {
    i = num % 10;
    result = result * 10 + i; //проверить почему не работает *=
    num = (num - i ) / 10;
    
    if (!num) {
        return result;
      }
  }
}  
//  console.log(reverseNum(300), 'return');

// 3.1 Найти минимальный элемент массива

function getMinEl (arr) {
    let min = arr[0];

    for (let i = 0; i < arr.length; i++) {
        
        if ( min > arr[i]) {
            min = arr[i];
        }
    }

    return min;
}

let arr = [3, 7, 1, 6, 25];


// 3.2 Найти максимальный элемент массива

function getMaxEl (maxArr) {
    let max = maxArr[0];

    for (let i = 0; i < maxArr.length; i++) {
        
        if (max < maxArr[i])  {
            max = maxArr[i];
            
        }
    }
    return max;
}

let maxArr = [5, 10, 6, 9];

// console.log(getMaxEl(maxArr));

// 3.3 Найти индекс минимального элемента массива

function getMinInd (arr) {
    let min = arr[0];
    let ind = 0;

    for (let i = 0; i < arr.length; i++) {
        
        if ( min > arr[i]) {
            min = arr[i];
            ind = i;
        }
    }

    return ind;
}

let array = [3, 7, 100, 6, 25];

// console.log(getMinInd(array));

// 3.4 Найти индекс максимального элемента массива             (Ind-index)

function getMaxInd (maxArrInd) {
    let max = maxArrInd[0];
    let ind = 0;

    for (let i = 0; i < maxArrInd.length; i++) {
        
        if (max < maxArrInd[i])  {
            max = maxArrInd[i];
            ind = i; 
        }
    }
    return ind;
}

let maxArrInd = [5, 10, 60, 9];

// console.log(getMaxInd(maxArrInd));


// 3.5 Посчитать сумму элементов массива с нечетными индексами 

function getElemSum (sumArr) {
    let sum = 0;

    for (let i = 0; i < sumArr.length; i++) {
        
        if (i % 2 !==0) {
            sum += sumArr[i];
        }
    }
    return sum;

} 
let sumArr = [ 8, 5, 9, 4, 45, 89];
// console.log(getElemSum(sumArr));


// 3.6 	Сделать реверс массива (массив в обратном направлении)

function reverseArray (revArr) {
    let reverse = [];

    for (let i = revArr.length - 1; i >= 0; i--) {

        reverse [reverse.length] = revArr[i];
    }
    
    return reverse;
}

//    console.log(reverseArray([4, 3, 9, 5, 6, 9]));
 

// 3.7 7.	Посчитать количество нечетных элементов массива

function getQuantityElem (arrQuant) {
    let quantity = 0;

    for (let i = 0; i < arrQuant.length; i++) {
        
        if (arrQuant[i] % 2 !== 0) {
           quantity ++;
           
        }
    }
    return quantity;
}
let arrQuant = [2, 4, 6, 8, 10, 0]
// //  console.log(getQuantityElem(arrQuant));

// 4.1	Получить строковое название дня недели по номеру дня. 

function getWeekDay (num) {
    let day = '';
    let weekDay = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday",];
    
    if ( num > 0 && num < 8) {
        for (let i = 0; i < array.length; i++) {
             
            if (i === num - 1)  {
                day = weekDay[i];
            }
            else (i > 8)   
            return  "error"
            }
        }
    }   
    return day
    

console.log(getWeekDay(8));


