enum ResType { PENDING, SUCCESS, UNAUTHENTICATED, FORBIDDEN }

interface APIResource <T> {
    status: number;
    type: ResType;
    data: T;
}

const resposeData: APIResource <object> = {
    status: 200,
    type: ResType.UNAUTHENTICATED,
    data: {
        name : "Sazzad",
        designation: "Software Engineer"
    }
}

console.log(resposeData)
