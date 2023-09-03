//to access the individual properties using objects
let arr = [ {
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

arr.forEach((student) => {
    console.log(student.marks);
});