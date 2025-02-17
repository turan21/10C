FUNCTIONS


function greet(name) {
  console.log(Hello, $[name]);
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
  return n * factorial(n - 1);
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






OBJECTS


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


function hasProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}


const student = {
  name: "Alice",
  subjects: ["Math", "Science"],
  grades: {
    Math: 90,
    Science: 85
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
