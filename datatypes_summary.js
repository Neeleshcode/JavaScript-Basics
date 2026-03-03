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