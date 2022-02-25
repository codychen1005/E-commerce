class Customer {
    firstName: string;
    lastName: string;
    constructor(theFirst: string, theLast: string){
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}

// create an instance
let myCustomer = new Customer("Cody", "Chen");


console.log(myCustomer.firstName);
console.log(myCustomer.lastName);