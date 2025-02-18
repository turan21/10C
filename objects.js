const person = {
    firstName: "Joe",
    lastName: "Doe",
    age: 25
}
// update age
function updatedAge(person, newAge) {
    person.age = newAge;
}
updatedAge(person, 30);
console.log(person);
// book smth
const book = {
    title: "1984",
    author: "George Orwell",
    yearPublished: "1949"
}
// book smth2
function bookInfo(Book) {
    return "The book " + book["title"] + " was written by " + book["author"] + " in " + book["year"] + "."
}

console.log(bookInfo);
// car
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};

function hasProperty(obj, prop) {
    return obj.hasOwnProperty(prop);
}

let car1 = { brand: "Toyota", model: "Corolla", year: 2020 };
console.log(hasProperty(car, "model")); 
console.log(hasProperty(car, "color")); ``
// student
let student = {
    name: "John Doe",
    subjects: ["Math", "Science", "English"],
    grades: {
        Math: "A",
        Science: "B",
        English: "A"
    }
};

// Example usage
console.log(student);
console.log(student.grades["Math"]); 
console.log(student.subjects[1]);    

function addSubject(student, newSubject) {
    if (!student.subjects.includes(newSubject)) {
        student.subjects.push(newSubject);
    }
}

// new student
let student1 = {
    name: "John Doe",
    subjects: ["Math", "Science", "English"],
    grades: {
        Math: "A",
        Science: "B",
        English: "A"
    }
};

addSubject(student, "History");
console.log(student.subjects); 
//history
let city = {
    name: "Paris",
    country: "France",
    population: 2148000
};


console.log(city); 

//city
function describeCity(city) {
    console.log(`The city ${city.name} is located in ${city.country} and has a population of ${city.population}.`);
}

// Example usage
let city1 = {
    name: "Paris",
    country: "France",
    population: 2148000
};

describeCity(city); 