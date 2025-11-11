const UserRoll = {
    Admin: "ADMIN",
    Editor: "EDITOR",
    Viewer: "VIEWER"
}

// const canRoll = (role: typeof UserRoll[keyof typeof UserRoll])=>{
//     if(role === UserRoll.Admin || role === UserRoll.Viewer){
//         return true;
//     }else return false
// }

// const userRoll =  canRoll(UserRoll.Admin);
// console.log(userRoll)


const userRoll = (role: typeof UserRoll[keyof typeof UserRoll])=>{
    const lowar = role.toLowerCase();
    if(lowar === "admin" || lowar === "viewer"){
        return true;
    }else return false;
}

const userInput = userRoll(UserRoll.Admin)
console.log(userInput)