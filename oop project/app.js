// ================================
// OOP PROJECT - Student Management System
// ================================

// Parent Class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
    }
}

// Child Class (Inheritance)
class Student extends Person {
    constructor(name, age, rollNo, course) {
        super(name, age);
        this._rollNo = rollNo; // Encapsulation
        this.course = course;
    }

    // Getter
    get rollNo() {
        return this._rollNo;
    }

    // Setter
    set rollNo(value) {
        if (value > 0) {
            this._rollNo = value;
        } else {
            console.log("Invalid Roll Number");
        }
    }

    // Polymorphism (Method Overriding)
    introduce() {
        console.log("----- Student Information -----");
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Roll No: ${this._rollNo}`);
        console.log(`Course: ${this.course}`);
    }
}

// Another Child Class
class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    introduce() {
        console.log("----- Teacher Information -----");
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Subject: ${this.subject}`);
    }
}

// Management Class
class School {
    constructor() {
        this.students = [];
        this.teachers = [];
    }

    addStudent(student) {
        this.students.push(student);
    }

    addTeacher(teacher) {
        this.teachers.push(teacher);
    }

    showStudents() {
        console.log("\n===== Students List =====");
        this.students.forEach(student => student.introduce());
    }

    showTeachers() {
        console.log("\n===== Teachers List =====");
        this.teachers.forEach(teacher => teacher.introduce());
    }
}

// Creating Objects
const student1 = new Student(
    "Ali",
    20,
    101,
    "MERN Stack Development"
);

const student2 = new Student(
    "Ahmed",
    22,
    102,
    "Web Development"
);

const teacher1 = new Teacher(
    "Sir Hamza",
    30,
    "JavaScript"
);

// Using Getter & Setter
console.log(student1.rollNo);

student1.rollNo = 201;
console.log(student1.rollNo);

// School Object
const school = new School();

school.addStudent(student1);
school.addStudent(student2);
school.addTeacher(teacher1);

// Display Data
school.showStudents();
school.showTeachers();