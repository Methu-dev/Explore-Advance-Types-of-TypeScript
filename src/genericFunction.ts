const createGeneric = <T>(value: T)=>{
    return [value]
}

const genericNumber = createGeneric(123);
const genericString = createGeneric("methu");
const genericObject = createGeneric({
    id: 12,
    name: "methu",
    isMarried: false
})


const userInformation = <T>(userInput: T)=>{
    return {...userInput}
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

const result = userInformation(userName)
console.log(result);
const result2 = userInformation(userName2)
console.log(result2)