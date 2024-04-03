// ------------------------------through type and interface-------------------------------------------
let user: IUser = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}

type geo = {
    lat: string,
    lng: string,
}
type address = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: geo,
}
type company = {
    name: string,
    catchPhrase: string,
    bs: string,
}

interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    address: address,
    phone: string,
    website: string,
    company: company,
}

// ==================================
// ==================================
// ------------------------------through interface-------------------------------------------

let user2: IUser2 = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}

interface IUser2 {
    id: number,
    name: string,
    username: string,
    email: string,
    address: IAddress,
    phone: string,
    website: string,
    company: ICompany,
}

interface IGeo {
    lat: string,
    lng: string,
}

interface IAddress {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: IGeo,
}

interface ICompany {
    name: string,
    catchPhrase: string,
    bs: string,
}
console.log(user, user2);
