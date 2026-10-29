const person = {
    name: "David",
    greet: function() {
        console.log("Hi, I'm"+ this.name);
}
};

person.greet()
const greetFn = person.greet;
greetFn();