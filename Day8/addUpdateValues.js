//ADD AND UPDATE VALUES IN CONSTANT OBJECT LITERALS.
const student = {
    name: "Anjali",
    age: 23,
    marks: 95,
    city: "Ranchi"
};

console.log(student);
student.city = "Pune";
console.log(student);

student.gender = "Female";
console.log(student);

student.marks = "B";
console.log(student);

student.marks = [89,99,100];
console.log(student);

delete student.gender;
console.log(student);
