///percent to gpa calc.

let students = [ {
    name: "Prachi",
    marks:99,
},
{
    name:"Anjali",
    marks:92,
},
{
    name:"Ashwini",
    marks:88,
}
];

let gpa = students.map((el) => {
    return el.marks / 10;
});

// arr.forEach((student) => {
//     console.log(student.marks);
// });