let person = {
    firstName: "John",
    lastName: "Doe",
    age: 25
};

function updateAge(person, newAge) {
    person.age = newAge;
}

let book = {
    title: "1984",
    author: "George Orwell",
    yearPublished: 1949
};


function getBookInfo(book) {
    console.log(`The book ${book.title} was written by ${book.author} in ${book.yearPublished}.`);
}


let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};


function hasProperty(obj, property) {
    return obj.hasOwnProperty(property);
}

let student = {
    name: "Alice",
    subjects: ["Math", "Science"],
    grades: {
        Math: 95,
        Science: 88
    }
};


function addSubject(student, newSubject) {
    student.subjects.push(newSubject);
}


let city = {
    name: "Paris",
    country: "France",
    population: 2148000
};


function describeCity(city) {
    console.log(`The city ${city.name} is located in ${city.country} and has a population of ${city.population}.`);
}
