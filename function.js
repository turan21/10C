function greet(name) {
    console.log("Hello, " + name);
}

function sum(a, b) {
    return a + b;
}

function multiply(a, b, c) {
    return a * b * c;
}

function isEven(num) {
    return num % 2 === 0;
}

function doubleArray(arr) {
    return arr.map(num => num * 2);
}

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

function getMax(a, b) {
    return a > b ? a : b;
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}


function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}
