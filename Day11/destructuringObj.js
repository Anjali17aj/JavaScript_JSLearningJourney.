const student = {
    name: "Anjali",
    age: 23,
    class: "Final year",
    subject: ["OS","DBMS","CN"],
    username: "anjalik17",
    password: "anja@17"

};

// let username = student.username;
// let password = student.password;

                 //or (use of object destructuring)
let { username, password: secret, city="Pune"} = student;