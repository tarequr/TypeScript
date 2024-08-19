/* #################### EXAMPLE 01 #################### */
const addID = <T extends {
    name: string,
    age: number
}> (obj : T) => {
    let id = Math.floor(Math.random() * 100);
    return { ...obj, id }
}

let user = addID({
    name: "Sabbir",
    age: 27,
    country: "United States"
});

console.log(user.name);

/* #################### EXAMPLE 02 #################### */
interface APIResource <T> {
    status: number;
    type: string;
    data: T;
}

const resposeData: APIResource <object> = {
    status: 200,
    type: "application",
    data: {
        name : "Sazzad",
        designation: "Software Engineer"
    }
}

console.log(resposeData)
