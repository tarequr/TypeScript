let myFunc : () => void;     // my function that returns void
let add : (a : number, b : number) => number;  // add function that returns number
let calculation : (a : number, b : number, c : string) => number; //
let userDetails : (id : number | string, user : { name : string, age : number }) => void;


add = (a : number, b : number) => {
    return a + b;
}

calculation = (a : number, b : number, c : string) => {
    if (c == "add") {
        return a + b;
    } else {
        return a - b;
    }
}

userDetails = (id: number | string, user : {
    name: string,
    age: number
}) => {
    return `${id}, ${user.name}, ${user.age}`;
}

console.log(add(12, 53));
console.log(calculation(53, 20, "minus"));
console.log(userDetails(10, {"name": "Ahsan", "age": 50}));