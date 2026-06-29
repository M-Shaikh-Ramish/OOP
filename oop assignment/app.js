// ===============================
// OOP Assignment in JavaScript
// ===============================

// -------------------------------
// Parent Class (Encapsulation)
// -------------------------------
class Person {
    #salary; // Private Property

    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.#salary = salary;
    }

    // Getter (Abstraction)
    get salary() {
        return this.#salary;
    }

    // Setter (Abstraction)
    set salary(amount) {
        if (amount > 0) {
            this.#salary = amount;
        } else {
            console.log("Salary must be greater than 0");
        }
    }

    // Method
    introduce() {
        console.log(`Hi! My name is ${this.name}.`);
        console.log(`I am ${this.age} years old.`);
    }

    work() {
        console.log(`${this.name} is working.`);
    }

    // Static Method
    static companyName() {
        console.log("Company: ABC Software House");
    }
}

// -------------------------------
// Child Class (Inheritance)
// -------------------------------
class Student extends Person {
    constructor(name, age, salary, rollNo, department) {
        super(name, age, salary);

        this.rollNo = rollNo;
        this.department = department;
    }

    study() {
        console.log(`${this.name} is studying ${this.department}.`);
    }

    // Method Overriding (Polymorphism)
    work() {
        console.log(`${this.name} is completing assignments.`);
    }
}

// -------------------------------
// Another Child Class
// -------------------------------
class Teacher extends Person {
    constructor(name, age, salary, subject) {
        super(name, age, salary);

        this.subject = subject;
    }

    teach() {
        console.log(`${this.name} teaches ${this.subject}.`);
    }

    // Method Overriding
    work() {
        console.log(`${this.name} is teaching students.`);
    }
}

// -------------------------------
// Another Child Class
// -------------------------------
class Developer extends Person {
    constructor(name, age, salary, language) {
        super(name, age, salary);

        this.language = language;
    }

    code() {
        console.log(`${this.name} writes ${this.language} code.`);
    }

    // Method Overriding
    work() {
        console.log(`${this.name} is developing software.`);
    }
}

// -------------------------------
// Object Creation
// -------------------------------
const student1 = new Student(
    "Ali",
    20,
    30000,
    "SP24-001",
    "Computer Science"
);

const teacher1 = new Teacher(
    "Ahmed",
    35,
    90000,
    "JavaScript"
);

const developer1 = new Developer(
    "Sara",
    28,
    120000,
    "MERN Stack"
);

// -------------------------------
// Student
// -------------------------------
console.log("===== STUDENT =====");
student1.introduce();
student1.study();
student1.work();

console.log("Salary:", student1.salary);

student1.salary = 35000;

console.log("Updated Salary:", student1.salary);

console.log();

// -------------------------------
// Teacher
// -------------------------------
console.log("===== TEACHER =====");
teacher1.introduce();
teacher1.teach();
teacher1.work();

console.log("Salary:", teacher1.salary);

console.log();

// -------------------------------
// Developer
// -------------------------------
console.log("===== DEVELOPER =====");
developer1.introduce();
developer1.code();
developer1.work();

console.log("Salary:", developer1.salary);

console.log();

// -------------------------------
// Static Method
// -------------------------------
Person.companyName();

console.log();

// -------------------------------
// Polymorphism Example
// -------------------------------
console.log("===== POLYMORPHISM =====");

const people = [
    student1,
    teacher1,
    developer1
];

for (const person of people) {
    person.work();
}

console.log();

// -------------------------------
// instanceof Operator
// -------------------------------
console.log(student1 instanceof Student);
console.log(student1 instanceof Person);

console.log(teacher1 instanceof Teacher);
console.log(teacher1 instanceof Person);

console.log(developer1 instanceof Developer);
console.log(developer1 instanceof Person);