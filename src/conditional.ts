type  A = null;
type  B = undefined;

 type C = A extends boolean ? true : B extends undefined ? true : false

 type RichPeople = {
    bike: string;
    car: string;
    ship: string;
 }

 type Check<T> = T extends keyof RichPeople ? true : false 

 type hasBike = Check<"bike">


 