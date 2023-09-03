//normal function
const student = {
    name: "Anjali",
    marks: 95,
    property: this, //global scope
    getName: function(){       
        return this.name;
    },
    //arrow func
    getMarks: () => {
        console.log(this); //parent's scope -> window
        return this.marks;
    },
    getInfo1: function() {
        setTimeout(() => {
            console.log(this); //parent object is student
        }, 2000);
    },
    getInfo2: function() {
        setTimeout(function () {
            console.log(this); //parent object is window
        }, 2000);
    },
};
console.log(student);
console.log(student.getName());
 

