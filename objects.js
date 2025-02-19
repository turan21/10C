// Объекты
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
    subjects: ["Math", "English"],
    grades: {
        Math: "A",
        English: "B"
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
