//data types:
let name = "Satya";
console.log(name);

let age = 25;
console.log(name+' '+age);

let color = 'red';
console.log(color);

let range = 4;
range = 5;
console.log(range);

//constant in java script
const direction = 4;
//direction = 6; --> constant value can't be changed
const no_days_in_a_week = 7;


//4 Imp data types in javs script
//1 - premetive data types
    // a - String
    // b - Number
    // c - Boolean
    // d - undefined
    // e - null rpresented by object

let s = 'string'; console.log(typeof(s));
let num = 15; console.log(typeof(num));
let isActive = true; console.log(typeof(isActive));
let model = null; console.log(typeof(model));
let wheels = undefined; console.log(typeof(wheels));

//Dynamic typing:
let k = 'satya';
k = 30;
console.log(typeof(k));

//2 - reference data types
    // a - Object
    // b - Arrays
    // c - Functions

//a - Object: 
let user = {
    name:'Satya',age:30
};
console.log(user)
//To access the object properties :
//Using "."
console.log(user.name);
user.age = 35;
console.log(user.age);
//using bracket
console.log(user['age'])

//b - Arrays: (in JS Array is dynamic and can hold multiple data types)
//list of objects
let language = ['java','js','c++'];
console.log(language);
console.log(language[1]);
console.log(language.length);
console.log(typeof(language));


//c - functions
//Please refer BasicOfFunction.js



