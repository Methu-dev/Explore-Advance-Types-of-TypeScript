const createGeneric = <T extends Device>(UserInput: T)=>{
    return {...UserInput}
}

type Device = {
    brand: string;
    model: string;
    cetagory: string;
    isActive: boolean;

}

const userName = {
    name: "methu",
    isMarried : false,
    balance: 0,

}

const userName2 = {
    name: "sabu",
    isMarried: true,
    balance: 125,
    isKids: true
}

const device = {
    brand: "walton",
    model: "Xboss 430",
    cetagory: "laptop",
    isActive: true,
}

const result = createGeneric(device)