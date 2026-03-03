// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 // --> it is a number in js, it can be an integer or a decimal number
const scoreValue = 100.3 // --> it is also a number in js


const isLoggedIn = false // true or false
const outsideTemp = null // --> it returns object but it is a bug in js
let userEmail; // --> it is undefined

const id = Symbol('123') // --> it returns function as Symbol('123') and symbol when typeof(Symbol)
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 123445668764694n // --> it returns bigint and it is used when we have to deal with very large numbers which are greater than 2^53 - 1


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"] // -->it returns object when we check the type of array
 
let myObj = {           // --> it returns object when we check the type of object
    name: "Neelesh",
    age: 23,
}

const myFunction = function() {  // --> it returns function when we check the type of function
    console.log("Hello world");
}

console.log(typeof myFunction);

// link --> https://tc39.es/ecma262/2023/multipage/abstract-operations.html#sec-type-conversion

// +++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive) and Heap(Reference)

// Primitive data types are stored in stack and reference data types are stored in heap. Stack is faster than heap because it is a simple data structure and it is used for storing primitive data types which are small in size. Heap is used for storing reference data types which are large in size and it is slower than stack because it is a complex data structure and it is used for storing reference data types which are large in size.

// When we assign a primitive data type to a variable, it creates a copy of the value and stores it in the stack.
//  When we assign a reference data type to a variable, it creates a reference to the value and stores it in the heap.
//  When we change the value of a primitive data type, it does not affect the original value because it is stored in the stack.
//  When we change the value of a reference data type, it affects the original value because it is stored in the heap.

let myYoutubeName = "Neelesh YT"

let anotherYoutubeName = myYoutubeName

//console.log(myYoutubeName);
//console.log(anotherYoutubeName);

myYoutubeName = "Neelesh YT channel"

console.log(myYoutubeName);
console.log(anotherYoutubeName);

let userOne = {
    email: "yadavneelesh669@gmail.com",
    upi: "neelesh@ybl"
}

let userTwo = userOne

userTwo.email = "neelesh@googgle.com"

console.log(userOne);
console.log(userTwo);

