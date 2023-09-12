let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
});

let user = document.querySelector("#user");
user.addEventListener("change", function() {
    console.log("input changed");
    console.log("final value = ", this.value);
});

user.addEventListener("input", function() {
    console.log("input event");
    console.log("final value = ", this.value);
});