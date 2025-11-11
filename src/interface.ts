type User = {
    id: number;
    name: string;
    isMerried: boolean;
}

type Roll = {
    roll: "addmin" | "user"
}


type UserWithRoll = User & Roll

const user: UserWithRoll ={
    id: 12,
    name: "methu",
    isMerried: false,
    roll: "addmin"
}

interface IUserWithRoll extends User{
    roll: "addmin" | "user"
    sathi: undefined
}

const userName: IUserWithRoll = {
     id: 123,
    name: "methu",
    isMerried: false,
    roll: "user",
    sathi: undefined
    

}

interface iUser{
id: number;
name: string;
isMerried: boolean;
roll: "addmin" | "user";
sathi: undefined;
}
const Iuser: iUser = {
     id: 123,
    name: "methu",
    isMerried: false,
    roll: "user",
    sathi: undefined
}

type Add = (num1: number, num2: number)=> number;

const add: Add = (num1, num2)=>num1 + num2;

interface iAdd {
    (num1: number, num2: number): number
}
const addi:iAdd = (num1, num2)=>num1 + num2;


type Array = string[]
const array: Array = ["methu", "sathi", "sanvi"]

interface isArray {
    [index: number]: string;
}

const isarray: isArray = ["methu", "sathi", "sanvi", "sarfaraj"]