
function greet(name) {
    console.log(`Hello,  yusuf`);
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


function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
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
    let reversed = reverseString(str);
    return str === reversed;
}


function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 25
};


function updateAge(person, newAge) {
    person.age = newAge;
}


const book = {
    title: "1984",
    author: "George Orwell",
    yearPublished: 1949
};


function getBookInfo(book) {
    console.log(`The book ${book.title} was written by ${book.author} in ${book.yearPublished}.`);
}


const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};


function hasProperty(obj, propName) {
    return obj.hasOwnProperty(propName);
}


const student = {
    name: "Alice",
    subjects: ["Math", "Science"],
    grades: {
        Math: "A",
        Science: "B"
    }
};


function addSubject(student, newSubject) {
    student.subjects.push(newSubject);
}


const city = {
    name: "Paris",
    country: "France",
    population: 2148000
};


function describeCity(city) {
    console.log(`The city ${city.name} is located in ${city.country} and has a population of ${city.population}.`);
}
