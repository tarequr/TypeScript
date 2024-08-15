"use strict";
const userInfo = (id, user) => {
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
};
const sayHello = (user) => {
    console.log(`Hey ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
};
userInfo(20, {
    "name": "John",
    "age": 20
});
sayHello({ name: "Usama Islam", age: 35 });
