interface dinamicInterface<T, X> {
    name: string;
    age: number;
    isMarried: boolean;
    device: {
      brand: string;
      model: string;
      price: number
    }
    smartWatch : T
    appleWatch: X
}

interface brandWatch{
heartRate: number;
    stopwatch: boolean
}

interface appleWatch{
    aiFuture: boolean;
    caling: boolean;
    system: string
}

const userDetails: dinamicInterface<brandWatch,appleWatch
> = {
 name: "methu",
 age: 22,
 isMarried: false,
 device:{
    brand: "waltion",
    model: "mt123",
    price: 84000,
 },
 smartWatch: {
    heartRate: 200,
    stopwatch: true
 },
 appleWatch: {
    aiFuture: true,
    caling: true,
    system: "Windos",
 }

}


const userDetails1: dinamicInterface<brandWatch,appleWatch> = {
 name: "methu",
 age: 22,
 isMarried: false,
 device:{
    brand: "waltion",
    model: "mt123",
    price: 84000,
 },
 smartWatch: {
    heartRate: 200,
    stopwatch: true
 },
 appleWatch: {
    aiFuture: true,
    caling: true,
    system: "Windos"
 }

}