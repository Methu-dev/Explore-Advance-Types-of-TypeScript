type RichPeople ={
    car: string;
    store: string;
    isWife: boolean;
};

type User = keyof RichPeople

const vehicle:User = "isWife"

const UserName: keyof RichPeople  = "store"