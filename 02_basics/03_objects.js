//singelton
const user = Object.create(null)

user.name = "Neelesh"
user.age = 22

// console.log(user);

//object literals


const mySym = Symbol("key1")

const JsUser = {
    name: "Neelesh",
    "full name": "Neelesh yadav",
    [mySym]: "mykey1",
    age: 18,
    locations: "Jaipur",
    email: "neelesh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log(JsUser);

JsUser.email = "neelesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "neelesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user", ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());






