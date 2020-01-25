const message = 'this is my first js code';
console.log(message);

const message1 = 'this is my \n first js code';
console.log(message1);

const message3 = 'this is my\n'+
                 'first js code';
console.log(message3);


//literals
//objects {}
//boolean --> true, false
//string --> '' or ""
//in ES6 = Template Literals introduced --> Back Tick Chars `` (you can put anything)

const message4 = `this is my 'js' code and ''1fjof'`;
console.log(message4);

const message5 = `Hi This,
test mail.
Thanks`;
console.log(message5);

//Passing variable to template literals
let name = 'tom';
const message6 = `Hi ${name} ${2+4},
test mail.
Thanks`;
console.log(message6);

//Passing function to a template literal

let price = function(){

    return 'apple';
}

let name2 = 'tom2';
const message7 = `Hi ${name2} ${2+4}  ${price()},
test mail.
Thanks`;
console.log(message7);