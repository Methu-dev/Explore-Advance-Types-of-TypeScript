const kgtoGrm = (input: number | string) =>{
    if(typeof input === "number"){
        return input * 1000;
    }else if(typeof input === "string"){
         const [value] = input.split(" ");
         const convert = Number(value) * 100;
         return convert;
     }
}

const total1 = kgtoGrm(2)
const total2 = kgtoGrm("2 kg")

console.log({total1})
console.log({total2})