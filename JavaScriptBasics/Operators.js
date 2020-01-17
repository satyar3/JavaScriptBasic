//Arithmatic
//Assignment
//Ternary
//copmarison
//logical
//bitwise

//1 - Arithmatic
let x = 10;
let y = 20;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x**y); //Power of a number
console.log(x/y);
console.log(x%y);


//++ and --

let m = 5;
console.log(m++);
console.log(++m);


//2-Assignment
let x1 = 10;
let x2 = x1+10;

let y1 = 9;
y1*= 10;
console.log(y1);


//3-comparision
let a = 10;
console.log(a>5);
//Strict quality --> Here type as well as value will be checked
console.log(a === 10);
//loose equality --> Here only the value will be checked but type will not be checked
let b = '10';
console.log(b === 10);   
console.log(b == 10);   


//3 - Ternary Opeartor
let points = 100;
let type = points > 100 ? 'gold':'silver'
console.log(type);

//4- logical operators
//AND (&&), || 
console.log(false && false);
console.log(true && true);
let highIncome = true;
let isGoodCredit = true;
let loanEligible = highIncome && isGoodCredit;
console.log(loanEligible);
console.log(false || false);
console.log(false || true);

//NOT(!)
console.log(!true);

//logical operators with non boolean values
//--> It'll check for non falsy value, it can be --> undefined, null, 0, flase, '', NaN (not a number)
//Here the check will will happen from left to right, if any of the value is truthy while checking from left to right then that
//truthy value will be be printed
console.log(false || 'satya') //--> here satya is not part of non flasy list, hence it'll be printed as it's a truthy value
console.log(false || null);
console.log(false || null || 'satya');
console.log(false || 'satya' || undefined);

let userColor = 'red';
let defaultColor = 'blue';
console.log(userColor || defaultColor);
userColor = NaN;
console.log(userColor || defaultColor);

//Bitwise operator --> No widely used
//1 - 00000001
//2 - 00000010
//3 - 00000011
console.log(1|2); //3 --> either of 1, it'll be 1
console.log(1&2); //0 --> either of 0, it'l be zero

//Operator preceence
console.log(2+3*4);


