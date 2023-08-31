let student = [["ira",100],["kira",99],["pira",98]];
for(let i=0; i<student.length; i++){ //length=0 and 1
    console.log(`info of student #${i+1}`);
    for(let j=0; j<student[i].length; j++){
        console.log(student[i][j]);
    }
}