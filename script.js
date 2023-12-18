// Nothing here yet...
// Make sure to link your JS in index.html!
//start with sudo code



// const obj = {
//     prop: "Property1",
//     newMethod() {
//         return this.prop;
//     },
//     newArray: [1,2,3,4],
//     newObj: {
//         property1: "property1"
//     },
//     "Key": "Value",
// }

// const newFunction = function() {

// }

// console.log(obj.newObj.property1());





// Create a Car class, with a constructor that accepts 3 parameters: make (ex: Chevy, Ford, Toyota), model (ex: Camero, F150, Rav4), and year.
class Car {
    constructor(make, model, year) {
    this.make = "Chevy";
    this.model = "Malibu";
    this.year = "2024";
    }


// Car should also include a method, .describe which simply returns "This is a YEAR MODEL, made by MAKE." replacing YEAR, MODEL and MAKE with the correct information from the Car object.

describe() {
    return("This is a " + this.year + ' ' + this.model + ", made by " + this.make);
}
}
const chevyMalibu = new Car("Chevrolet", "Malibu", "2024");

console.log(chevyMalibu.describe())
 // This is a 2024 Malibu, made by Chevrolet.


// Create 4 cars (with any make, model and year) and push them all to a new array called allCars.

    // You will need to create 4 new variables, using the const {{carname}} = new Car() syntax. {{ carname }} is just whatever variable name you'll choose.

    // You can add the cars manually when creating the allCars array, or create the empty array and use .push() to add each car individually.

// Write a function with a single parameter car that, when called, will console.log the Car.describe method for the car used in the parameter.

    // Declare the function using function {{ functionName }} (car) {};


// Loop through allCars and call the function to log each car's describe method to the console one by one.
    // You can use a for(), or forEach loop to achieve this. Remember to use allCars.length in your end condition if you use a for() loop.
    // Remember you can call a function by simply writing the function with parenthesis around the parameters:
        // functionName(param1, param2, param3, ...);