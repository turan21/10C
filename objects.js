let person = {
    firstName: "Kutya",
    lastName: "Essentuki",
    age: 16
};

function updateAge(person, newAge) {
    person.age = newAge;
}

let book = {
    title: "Война и мир",
    author: "Лев Николаевич Толстой",
    yearPublished: 1949
};

function getBookInfo(book) {
    console.log(The book ${book.title} was written by ${book.author} in ${book.yearPublished}.);
}

let car = {
    brand: "Lambandjerry",
    model: "kuraga",
    year: 2010
};

function hasProperty(obj, prop) {
    return obj.hasOwnProperty(prop);
}

let student = {
    name: "Azim",
    subjects: ["Math", "Russian"],
    grades: {
        Math: "A",
        Russian: "B"
    }
};

function addSubject(student, newSubject) {
    if (!student.subjects.includes(newSubject)) {
        student.subjects.push(newSubject);
    }
}

let city = {
    name: "Moscow",
    country: "Russia",
    population: 2148000
};

function describeCity(city) {
    console.log(The city ${city.name} is located in ${city.country} and has a population of ${city.population}.);
}
