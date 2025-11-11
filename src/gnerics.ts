type GnericArry<T> = Array<T>;

const friends: GnericArry<string> = ["apple", "orenge", "banana"];

const rollNumber: GnericArry<number> = [10, 30, 40];

const isEligableList: Array<boolean> = [true, false, true]


const userList : GnericArry<{name: string; age: number; range: number; isMarried: boolean;}> = [
    {
        name: "methu",
        age: 22,
        range: 9.88, 
        isMarried: false
    },
    {
        name: "sathi",
        age: 21,
        range: 9.88,
        isMarried: false
    }
]