function greet(name) {
    return "hello " + name;
}
let z = greet("Azamat");
console.log(z);
// sum
function sum(num1, num2) {
    return num1 + num2;
}
// multiple
function multiple(num3, num4) {
    return num3 * num4;
}
// even
function isEven(num5) {
    if (num5%2==0) {
        return "even";
    }
    else {
        return "odd";
    }
}
console.log(isEven(14));
//double array
function doubleArray(arr) {
    return arr.map(num => num * 2);
  }
// factorial
  function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5)); 
// get max
function getMax(p1, p2) {
    if(p1 > p2) {
        return p1 + " larger than " + p2;
    }
    else {
        return p2 + " larger than " + p1;
    }
}
// reverse string
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("hello"));
// palindrom
function isPalindrome(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    if(reversed === str) {
    return "is palindrom"; 
    }
    else {
        return "is not palindrom";
    }
}

console.log(isPalindrome("hello"));
// filter odd number
function filterOddNumbers(arr) {
    let result = [];
    for (let num of arr) {
        if (num % 2 !== 0) {
            result.push(num);
        }
    }
    return result;
}
console.log(filterOddNumbers([1,4,5,2,5,7,8,8,9,8]));