"use strict";
let myFunc; // my function that returns void
let add; // add function that returns number
let calculation; //
let userDetails;
add = (a, b) => {
    return a + b;
};
calculation = (a, b, c) => {
    if (c == "add") {
        return a + b;
    }
    else {
        return a - b;
    }
};
userDetails = (id, user) => {
    return `${id}, ${user.name}, ${user.age}`;
};
console.log(add(12, 53));
console.log(calculation(53, 20, "minus"));
console.log(userDetails(10, { "name": "Ahsan", "age": 50 }));
