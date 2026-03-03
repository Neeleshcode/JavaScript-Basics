const name = "Neelesh"
const repoCount = 50

// console.log(name + " has " + repoCount + " repositories");

console.log(`My name is ${name} and I have ${repoCount} repositories`);
 // --> it returns the string as it is because it is not a template literal

 const gameName = new String("Resident Evil - 05")
 
 console.log(gameName); // --> it returns an object when we check the type of gameName
 console.log(typeof gameName);

 console.log(gameName[0]);
 console.log(gameName.__proto__); // --> it returns the prototype of the string object

//  console.log(gameName.length);
//  console.log(gameName.toLowerCase());
 console.log(gameName.charAt(2));
 console.log(gameName.indexOf('T'));

 const newString = gameName.substring(-8, 4)
 console.log(newString);

 const anotherString = gameName.slice(-8, 4)
 console.log(anotherString);

 const newStringOne = "   Neelesh   "
 console.log(newStringOne);
 console.log(newStringOne.trim());

 const url = "https://neelesh.com/neelesh%20yadav"

 console.log(url.replace('%20', '-'))

 console.log(url.includes('neelesh'))

 console.log(gameName.split(' '));

 

 