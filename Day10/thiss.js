const student = {
    name: "Anjali",
    age: 23,
    eng: 95,
    maths: 93,
    phy: 97,
    getAvg() {
        console.log(this);
        let avg = (this.eng + this.maths + this.phy)/3;
        console.log(`${this.name} got average marks = ${avg}`);
    }
}
