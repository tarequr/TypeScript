// Aliases 
type stringOrNumber = string | number;  //This custom type has been created
type userType = { name: string; age: number}; //This custom type has been created


const userInfo = (
    id : stringOrNumber,
    user : userType
) => {
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
}

const sayHello = (user: userType) => {
    console.log(`Hey ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
}


userInfo(20, {
    "name" : "John", 
    "age" : 20
});

sayHello({ name: "Usama Islam", age: 35 });