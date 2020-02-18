//1.1

function EvenNumber(num1, num2) {
  if(num1 % 2==0) {
    return num1*num2
} 
  else{
    return num1 + num2;
}
}
console.log(EvenNumber(6,5));

// 1.2

function GetPoint(num1, num2) {
    if (num1==0,num2==0) {
         return "начало координат"
     }
    else if (num1>0,num2>0) {
         return "1-ая четверть"
     }
    else if (num1<0,num2>0) {
         return "2-ая четверть"
     }
    else if (num1<0,num2<0) {
         return "3-я четверть"
     }
    else if (num1>0,num2<0) {
         return "4-я четверть"
     }
 }
console.log(GetPoint(5,-9));

// 1.3

function PosNumSum(num1, num2, num3) {
    if (num1>0 && num2>0 && num3>0) {
        return num1+num2+num3
    } 
    if (num1<0 && num2>0 && num3>0) {
        return num2 + num3
    }
    if (num1>0 && num2<0 && num3>0) {
        return num1 + num3
    }
    if (num1>0 && num2>0 && num3<0) {
        return num1 + num2
    }
}    

console.log(PosNumSum(1,-2,3));


// 1.4
function getMaxValue(num1, num2, num3) {
    if (num1 + num2 + num3 > num1*num2*num3) {
        return (num1 + num2 + num3) + 3
    }
    if (num1 + num2 + num3 < num1*num2*num3) {
        return  num1*num2*num3 +3
    }
    if (num1 + num2 + num3 == num1*num2*num3) {
        return "результат одинаков"
    }
}
console.log(getMaxValue(1,2,3));

// 1.5
function getStudRat(n)     {

    if (n>0 && n<19) {
        return "F"
    }
    else if (n>20 && n<39) {
        return "E"
    }
    else if (n>40 && n<59) {
        return "D"
    }
    else if (n>60 && n<74) {
        return "C"
    }
    else if (n>75 && n<89) {
        return "B"
    }
    else if (n>90 && n<100) {
        return "A"
    }
}
console.log(getStudRat(56));

// 2.1
