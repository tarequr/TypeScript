"use strict";
/* #################### EXAMPLE 01 #################### */
const addID = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addID({
    name: "Sabbir",
    age: 27,
    country: "United States"
});
console.log(user.name);
const resposeData = {
    status: 200,
    type: "application",
    data: {
        name: "Sazzad",
        designation: "Software Engineer"
    }
};
console.log(resposeData);
